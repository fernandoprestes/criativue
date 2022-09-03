<script lang="ts" setup>
  import { ref } from 'vue';
  import CButton from '~/components/CButton.vue';
  import CInput from '../components/CInput.vue';

  const name = ref('');
  const age = ref();
</script>

<template>
  <div class="wrapper-div">
    <h2>Buttons</h2>
    <div class="button-group">
      <CButton
        label="Primary"
        variant="primary"
      />
      <CButton
        label="Secondary"
        variant="secondary"
      />
      <CButton
        label="Outline"
        variant="outline"
      />
    </div>
  </div>
  <div class="wrapper-div">
    <h2>Inputs</h2>
    <div class="button-group">
      <CInput
        v-model="name"
        label="Nome"
      />
      <CInput
        v-model="age"
        required
        type="number"
        label="Idade obrigatório"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .wrapper-div {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
  }
</style>
