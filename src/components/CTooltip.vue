<script lang="ts" setup>
  import { ref } from 'vue';

  interface InputProps {
    text?: string;
  }
  defineProps<InputProps>();

  const tip = ref(false);
</script>

<template>
  <div class="tooltip-group">
    <div
      v-if="tip"
      class="tooltip-item"
    >
      {{ text }}
    </div>
    <div
      style="width: 16px; height: 16px"
      @mouseover="tip = true"
      @mouseleave="tip = false"
    >
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .tooltip-group {
    position: absolute;
    z-index: 9999;
    width: clamp(246px, 0%, 0px);
  }

  .tooltip-item {
    position: absolute;
    bottom: 20px;
    z-index: 9999;
    padding: 4px 6px;
    font-size: 12px;
    font-weight: bold;
    color: color('white');
    background-color: color('text');
    border-radius: 8px;
  }
</style>
