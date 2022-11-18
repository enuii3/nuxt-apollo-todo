<template>
  <div>
    <h2>AddTodo</h2>
    <TodoAdd @add="addTask" />
    <br />
    <h2>TodoList</h2>
    <TodoList :tasks="tasks" @done="doneTask" @delete="deleteTask" />
    <br />
    <h2>Launch List</h2>
    <Launches />
  </div>
</template>

<script setup lang="ts">
import TodoList, { Task } from '~~/components/nukui/molecules/TodoList.vue'
import TodoAdd from '~~/components/nukui/molecules/TodoAdd.vue'
import Launches from '~~/components/nukui/atoms/launches/Launches.vue'

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
</script>

<script lang="ts">
export default defineComponent({
  name: 'HomeComponent',
})
</script>
