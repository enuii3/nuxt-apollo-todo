<template>
  <v-list>
    <div v-for="task in tasks" :key="task.id">
      <v-list-item
        :class="{ 'blue lighten-5': task.done }"
        @click="doneTask(task.id)"
      >
        <v-list-item-action>
          <v-checkbox :input-value="task.done"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon color="primary" @click="deleteTask(task.id)">
            mdi-delete
          </v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
    </div>
  </v-list>
</template>

<script setup lang="ts">
export interface Task {
  id: number
  title: string
  done: boolean
}

defineProps<{
  tasks?: Task[]
}>()

const emit = defineEmits<{
  (e: 'done', id: number): void
  (e: 'delete', id: number): void
}>()

const doneTask = (id: number) => {
  emit('done', id)
}

const deleteTask = (id: number) => {
  emit('delete', id)
}
</script>
