<template>
  <div>
    <v-overlay absolute color="white" :value="isLoading">
      <v-progress-circular
        indeterminate
        color="black"
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <ul>
      <li v-for="launch in list" :key="launch.id">
        <p>id: {{ launch.id }}</p>
        <p>isBooked: {{ launch.isBooked }}</p>
        <p>rocket: {{ launch.rocket.name }}</p>
        <p>rocket: {{ launch.mission.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useLaunches } from './useLaunches'
const { list, isLoading, fetchList } = useLaunches()
fetchList()
</script>

<script lang="ts">
export default defineComponent({
  name: 'LaunchComponent',
})
</script>
