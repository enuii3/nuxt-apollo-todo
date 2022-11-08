<template>
  <emit-child @eventTest1="test1" @eventTest2="test2" />
</template>

<script>
import EmitChild from './EmitChild.vue'
export default defineComponent({
  components: {
    EmitChild,
  },
  setup(_props, _context) {
    const test1 = () => {
      alert('emit test1!!!')
    }
    const test2 = (param1, param2) => {
      alert('emit test2 ' + param1 + ':' + param2)
    }

    return {
      test1,
      test2,
    }
  },
})
</script>
