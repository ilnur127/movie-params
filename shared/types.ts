import { HTMLProps } from 'react';

export enum EFieldTypes {
  number = 'number',
  select = 'select',
  text = 'text',
  long_text = 'long_text',
}

export type TOption = { label: string; value: string };

export type Inputs = {
  name: string;
  genre: TOption[];
  format: TOption;
  unf: string;
  country: TOption;
  cost: number;
  synopsis: string;
  number: string;
  desc: string;
  p: string;
};

export type TFieldToCell = ({
  name: keyof Inputs;
  label: string;
  type: EFieldTypes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules?: Record<string, any>;
  inputValue?: string;
  format?: string;
  isMulti?: boolean;
  options?: TOption[];
} & HTMLProps<HTMLInputElement>)[];
