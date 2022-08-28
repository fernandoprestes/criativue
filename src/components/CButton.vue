<script setup lang="ts">
  interface Props {
    variant: 'primary' | 'secondary' | 'outline';
    label: string;
  }
  defineProps<Props>();

  const context = {
    primary: '--primary',
    secondary: '--secondary',
    outline: '--outline',
  };
</script>
<template>
  <button
    :class="['base-button ', context[variant]]"
    v-bind="$attrs"
  >
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
  .base-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    color: $color-accent;
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
      background: $color-primary;
    }

    &.--secondary {
      background: $color-secondary;
    }

    &.--outline {
      color: $color-primary;
      border: 1px solid $color-primary;
    }

    &.--outline:hover {
      color: $color-accent;
      background: $color-primary;
    }
  }
</style>
