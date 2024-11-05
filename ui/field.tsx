'use client';

import { PatternFormat } from 'react-number-format';

import { EFieldTypes, TOption } from '@/shared/types';
import { Select } from 'antd';

type TFieldComponentProps = {
  type: EFieldTypes;
  label: string;
  format?: string;
  options?: TOption[];
  placeholder?: string;
  isMulti?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (value: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
};

const getFieldByType = (props: TFieldComponentProps) => {
  switch (props.type) {
    case EFieldTypes.number:
      if (props.format) {
        return (
          <PatternFormat
            value={props.value}
            onChange={props.onChange}
            format={props.format}
            allowEmptyFormatting
            mask='_'
          />
        );
      } else {
        return <input {...props} />;
      }
    case EFieldTypes.select:
      return (
        <Select
          value={props.value}
          onChange={props.onChange}
          options={props.options}
          placeholder={props.placeholder}
          style={{ width: '100%', border: 'none' }}
          bordered={false}
          mode={props.isMulti ? 'multiple' : undefined}
        />
      );
    case EFieldTypes.text:
      return <input {...props} />;
    case EFieldTypes.long_text:
      return <textarea {...props} />;
  }
};

export default function FieldComponent(props: TFieldComponentProps) {
  return (
    <div className='flex flex-col font-helveticaNeue'>
      <label className='text-textGray mb-3.5'>{props.label}</label>
      <div
        className={`py-4 px-5 ${props.type === EFieldTypes.select ? 'pl-2.5' : ''} border ${props.errors ? 'border-red grid grid-cols-[1fr_115px]' : 'border-gray'} ${props.type === EFieldTypes.long_text ? 'h-40' : 'h-14'} rounded-md`}
      >
        {getFieldByType(props)}
        {props.errors && <div className='text-sm text-red flex items-center ml-2'>Заполните поле</div>}
      </div>
    </div>
  );
}
