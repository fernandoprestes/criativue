<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const layout = computed(() => {
    const route = useRoute();
    return route.meta.layout;
  });
</script>
<template>
  <component :is="layout" />
</template>
