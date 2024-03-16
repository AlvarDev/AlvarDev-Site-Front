<template>
  <NuxtLayout>
    <v-app>
      <Home />
    </v-app>
  </NuxtLayout>
</template>

<script lang="ts">

import Home from '@/src/pages/home.vue';
export default {
  components: { Home },
}

</script>