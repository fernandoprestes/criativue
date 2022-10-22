<script setup lang="ts">
  import { computed } from 'vue';

  enum Variant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    OUTLINE = 'outline',
  }

  type VariantType = `${Variant}`;

  interface ButtonProps {
    variant?: VariantType;
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'primary',
  });

  const variantClass = computed(() => `--${props.variant}`);
</script>
<template>
  <button
    :class="['base-button ', variantClass]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
  .base-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    color: color(accent);
    text-align: center;
    cursor: pointer;
    background: transparent;
    border: 1px solid transparent;
    border-radius: $radius-medium;
    transition: all $transition-duration $easing;

    &:hover {
      filter: brightness(1.1);
    }

    &.--primary {
      background: color(primary);
    }

    &.--secondary {
      background: color(secondary);
    }

    &.--outline {
      color: color(primary);
      border: 1px solid color(primary);
    }

    &.--outline:hover {
      color: color(accent);
      background: color(primary);
    }
  }
</style>
