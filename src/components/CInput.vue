<script setup lang="ts">
  import { toRef } from 'vue';
  import { useField } from 'vee-validate';
  import { IconInfoCircleOutline } from '@iconify-prerendered/vue-mdi';
  import CTooltip from './CTooltip.vue';

  interface InputProps {
    name: string;
    label: string;
    modelValue?: string | number | null;
    successMessage?: string;
    failedMessage?: string;
    tooltipMessage?: string;
  }
  const props = defineProps<InputProps>();

  const inputNameRef = toRef(props, 'name');
  const inputValueRef = toRef(props, 'modelValue');

  const {
    value: inputValue,
    errorMessage,
    handleBlur,
    handleChange,
    meta,
  } = useField(inputNameRef, undefined, {
    initialValue: inputValueRef,
  });
</script>
<template>
  <div class="input-group">
    <input
      :id="name"
      :name="name"
      :value="inputValue"
      :placeholder="label"
      v-bind="$attrs"
      class="input-field"
      @input="handleChange"
      @blur="handleBlur"
    />
    <label class="input-label">{{ label }}</label>
    <span
      v-if="errorMessage && !meta.valid && props.tooltipMessage"
      class="has-error-icon"
    >
      <CTooltip :text="props.tooltipMessage">
        <IconInfoCircleOutline />
      </CTooltip>
    </span>
    <span
      v-if="errorMessage || meta.valid"
      class="has-error-label"
    >
      {{ meta.valid ? successMessage : errorMessage }}
    </span>
    <span
      class="input-border"
      :class="{ error: errorMessage }"
    ></span>
  </div>
</template>
<style scoped lang="scss">
  .input-group {
    position: relative;
    flex: 1 1 auto;
    padding: 4px 16px;
    margin-bottom: 16px;
    font-size: 16px;
    background: color('white');
    border-radius: 8px 8px 0 0;
  }

  .input-group:where([disabled='true']),
  .input-group:where([disabled='']) {
    background: color(gray-1);
  }

  .input-field {
    display: block;
    width: 95%;
    padding: 8px 0 0;
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
    top: 8px;
    left: 16px;
    width: 80%;
    overflow: hidden;
    color: color(gray-1);
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    transition: 0.2s ease all;
  }

  .input-group:where([disabled='true']) .input-label,
  .input-group:where([disabled='']) .input-label {
    top: 8px;
    color: color(gray-2);
  }

  .input-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    pointer-events: none;
    background: color(border);

    &.error {
      background: color(error) !important;
    }
  }

  .input-group:where([disabled='true']) .input-border,
  .input-group:where([disabled='']) .input-border {
    background: color(gray-1);
  }

  .input-field:focus ~ .input-label,
  .input-field:not(:placeholder-shown) ~ .input-label {
    top: -4px;
    left: 14px;
    font-size: 12px;
    color: color(primary);
  }

  .input-group .input-field ~ .has-error-label,
  .input-group .input-field ~ .has-error-icon {
    position: absolute;
    display: block;
    color: color(error);
    word-wrap: break-word;
  }

  .input-group .input-field ~ .has-error-label {
    top: 34px;
    left: 16px;
    font-size: 12px;
  }

  .input-group .input-field ~ .has-error-icon {
    top: 12px;
    right: 4px;
    font-size: 14px;
  }

  .input-field:focus ~ .input-border,
  .input-field:not(:placeholder-shown) ~ .input-border {
    background: color(primary);
  }
</style>
