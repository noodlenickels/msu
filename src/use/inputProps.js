/*
* индикатор загрузки данных
*/
export const loadingProps = {
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
};

/*
* только чтение - инпут нередактируемый
*/
export const readonlyProps = {
  readonly: {
    type: Boolean,
    required: false,
    default: false,
  },
};

/*
* отключить интерактивный функционал инпута
*/
export const disabledProps = {
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
};

/*
* функционал очистки инпута
*/
export const clearableProps = {
  clearable: {
    type: Boolean,
    required: false,
    default: false,
  },
};

/*
* растянуть инпут на всю возможную ширину
*/
export const autoWidthProps = {
  autoWidth: {
    type: Boolean,
    required: false,
    default: false,
  },
};

/*
* ширина заголовка
*/
export const labelWidthProps = {
  labelWidth: {
    type: [ String, Number ],
    required: false,
    default: 100,
  },
};

/*
* ширина инпута
*/
export const inputWidthProps = {
  inputWidth: {
    type: String,
    required: false,
    default: null,
  },
};


/*
* классы навешиваемые на нативный инпут
*/
export const inputClassProps = {
  inputClass: {
    type: String,
    required: false,
    default: '',
  },
};

/*
* скругленные бордеры у инпута
*/
export const roundProps = {
  round: {
    type: [ Boolean, Array ],
    required: false,
    default: true,
  },
};

/*
* без отступа сверху от инпута
*/
export const denseProps = {
  dense: {
    type: Boolean,
    required: false,
    default: false,
  },
};

/*
* текст ошибки = состояние ошибки
*/
export const errorProps = {
  error: {
    type: [ String, Array, null ],
    required: false,
    default: null,
  },
};

/*
* иконка перед блоко ввода
*/
export const prependIconProps = {
  prependIcon: {
    type: String,
    required: false,
    default: null,
  },
};

/*
* иконка после блока ввода
*/
export const appendIconProps = {
  appendIcon: {
    type: String,
    required: false,
    default: null,
  },
};

/*
* placeholder
*/
export const placeholderProps = {
  placeholder: {
    type: String,
    required: false,
    default: null,
  },
};

/*
* заголовок инпута
*/
export const labelProps = {
  label: {
    type: String,
    required: false,
    default: null,
  },
};

/*
* бордеры инпута
*/
export const borderProps = {
  border: {
    type: [ Boolean, Array ],
    required: false,
    default: true,
  },
};

/*
* ключ id в наборе опций селекта
*/
export const selectOptionId = {
  optionId: {
    type: String,
    required: false,
    default: 'id',
  },
};

/*
* ключ text в наборе опций селекта
*/
export const selectOptionText = {
  optionText: {
    type: String,
    required: false,
    default: 'title',
  },
};



