import { ref } from 'vue'

export const tasks = ref([
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
  {
    id: 3,
    title: '歯を磨く',
    done: true,
  },
  {
    id: 4,
    title: '朝食を食べる',
    done: false,
  },
  {
    id: 5,
    title: '顔を洗う',
    done: true,
  },
])
