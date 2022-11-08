<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
  <!-- リストのみにする -->
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

<script lang="ts">
// 不要なimport削除

// 仕様を明確にするためにintarfaceを定義。typs/Task.tsを作ってもよい。
// import { PropType } from 'vue'
export interface Task {
  id: number
  title: string
  done: boolean
}
// defineProps<{
//   tasks: Task[]
// }>()

// export default defineComponent({
//   // 名前変更
//   name: 'TaskList',
//   // dataを削除し、代わりにデータ参照用にpropsを追加
//   // props: {
//   //   tasks: {
//   //     // 型定義、
//   //     type: Array as PropType<Task[]>,
//   //     // 必須項目、必須ではない場合はdefaultを設定しておくとよい。
//   //     required: true,
//   //   },
//   // },
//   // setup() {

//   //   return { doneTask, deleteTask }
//   // },

//   // // setupにpropsを追加、props経由でtasksを参照する。
//   // setup(props) {
//   //   // taskを検索し、フラグを更新する。
//   //   const doneTask = (id: number) => {
//   //     const task = props.tasks.find((t) => t.id === id)
//   //     if (task !== undefined) {
//   //       task.done = !task.done
//   //     }
//   //   }
//   //   // taskを削除する。
//   //   const deleteTask = (id: number) => {
//   //     props.tasks.forEach((task, index) => {
//   //       if (task.id === id) props.tasks.value.splice(index, 1)
//   //     })
//   //   }
//   //   // 不要な定義を削除
//   //   return { doneTask, deleteTask }
//   // },
// })
</script>

<script lang="ts" setup>
defineProps<{
  tasks: Task[]
}>()
// tureとfalseを切り替える処理
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
