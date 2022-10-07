<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps({
    modelValue: { type: [Array<number | string>, Boolean], default: false },
    value: { type: [Boolean, Object, String, Number], default: false },
  });

  const emit = defineEmits(['update:modelValue']);
  const model = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    },
  });
</script>

<template>
  <label class="form-control">
    <input
      v-bind="$attrs"
      v-model="model"
      :value="value"
      name="checkbox"
      type="checkbox"
      class="checkbox"
    />
  </label>
</template>

<style scoped lang="scss">
  .form-control {
    font-size: 30px;
    font-weight: bold;
  }

  .checkbox {
    display: grid;
    place-content: center;
    width: 27px;
    height: 27px;
    border: 1px solid $color-border;
    border-radius: 8px;
    transform: translateY(-0.075em);
    appearance: none;
  }

  .checkbox::before {
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    content: '';
    background-color: $color-primary;
    transition: all 120ms ease-in-out;
    transform: scale(0);
  }

  .checkbox:checked::before {
    transform: scale(1);
  }

  .checkbox:focus {
    outline-offset: max(2px, 0.15em);
  }

  .checkbox:disabled {
    color: $color-accent;
    cursor: not-allowed;
  }
</style>
