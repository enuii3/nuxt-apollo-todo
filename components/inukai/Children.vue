<template>
  <div>
    childrens

    <GrandChildren></GrandChildren>
  </div>
</template>

<script lang="ts">
import GrandChildren from '@/components/inukai/GrandChildren.vue'

export default defineComponent({
  name: 'ChildrenS',
  components: { GrandChildren },
  setup() {
    onMounted(() => {
      // eslint-disable-next-line no-console
      console.log('onMounted')
    })
  },
})
</script>
