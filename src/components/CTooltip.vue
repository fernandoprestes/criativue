<script lang="ts" setup>
  import { ref } from 'vue';

  interface InputProps {
    text?: string;
  }
  defineProps<InputProps>();

  const tip = ref(false);
</script>

<template>
  <div
    class="tooltip-group"
    @mouseover="tip = true"
    @mouseleave="tip = false"
  >
    <div
      v-if="tip"
      class="tooltip-item"
    >
      {{ text }}
    </div>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
  .tooltip-group {
    position: relative;
    width: clamp(246px, 100%, 0px);
  }

  .tooltip-item {
    position: absolute;
    bottom: 25px;
    z-index: 9999;
    padding: 4px 6px;
    font-size: 12px;
    font-weight: bold;
    color: color('white');
    background-color: color('text');
    border-radius: 8px;
  }
</style>
