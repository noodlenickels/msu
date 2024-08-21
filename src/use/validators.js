export * from '@vuelidate/validators';

export function phone(value) {
  const number = value.number.replace(/[^0-9]/g, '');
  // const ext = value.ext.replace(/[^0-9]/g, '');

  return number.length === 11;
}

export function autocomplete(value) {
  return !!value;
}

export function contractorWithoutSigner(value) {
  // console.log(value);
  return !!value?.contractor?.counteragent_id;
}

export function contractorWithSigner(value) {
  return !!value?.contractor?.counteragent_id && !!value.signerId;
}

export function contractProlongation(value) {
  if ( !!value ) {
    if ( value?.prolongation === 2 ) {
      return true;
    } else {
      return !!value?.duration;
    }
  }
  return false;
}

export function nonEqualsCustomerExecutor(value, form) {
  return form.customer.contractor?.counteragent_id !== form.executor.contractor?.counteragent_id;
}

export function conditionFile(value) {

  if ( !value ) {
    return true;
  }
  return requiredConditionFile(value);
}

export function roleConditionFile(isDir) {

  if ( isDir ) {
    return () => true;
  }

  return conditionFile

}


export function requiredConditionFile(value) {
  const selectedFile = !!value?.has_file && value.has_file === true

  return selectedFile && (value?.files?.length > 0 || !!value?.files?.file_id) || !selectedFile;
}

export function ip4address(value) {
  return /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(value);
}

export function contractSites(value) {
  return Array.isArray(value) && value.length > 0;
}
