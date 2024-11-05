'use client';

import { useCallback, useEffect, useState } from 'react';

import { TFieldsToForm } from '@/shared/const';
import { getFormField, getFormFieldValues } from '@/shared/utils';
import { Inputs } from '@/shared/types';

import FormComponent from './components/form';
import HeaderStepsComponent from './components/header';

export default function StepsComponent(props: { stepId?: string }) {
  const [needResetForm, setNeedResetForm] = useState(false);
  const [formFields, setFormFields] = useState<TFieldsToForm | null>(null);
  const [formFieldValues, setFormFieldValues] = useState<Inputs>();

  const getFormFields = useCallback(() => {
    setTimeout(() => {
      const fields = getFormField(Number(props.stepId));
      if (fields) {
        setFormFields(fields);
        const fieldValues = getFormFieldValues(Number(props.stepId));

        setFormFieldValues(fieldValues);
      }
    }, 3000);
  }, [props.stepId]);

  useEffect(() => {
    getFormFields();
  }, [getFormFields]);

  return (
    <div className='grid gap-10'>
      <HeaderStepsComponent existFrom={Boolean(formFields)} setNeedResetForm={setNeedResetForm} />
      <FormComponent
        existFrom={Boolean(formFields)}
        needResetForm={needResetForm}
        formFields={formFields}
        formFieldValues={formFieldValues}
        stepId={props.stepId}
      />
    </div>
  );
}
