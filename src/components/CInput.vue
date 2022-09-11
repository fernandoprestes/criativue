<script setup lang="ts">
  interface InputProps {
    label: string;
    modelValue?: string | number | null;
  }
  defineProps<InputProps>();

  const emit = defineEmits(['update:modelValue']);
  const onChangeInput = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value);
  };
</script>
<template>
  <div class="input-group-wrapper">
    <input
      :id="label"
      class="input-base"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="label"
      onblur="this.setAttribute('data-content-valid', 'invalid');"
      @input="onChangeInput"
    />
    <label class="input-label">{{ label }}</label>
    <span class="has-error-icon">E</span>
    <span class="input-border"></span>
    <span class="has-error">Este campo é obrigatório</span>
  </div>
</template>
<style scoped lang="scss">
  .input-group-wrapper {
    position: relative;
    flex: 1 1 auto;
    padding: 12px 16px 4px;
    margin-bottom: 16px;
    font-size: 16px;
    background: $color-white;
    border-radius: 8px 8px 0 0;
  }

  .input-group-wrapper:where([disabled='true']),
  .input-group-wrapper:where([disabled='']) {
    background: $color-gray-1;
  }

  .input-base {
    display: block;
    width: 100%;
    padding: 12px 0 0;
    background: transparent;
    border: 0;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: transparent;
    }
  }

  .input-label {
    position: absolute;
    top: 18px;
    left: 16px;
    width: 80%;
    overflow: hidden;
    color: $color-gray-1;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    transition: 0.2s ease all;
  }

  .input-group-wrapper:where([disabled='true']) .input-label,
  .input-group-wrapper:where([disabled='']) .input-label {
    color: $color-gray-2;
  }

  .input-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    pointer-events: none;
    background: $color-border;
  }

  .input-group-wrapper:where([disabled='true']) .input-border,
  .input-group-wrapper:where([disabled='']) .input-border {
    background: $color-gray-1;
  }

  .has-error-icon,
  .has-error {
    display: none;
  }

  .input-base:where([required]):where([data-content-valid='invalid']) ~ .input-label {
    color: $color-error;
  }

  .input-base:focus ~ .input-label,
  .input-base:not(:placeholder-shown) ~ .input-label {
    top: 6px;
    left: 15px;
    font-size: 12px;
    color: $color-primary;
  }

  .input-base:focus ~ .has-error,
  .input-base:not(:placeholder-shown) ~ .has-error {
    display: none;
  }

  .input-base:focus ~ .has-error-icon,
  .input-base:not(:placeholder-shown) ~ .has-error-icon {
    display: none;
  }

  .input-group-wrapper .input-base:where([required]):where([data-content-valid='invalid']) ~ .has-error,
  .input-group-wrapper .input-base:where([required]):where([data-content-valid='invalid']) ~ .has-error-icon {
    position: absolute;
    display: block;
    color: $color-error;
  }

  .input-group-wrapper .input-base:where([required]):where([data-content-valid='invalid']) ~ .has-error {
    top: 48px;
    left: 16px;
    font-size: 10px;
  }

  .input-group-wrapper .input-base:where([required]):where([data-content-valid='invalid']) ~ .has-error-icon {
    top: 20px;
    right: 4px;
    font-size: 14px;
  }

  .input-group-wrapper .input-base:not(:placeholder-shown) ~ .has-error,
  .input-group-wrapper .input-base:not(:placeholder-shown) ~ .has-error-icon {
    display: none;
  }

  .input-base:where([required]):where([data-content-valid='invalid']) ~ .input-border {
    background: $color-error;
  }

  .input-base:focus ~ .input-border,
  .input-base:not(:placeholder-shown) ~ .input-border {
    background: $color-primary;
  }

  .input-base[type='email']:invalid:where([required]):where([data-content-valid='invalid']) {
    ~ .input-border {
      background: $color-error;
    }

    ~ .input-label {
      color: $color-error;
    }

    ~ .has-error {
      display: block;
    }
  }
</style>
