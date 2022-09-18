<script lang="ts" setup>
  import { ref } from 'vue';
  import { onClickOutside, useVirtualList } from '@vueuse/core';
  import { IconKeyboardArrowDown } from '@iconify-prerendered/vue-mdi';
  import type { IOptionsList } from '@/@types/SelectOptionList';
  import CInput from './CInput.vue';

  const props = defineProps<{
    modelValue?: number | null;
    label: string;
    optionsList: IOptionsList[];
  }>();

  const emit = defineEmits(['update:modelValue']);

  const optionsListRef = ref(props.optionsList);
  const showResultInput = ref<string | number>();
  const matchModelValueInput = props.optionsList.find(item => item.id === props.modelValue);

  const dropdown = ref(false);
  const dropdownRef = ref(null);
  onClickOutside(dropdownRef, () => {
    dropdown.value = false;
  });

  const selectedItem = (data: IOptionsList) => {
    showResultInput.value = data.name;
    dropdown.value = false;
    emit('update:modelValue', data.id);
  };

  const onChangeInput = ($event: Event) => {
    const selectedItem = ($event.target as HTMLSelectElement).value;
    showResultInput.value = selectedItem;
    optionsListRef.value = autocompleteMatch(selectedItem);

    if (!optionsListRef.value.length) {
      optionsListRef.value = [{ id: 0, name: 'nada nada' }];
    }
  };

  const onChangeBlur = () => {
    const isInputEqualOption = optionsListRef.value.some(item => item.name === showResultInput.value);

    if (showResultInput.value && isInputEqualOption) {
      const itemInput = optionsListRef.value.find(item => item.name === showResultInput.value);
      emit('update:modelValue', itemInput?.id);
      return;
    }

    showResultInput.value = '';
    emit('update:modelValue', 0);
  };

  const autocompleteMatch = (textSearch: string): IOptionsList[] => {
    if (textSearch === '') {
      emit('update:modelValue', 0);
      return props.optionsList;
    }
    const valueInLowerCase = new RegExp(textSearch.toLocaleLowerCase());

    return props.optionsList.filter(item => {
      const itemInLowerCase = item.name.toLowerCase();
      if (itemInLowerCase.match(valueInLowerCase)) {
        return item;
      }
    });
  };

  const onClickOpenDropdown = () => {
    if (!showResultInput.value || !dropdown.value) {
      optionsListRef.value = props.optionsList;
      dropdown.value = true;
      return;
    }
  };

  const { list, containerProps, wrapperProps } = useVirtualList(optionsListRef, {
    itemHeight: 35,
  });

  matchModelValueInput && selectedItem(matchModelValueInput);
</script>

<template>
  <div class="autocomplete-wrapper">
    <CInput
      v-bind="$attrs"
      v-model="showResultInput"
      type="text"
      :label="label"
      @click="onClickOpenDropdown"
      @focus="onClickOpenDropdown"
      @blur="onChangeBlur"
      @keyup="onChangeInput"
    />
    <div
      class="icon-chevron"
      :class="{ active: dropdown }"
    >
      <IconKeyboardArrowDown />
    </div>
    <div
      v-if="dropdown"
      ref="dropdownRef"
    >
      <div
        class="dropdown"
        v-bind="containerProps"
        style="height: auto"
      >
        <div
          class="dropdown-content"
          v-bind="wrapperProps"
        >
          <div
            v-for="item in list"
            :key="item.data.id"
            tabindex="0"
            class="dropdown-item"
            :class="{ 'select-disabled': !item.data.id }"
            @click="selectedItem(item.data)"
            @keyup.enter="selectedItem(item.data)"
          >
            {{ item.data.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .autocomplete-wrapper {
    position: relative;
  }

  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    z-index: 10;
    width: 100%;
    min-height: 100px;
    max-height: 210px;
    overflow: auto;
    border-radius: 8px;
    box-shadow: 2px 2px 5px rgb(10 10 10 / 10%);
    scrollbar-width: thin;
    scrollbar-color: $color-primary transparent;

    &::-webkit-scrollbar {
      width: 8px;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: $color-primary;
      -webkit-border-radius: 8px;
    }
  }

  .dropdown-content {
    padding: 10px 0;
  }

  .dropdown-item {
    padding: 4px 10px;
    font-weight: 400;

    &:hover {
      color: $color-white;
      cursor: pointer;
      background: $color-primary;
    }
  }

  .icon-chevron {
    position: absolute;
    top: 15px;
    right: 15px;

    &.active {
      top: 10px;
      transform: rotate(-180deg);
    }
  }

  .select-disabled {
    pointer-events: none;
  }
</style>