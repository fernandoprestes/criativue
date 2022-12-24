<script lang="ts" setup>
  import { reactive, ref } from 'vue';

  const filterOptions = reactive([
    {
      value: '',
      label: 'Todos',
    },
    {
      value: 'active',
      label: 'Ativos',
    },
    {
      value: 'inactive',
      label: 'Inativos',
    },
  ]);
  const selectedOption = ref('');
</script>

<template>
  <div class="filter-group">
    <label
      v-for="(item, index) in filterOptions"
      :key="index"
      :for="item.label"
      class="filter-item"
      :class="{ 'filter-selected': selectedOption === item.value }"
    >
      <input
        :id="item.label"
        v-model="selectedOption"
        type="radio"
        :name="item.label"
        :value="item.value"
        class="u-sr-only"
      />
      {{ item.label }}
    </label>
  </div>
</template>
<style scoped lang="scss">
  .filter-group {
    display: flex;
    gap: 8px;
  }

  .filter-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    padding: 22px 15px;
    font-size: 14px;
    color: color('gray-1');
    cursor: pointer;
    border-radius: 8px;

    &.filter-selected {
      color: $color-blue-bravve-1;
      background: $color-background-blue;
    }
  }
</style>
