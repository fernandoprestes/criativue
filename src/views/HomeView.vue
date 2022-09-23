<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import CButton from '@/components/CButton.vue';
  import CInput from '@/components/CInput.vue';
  import CAutocomplete from '@/components/CAutocomplete.vue';

  import { COUNTRY_LIST } from '@fake-data/CountriesList';

  interface IFormData {
    name?: string;
    age?: number | null;
    email?: string;
  }

  const formData: IFormData = reactive({});

  const something = ref(0);
</script>

<template>
  <div class="wrapper-div">
    <h2>Buttons</h2>
    <div class="button-group">
      <CButton>Primary</CButton>
      <CButton variant="secondary">Secondary</CButton>
      <CButton variant="outline">Outline</CButton>
    </div>
  </div>
  <div class="wrapper-div">
    <h2>Inputs</h2>
    <div class="button-group">
      <CInput
        v-model="formData.name"
        required
        label="Nome *"
      />
      <CInput
        v-model="formData.age"
        label="Idade"
        type="number"
      />
      <CInput
        v-model="formData.email"
        required
        label="Email*"
        type="email"
      />
      <CInput
        disabled
        label="Input disabled"
      />
    </div>
  </div>
  <div>FormData: {{ formData }}</div>
  <div>{{ something }}</div>
  <div>
    <CAutocomplete
      v-model="something"
      label="Paises"
      :options-list="COUNTRY_LIST"
    />
  </div>
</template>
<style lang="scss" scoped>
  .wrapper-div {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .button-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px 16px;
  }
</style>
