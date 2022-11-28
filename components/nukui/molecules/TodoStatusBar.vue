<template>
  <div class="d-flex">
    <div class="d-flex flex-column">
      <h2 class="align-center">未完了</h2>
      <v-list>
        <div v-for="task in incompleteTask" :key="task.id">
          <v-list-item>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                @click="clickCheckbox(task.id)"
              ></v-checkbox>
            </v-list-item-action>
            {{ task.title }}</v-list-item
          >
        </div>
      </v-list>
    </div>
    <div class="d-flex flex-column ml-auto">
      <h2>完了</h2>
      <v-list>
        <div v-for="task in completedTask" :key="task.id">
          <v-list-item>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                @click="clickCheckbox(task.id)"
              ></v-checkbox>
            </v-list-item-action>
            {{ task.title }}</v-list-item
          >
        </div>
      </v-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Task } from '@/components/nukui/molecules/TodoList.vue'
const props = defineProps<{ tasks: Task[] }>()

const emit = defineEmits<{
  (e: 'change-task', id: number): void
}>()

const clickCheckbox = (id: number) => {
  emit('change-task', id)
}

const incompleteTask = computed(() => {
  return props.tasks.filter((todo) => todo.done === false)
})

const completedTask = computed(() => {
  return props.tasks.filter((todo) => todo.done === true)
})
</script>
