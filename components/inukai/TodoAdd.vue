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

<script lang="ts">
// 型定義を追加、不要なimport削除
import { Task } from '@/components/inukai/TodoList.vue'

// export default defineComponent({
//   // 名前変更
//   name: 'TaskAdd',
//   // dataを削除し、代わりにデータ参照用にpropsを追加
//   props: {
//     tasks: {
//       type: Array as () => Task[],
//       required: true,
//     },
//   },
//   setup(props) {
//     const newTaskTitle = ref('')
//     // taskを追加する。
//     const addTask = () => {
//       if (newTaskTitle.value.length > 0) {
//         const newTask: Task = {
//           id: Date.now(),
//           title: newTaskTitle.value,
//           done: false,
//         }
//         props.tasks.push(newTask)
//         newTaskTitle.value = ''
//       }
//     }
//     // 不要な定義を削除
//     return { newTaskTitle, addTask }
//   },
// })
</script>

<!-- 追加 -->

<script lang="ts" setup>
defineProps<{
  tasks: Task[]
}>()
// tureとfalseを切り替える処理
const newTaskTitle = ref('')
const emit = defineEmits<{
  (e: 'add', title: string): void
}>()

const addTask = () => {
  emit('add', newTaskTitle.value)
  newTaskTitle.value = ''
}
</script>
