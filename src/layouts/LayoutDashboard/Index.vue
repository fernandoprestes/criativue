<script setup lang="ts">
  import TheHeader from './TheHeader.vue';
  import TheSidebar from './TheSidebar.vue';
</script>
<template>
  <TheHeader />
  <main class="wrapper">
    <TheSidebar />
    <RouterView />
  </main>
</template>
<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex: 1 1 0;
  }
</style>
