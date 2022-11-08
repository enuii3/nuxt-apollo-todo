<template>
  <v-text-field
    v-model="newTaskTitle"
    class="mt-3 ml-3"
    label="Add Task"
    clearable
    hide-details
    counter
    maxlength="20"
    prepend-icon="mdi-plus"
    @keyup.enter="addTask"
  ></v-text-field>
</template>

<script setup lang="ts">
import { Task } from '~~/components/nukui/molecules/TodoList.vue'
const emit = defineEmits(['addTaskParent'])

const newTaskTitle = ref('')
const addTask = () => {
  if (newTaskTitle.value.length > 0) {
    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle.value,
      done: false,
    }
    emit('addTaskParent', newTask)
    newTaskTitle.value = ''
  }
}
</script>
