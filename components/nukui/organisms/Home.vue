<template>
  <div>
    <h2>AddTodo</h2>
    <TodoAdd @add="addTask" />
    <br />
    <TodoStatusBar :tasks="tasks" @change-task="changeTask" />
  </div>
</template>

<script setup lang="ts">
import TodoStatusBar from '../molecules/TodoStatusBar.vue'
import { Task } from '~~/components/nukui/molecules/TodoList.vue'
import TodoAdd from '~~/components/nukui/molecules/TodoAdd.vue'

const tasks = ref([
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
  {
    id: 3,
    title: '歯を磨く',
    done: true,
  },
  {
    id: 4,
    title: '朝食を食べる',
    done: false,
  },
  {
    id: 5,
    title: '顔を洗う',
    done: true,
  },
])
const addTask = (newTaskTitle: string) => {
  if (newTaskTitle.length > 0) {
    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      done: false,
    }
    tasks.value.push(newTask)
  }
}

const changeTask = (id: number) => {
  const task = tasks.value.find((t) => t.id === id)
  if (task !== undefined) {
    task.done = !task.done
  }
}
</script>

<script lang="ts">
export default defineComponent({
  name: 'HomeComponent',
})
</script>
