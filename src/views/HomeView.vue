<script lang="ts" setup>
  import { reactive, ref, watch } from 'vue';
  import CButton from '@/components/CButton.vue';
  import CInput from '@/components/CInput.vue';
  import CAutocomplete from '@/components/CAutocomplete.vue';

  import { COUNTRY_LIST } from '@fake-data/CountriesList';
  import CCheckbox from '../components/CCheckbox.vue';

  interface IFormData {
    name?: string;
    age?: number | null;
    email?: string;
  }

  const formData: IFormData = reactive({});

  const something = ref([2, 3, 7, 5]);
  const somethingBoolean = ref(false);
  const countrySelected = ref(0);

  watch(something, () => {
    console.log(something.value);
  });
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
        :value="formData.name"
        required
        label="Nome *"
        class="teste"
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
      v-model="countrySelected"
      label="Países"
      :options-list="COUNTRY_LIST"
    />
  </div>
  <div>
    <CCheckbox
      v-model="somethingBoolean"
      :value="false"
    />
    <CCheckbox
      v-model="something"
      :value="2"
    />
    <CCheckbox
      v-model="something"
      :value="3"
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
