import { ref } from 'vue';
import * as Yup from 'yup';
import { validateFullName, validateEmail } from '@/composables/validator';

export const isEmailFiledDisabled = ref(true);
export const schema = Yup.object().shape({
  name: Yup.string()
    .test('validade-full-name', function (value) {
      const validation = validateFullName(value || '');
      if (!validation.isValid) {
        return this.createError({
          path: this.path,
          message: validation.errorMessage,
        });
      }
      return true;
    })
    .required('O nome é obrigatório'),
  age: Yup.number().typeError('Deve ser um numero').required('A idade é obrigatória'),
  country: Yup.string().required('O país é obrigatório'),
  email: Yup.string().when([], {
    is: () => !isEmailFiledDisabled.value,
    then: Yup.string()
      .email()
      .test('validade-email', function (value) {
        const validation = validateEmail(value || '');
        if (!validation.isValid) {
          return this.createError({
            path: this.path,
            message: validation.errorMessage,
          });
        }
        return true;
      })
      .required('Email é obrigatório'),
    otherwise: Yup.string().notRequired(),
  }),
});
