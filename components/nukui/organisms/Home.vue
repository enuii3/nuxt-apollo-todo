<template>
  <div>
    <p>AddTodo</p>
    <TodoAdd @add="addTask" />

    <p>TodoList</p>
    <TodoList :tasks="tasks" @done="doneTask" @delete="deleteTask" />
  </div>
</template>

<script lang="ts">
import TodoList, { Task } from '~~/components/nukui/molecules/TodoList.vue'
import TodoAdd from '~~/components/nukui/molecules/TodoAdd.vue'

export default defineComponent({
  name: 'HomeComponent',
  components: { TodoList, TodoAdd },
  setup() {
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
    const doneTask = (id: number) => {
      const task = tasks.value.find((t) => t.id === id)
      if (task !== undefined) {
        task.done = !task.done
      }
    }
    const deleteTask = (id: number) => {
      tasks.value.forEach((task, index) => {
        if (task.id === id) tasks.value.splice(index, 1)
      })
    }
    return { tasks, addTask, doneTask, deleteTask }
  },
})
</script>
