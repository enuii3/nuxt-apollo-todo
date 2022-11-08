<template>
  <!-- __Home copy.vue -->
  <div>
    <v-text-field
      v-model="newTaskTitle"
      class="mt-3 ml-3"
      label="Add Task"
      clearable
      hide-details
      counter
      maxlength="20"
      prepend-icon="mdi-plus"
      color="blue darken-2"
      @keyup.enter="addTask"
    ></v-text-field>
    <v-list>
      <!-- divでtasksをループで出力する。templateは使えない。 -->
      <div v-for="task in tasks" :key="task.id">
        <!-- クリックしたら、背景色を変更し、tasksを更新するイベントを追加 -->
        <v-list-item
          :class="{ 'blue lighten-5': task.done }"
          @click="doneTask(task.id)"
        >
          <!-- タイトル、チェックボックスをtasksと連動させる -->
          <v-list-item-action>
            <v-checkbox :input-value="task.done"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <!-- タスクが完了したら取り消し線にする。 -->
            <v-list-item-title
              :class="{ 'text-decoration-line-through': task.done }"
              >{{ task.title }}</v-list-item-title
            >
          </v-list-item-content>

          <!-- deleteアイコンに変更し、tasksを削除するイベント追加 -->
          <v-list-item-icon>
            <v-icon color="primary" @click="deleteTask(task.id)">
              mdi-delete
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'HOME',
  setup() {
    const newTaskTitle = ref('')
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
    const addTask = () => {
      if (newTaskTitle.value.length > 0) {
        const newTask = {
          id: Date.now(),
          title: newTaskTitle.value,
          done: false,
        }
        tasks.value.push(newTask)
        newTaskTitle.value = ''
      }
    }
    return { tasks, newTaskTitle, doneTask, deleteTask, addTask }
  },
})
</script>
