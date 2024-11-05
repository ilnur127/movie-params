'use client';
import { Dispatch, SetStateAction } from 'react';

import Button from '@/ui/button';

export default function HeaderStepsComponent(props: {
  existFrom: boolean;
  setNeedResetForm: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-5xl font-interTight'>
        Производственные
        <br />
        параметры фильма
      </h1>
      {props.existFrom && <Button label='Отменить заполнение' onClick={() => props.setNeedResetForm(true)} />}
    </div>
  );
}
