import { computed, watch } from 'vue';
import { useVuelidate } from '@vuelidate/core';

export function useForms(values, rules) {
  const inputs = Object.keys(values);

  const v$ = useVuelidate(rules, values);

  const $isError = computed(() => v$.value.$error);

  const $isValid = computed(() => !$isError.value);

  const $errors = computed(() => {
    const errors = {};
    inputs.forEach(input => {
      if ( v$.value[input] ) {
        const validatedValue = v$.value[input];
        if ( validatedValue.$error ) {
          errors[input] = validatedValue?.$errors[0]?.$message;
        }
      }
    });
    return errors;
  });

  const $invalid = computed(() => {
    const invalid = {};
    inputs.forEach(input => {
      if ( v$.value[input] ) {
        invalid[input] = v$.value[input].$invalid;
      }
    });
    return invalid;
  });

  const $dirty = computed(() => {
    const dirty = {};
    inputs.forEach(input => {
      if ( v$.value[input] ) {
        dirty[input] = v$.value[input].$dirty;
      }
    });
    return dirty;
  });

  const $validate = async () => {
    return await v$.value.$validate();
  };

  const $data = computed(() => {
    const data = {};
    inputs.forEach(input => {
      if ( v$.value[input] ) {
        data[input] = v$.value[input]?.$model;
      }
    });
    return data;
  });

  watch($data, (newValues, oldValues) => {
    inputs.forEach(input => {
      if ( oldValues?.[input] !== newValues?.[input] ) {
        v$.value?.[input].$validate();
      }
    });
  });

  return { v$, $validate, $isError, $isValid, $errors, $data, $invalid, $dirty };
}