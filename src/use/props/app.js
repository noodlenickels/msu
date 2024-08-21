/**
 * props-ы корневых элементов (приложений Vue)
 * */
export const modeProps = {
  mode: {
    type: String,
    required: false,
    default: 'view',
    validator(value) {
      const validOptions = [ 'add', 'edit', 'view' ];
      const isValid = validOptions.includes(value);
      if ( !isValid ) {
        console.warn('Vue prop "mode" can only be one of these options: ' + validOptions.join(', '));
      }
      return isValid;
    },
  },
};

export const uidProps = {
  uid: {
    type: [ String, Number ],
    required: true,
  },
};