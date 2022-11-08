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
const newTaskTitle = ref('')

const emit = defineEmits<{ (e: 'add', newTaskTitle: string): void }>()

const addTask = () => {
  emit('add', newTaskTitle.value)
  newTaskTitle.value = ''
}
</script>
