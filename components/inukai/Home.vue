<template>
  <!-- ToDoListに変更 -->
  <div>
    <TodoAdd :tasks="tasks" @add="addTask"></TodoAdd>
    <TodoList :tasks="tasks" @delete="deleteTask" @done="doneTask"></TodoList>
  </div>
</template>

<script lang="ts">
// 作成したコンポーネント、型定義を追加
import { Ref } from 'vue'

import TodoList, { Task } from '@/components/inukai/TodoList.vue'
import TodoAdd from '@/components/inukai/TodoAdd.vue'

export default defineComponent({
  name: 'HOME',
  // コンポーネントを追加
  components: { TodoList, TodoAdd },

  setup(_props, _context) {
    // 型定義を追加
    const tasks: Ref<Task[]> = ref([
      {
        id: 1,
        title: '起きる',
        done: false,
      },
      {
        id: 2,
        title: '着替える',
        done: false,
      },
    ])

    // taskを検索し、フラグを更新する。
    const doneTask = (id: number) => {
      const task = tasks.value.find((t) => t.id === id)
      if (task !== undefined) {
        task.done = !task.done
      }
    }
    // taskを削除する。
    const deleteTask = (id: number) => {
      tasks.value.forEach((task, index) => {
        if (task.id === id) tasks.value.splice(index, 1)
      })
    }

    // TodoAddタスク追加分 上記までうまくいった

    // taskを追加する。
    const addTask = (title: string) => {
      if (title.length > 0) {
        const newTask: Task = {
          id: Date.now(),
          title,
          done: false,
        }
        tasks.value.push(newTask)
      }
    }

    // 不要な記述を削除
    return { tasks, deleteTask, doneTask, addTask }
  },
})
</script>
