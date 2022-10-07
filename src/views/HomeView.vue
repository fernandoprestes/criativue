<script lang="ts" setup>
  import { reactive } from 'vue';
  import CButton from '@/components/CButton.vue';
  import CInput from '@/components/CInput.vue';
  import CAutocomplete from '@/components/CAutocomplete.vue';

  import { COUNTRY_LIST } from '@fake-data/CountriesList';
  import CCheckbox from '../components/CCheckbox.vue';

  interface IFormData {
    name?: string;
    age?: number | null;
    email?: string;
    somethingHobbies: [];
    somethingBoolean?: false;
    countrySelected?: 0;
  }

  const formData: IFormData = reactive({
    somethingHobbies: [],
  });
</script>

<template>
  <div class="wrapper-main">
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
    <div>
      <CAutocomplete
        v-model="formData.countrySelected"
        label="Países"
        :options-list="COUNTRY_LIST"
      />
    </div>
    <div class="button-group">
      <CCheckbox
        v-model="formData.somethingBoolean"
        :value="false"
        label="Aceito"
      />
      <CCheckbox
        v-model="formData.somethingHobbies"
        value="Dançar"
        label="Dançar"
      />

      <CCheckbox
        v-model="formData.somethingHobbies"
        value="Cantar"
        label="Cantar"
      />
    </div>
    <div>
      <code> FormData output: {{ formData }} </code>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .wrapper-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }

  .wrapper-div {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .button-group {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px 16px;
  }
</style>
