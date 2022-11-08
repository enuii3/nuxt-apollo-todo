<template>
  <div>
    <p>AddTodo</p>
    <TodoAdd @addTaskParent="addNewTask" />

    <p>TodoList</p>
    <TodoList :tasks="tasks" />
  </div>
</template>

<script lang="ts">
import TodoList from '~~/components/nukui/molecules/TodoList.vue'
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
    const addNewTask = (newTask) => {
      tasks.value.push(newTask)
    }
    return { tasks, addNewTask }
  },
})
</script>
