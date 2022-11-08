<template>
  <v-app id="inspire">
    <Header />

    <v-main>
      <Home />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Home from '../components/nukui/organisms/Home.vue'

export interface Item {
  title: string
  icon: string
  to: string
}

export default defineComponent({
  name: 'IndexComponent',
  components: {
    Home,
  },
  setup() {
    const items = ref([
      { title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' },
    ])
    return { items }
  },
})
</script>
