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
          <v-input></v-input>
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

<script lang="ts">
export interface Task {
  id: number
  title: string
  done: boolean
}

export default defineComponent({
  name: 'TaskList',
  props: {
    tasks: {
      type: Array as () => Task[],
      required: true,
    },
  },
  setup(props) {
    const doneTask = (id: number) => {
      const task = props.tasks.find((t) => t.id === id)
      if (task !== undefined) {
        task.done = !task.done
      }
    }
    const deleteTask = (id: number) => {
      const tasks = props.tasks
      tasks.forEach((task, index) => {
        if (task.id === id) tasks.splice(index, 1)
      })
    }
    return { doneTask, deleteTask }
  },
})
</script>
