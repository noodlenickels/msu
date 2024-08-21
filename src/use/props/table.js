const validTypes = [ 'text', 'string', 'yesNo', 'date', 'number' ];
const typeValidation = (val) => {
  if ( validTypes.indexOf( val ) !== -1 ) {
    console.warn( 'Свойство type должно быть одним из: ' + validTypes.join( ', ' ) );
    return false;
  }
  return true;
};

/*
* типы данных в таблице
*/
export const tableDataTypeProps = {
  dataType: {
    type: String,
    required: false,
    default: 'text',
    validation: typeValidation,
  },
};

export const tableDataValueProps = {
  dataValue: {
    type: [ String, Number, Boolean ],
    required: false,
    default: '',
  },
};
