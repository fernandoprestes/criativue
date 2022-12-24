export function useFocusScrollInput(errors: { [key: string]: string }) {
  const arrInputsErrors = Object.keys(errors);
  if (arrInputsErrors) {
    const el = document.getElementById(arrInputsErrors[0]);
    el?.focus();
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
