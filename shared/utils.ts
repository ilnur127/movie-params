import { defaultValues, fieldsToForm, TFieldsToForm } from './const';
import { Inputs } from './types';

export const saveStep = (fieldValues: Inputs, stepId: number) => {
  const savedFormFieldsJSON = localStorage.getItem('savedFormFields');

  const newData = { step: Number(stepId), fields: fieldValues };

  if (savedFormFieldsJSON) {
    const savedFormFields = JSON.parse(savedFormFieldsJSON);
    const thisStep = savedFormFields.findIndex((step: TFieldsToForm) => step.step === Number(stepId));
    if (thisStep !== -1) {
      localStorage.setItem(
        'savedFormFields',
        JSON.stringify(
          savedFormFields.map((stepField: TFieldsToForm, index: number) => (index === thisStep ? newData : stepField)),
        ),
      );
    } else {
      localStorage.setItem('savedFormFields', JSON.stringify([...savedFormFields, newData]));
    }
  } else {
    localStorage.setItem('savedFormFields', JSON.stringify([newData]));
  }
};

export const getFormField = (stepId: number) => {
  const fields = fieldsToForm.find((item) => item.step == Number(stepId));

  return fields;
};

export const getFormFieldValues = (stepId: number) => {
  const savedFormFieldsJSON = localStorage.getItem('savedFormFields');

  if (savedFormFieldsJSON) {
    const savedFormFields = JSON.parse(savedFormFieldsJSON);
    const fieldValues = savedFormFields.find((item: TFieldsToForm) => item.step == Number(stepId));

    return fieldValues?.fields || defaultValues;
  }

  return defaultValues;
};
