export function validateEmail(email: string) {
  const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const isEmailValid = regexp.test(email);
  if (isEmailValid) return { isValid: true };
  return {
    isValid: false,
    errorMessage: 'Deve ser um email valido',
  };
}

export function validateFullName(fullName: string) {
  const regexp = /^([a-zA-Z]{2,})+\s+([a-zA-Z\s]{2,})+$/i;
  const isNameValid = regexp.test(fullName);
  if (isNameValid) return { isValid: true };
  return {
    isValid: false,
    errorMessage: 'Obrigatório nome e sobrenome',
  };
}
