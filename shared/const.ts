import { EFieldTypes, TFieldToCell } from './types';

export const defaultValues = {
  name: '',
  genre: undefined,
  format: undefined,
  unf: '',
  country: undefined,
  cost: undefined,
  synopsis: '',
  number: '',
  desc: '',
  p: '',
};

export type TFieldsToForm = {
  step: number;
  fieldToFirstCell?: TFieldToCell;
  fieldToSecondCell?: TFieldToCell;
};

export const fieldsToForm: TFieldsToForm[] = [
  {
    step: 1,
    fieldToFirstCell: [
      {
        name: 'name',
        label: 'Название проекта',
        type: EFieldTypes.text,
        rules: { required: true },
        placeholder: 'Название',
      },
      {
        name: 'genre',
        label: 'Жанр',
        type: EFieldTypes.select,
        rules: { required: true },
        isMulti: true,
        placeholder: 'Жанр',
        options: [
          { label: 'Жанр 1', value: 'genre1' },
          { label: 'Жанр 2', value: 'genre2' },
          { label: 'Жанр 3', value: 'genre3' },
        ],
      },
      {
        name: 'format',
        label: 'Формат (для онлайн-платформ, большого экрана, интернета, другое)',
        rules: { required: true },
        type: EFieldTypes.select,
        placeholder: 'Формат',
        options: [
          { label: 'Формат 1', value: 'format1' },
          { label: 'Формат 2', value: 'format2' },
          { label: 'Формат 3', value: 'format3' },
        ],
      },
      { name: 'unf', label: '№ УНФ или отсутствует', type: EFieldTypes.number, format: '89#-###-###-##-###' },
    ],
    fieldToSecondCell: [
      {
        name: 'country',
        label: 'Страна-производитель (копродукция)',
        rules: { required: true },
        type: EFieldTypes.select,
        placeholder: 'Страна',
        options: [
          { label: 'Россия', value: 'russia' },
          { label: 'Страна 2', value: 'country2' },
          { label: 'Страна 3', value: 'country3' },
        ],
      },
      {
        name: 'cost',
        label: 'Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть',
        type: EFieldTypes.number,
        placeholder: 'Сметная стоимость',
      },
      { name: 'synopsis', label: 'Синопсис', type: EFieldTypes.long_text, placeholder: 'Синопсис' },
    ],
  },
  {
    step: 2,
    fieldToFirstCell: [
      {
        name: 'name',
        label: 'Название проекта',
        type: EFieldTypes.text,
        rules: { required: true },
        placeholder: 'Название',
      },
      { name: 'number', label: 'Номер', type: EFieldTypes.number, format: '89##-##-##-###' },
    ],
    fieldToSecondCell: [{ name: 'desc', label: 'Описание', type: EFieldTypes.long_text, placeholder: 'Описание' }],
  },
  { step: 3 },
  {
    step: 4,
    fieldToFirstCell: [
      {
        name: 'p',
        label: 'PPP',
        type: EFieldTypes.text,
        rules: { required: true },
        placeholder: 'p',
      },
    ],
  },
];
