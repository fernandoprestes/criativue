<script lang="ts" setup>
  import { reactive } from 'vue';
  import { Form } from 'vee-validate';
  import * as Yup from 'yup';

  import CButton from '@/components/CButton.vue';
  import CInput from '@/components/CInput.vue';
  import CAutocomplete from '@/components/CAutocomplete.vue';
  import CCheckbox from '@/components/CCheckbox.vue';
  import { validateFullName, validateEmail } from '@/composables/validator';

  import { COUNTRY_LIST } from '@fake-data/CountriesList';
  import { HOBBIES_LIST } from '@fake-data/HobbiesList';

  interface IFormData {
    name: string;
    age: number | null;
    email: string;
    hobbies: [];
    maritalStatus: '';
    agreeToReceiveEmail: false;
    country: 0;
  }

  const state = reactive({
    formData: {
      hobbies: [],
    } as IFormData,
  });

  const schema = Yup.object().shape({
    name: Yup.string()
      .test('validade-full-name', function (value) {
        const validation = validateFullName(value || '');
        if (!validation.isValid) {
          return this.createError({
            path: this.path,
            message: validation.errorMessage,
          });
        } else {
          return true;
        }
      })
      .required('O nome é obrigatório'),
    age: Yup.number().typeError('Deve ser um numero').required('A idade é obrigatória'),
    email: Yup.string()
      .email()
      .test('validade-email', function (value) {
        const validation = validateEmail(value || '');
        if (!validation.isValid) {
          return this.createError({
            path: this.path,
            message: validation.errorMessage,
          });
        } else {
          return true;
        }
      })
      .required('Email é obrigatório'),
  });

  function onSubmit() {
    alert(JSON.stringify(state.formData, null, 2));
  }
</script>

<template>
  <div class="container">
    <Form
      :validation-schema="schema"
      class="form-group"
      @submit="onSubmit"
    >
      <CInput
        v-model="state.formData.name"
        label="Nome"
        name="name"
        tooltip-message="O nome deve ser complete, nome e sobrenome com minimo 2 caracteres"
        type="text"
      />

      <CInput
        v-model="state.formData.age"
        label="Idade"
        type="number"
        name="age"
      />
      <CInput
        v-model="state.formData.email"
        label="Email"
        name="email"
        type="email"
      />
      <CAutocomplete
        v-model="state.formData.country"
        label="Países"
        :options-list="COUNTRY_LIST"
      />
      <CCheckbox
        v-model="state.formData.agreeToReceiveEmail"
        :value="false"
        label="Aceito receber emails com span"
      />
      <div>
        <p>Hobbies</p>
        <div class="check-group">
          <CCheckbox
            v-for="(item, index) in HOBBIES_LIST"
            :key="index"
            v-model="state.formData.hobbies"
            :value="item.name"
            :label="item.name"
          />
        </div>
      </div>
      <CButton typeof="submit">Enviar</CButton>
    </Form>

    <div>
      <code>
        {{ state.formData }}
      </code>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    width: 100%;
    height: 100%;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px 0;
    margin: 0 auto;
  }

  .check-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    max-width: 350px;
  }
</style>
