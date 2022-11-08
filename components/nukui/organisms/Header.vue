<template>
  <div>
    <v-navigation-drawer v-model="drawer" app bottom>
      <MenuList />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer">I</v-app-bar-nav-icon>
      <v-toolbar-title>App</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import MenuList from '../molecules/MenuList.vue'

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    MenuList,
  },
  setup() {
    const drawer: Boolean = ref(null)
    return { drawer }
  },
})
</script>
