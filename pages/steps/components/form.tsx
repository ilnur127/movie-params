'use client';

import { HTMLProps, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import Button from '@/ui/button';
import FieldComponent from '@/ui/field';
import Pagination from '@/ui/pagination';
import { Inputs } from '@/shared/types';
import { defaultValues, TFieldsToForm } from '@/shared/const';
import Loader from '@/ui/loader';
import { saveStep } from '@/shared/utils';

const VectorSvg = (props: HTMLProps<SVGElement>) => (
  <svg
    className={props.className}
    width='19'
    height='16'
    viewBox='0 0 19 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.13385 7.99999L17.2294 7.99999M17.2294 7.99999L10.3313 1.11252M17.2294 7.99999L10.3313 14.8875'
      stroke='#ACACAC'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

export default function FormComponent(props: {
  existFrom: boolean;
  needResetForm: boolean;
  formFields: TFieldsToForm | null;
  stepId?: string;
  formFieldValues?: Inputs;
}) {
  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm<Inputs>({ defaultValues, values: props.formFieldValues });
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    saveStep(data, Number(props.stepId));
    const nextStep = Number(props.stepId) + 1;
    if (nextStep > 4) {
      router.push('/steps/' + nextStep);
    }
  };

  useEffect(() => {
    if (props.needResetForm) {
      reset();
    }
  }, [props.needResetForm, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {props.existFrom ? (
        <div className='grid grid-cols-2 gap-x-[10%]'>
          <div className='grid gap-y-6 h-full'>
            {props.formFields?.fieldToFirstCell?.map((item) => (
              <Controller
                key={item.name}
                name={item.name}
                control={control}
                rules={item.rules}
                render={({ field }) => <FieldComponent {...item} errors={errors[item.name]} {...field} />}
              />
            ))}
          </div>
          <div className='grid gap-y-6 h-full'>
            {props.formFields?.fieldToSecondCell?.map((item) => (
              <Controller
                key={item.name}
                name={item.name}
                control={control}
                rules={item.rules}
                render={({ field }) => <FieldComponent {...item} errors={errors[item.name]} {...field} />}
              />
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <div className='flex justify-center relative mt-10'>
        <Pagination countPage={4} changePageFn={(page) => router.push('/steps/' + page)} />
        <div className='absolute right-0'>
          <Button
            label={
              <div className='relative px-5'>
                <span>{Number(props.stepId) + 1 > 4 ? 'Завершить заполнение' : 'Следующий шаг'}</span>
                {Number(props.stepId) + 1 <= 4 && <VectorSvg className='absolute right-[-15%] top-[15%]' />}
              </div>
            }
            disabled={!isValid || !props.existFrom}
          />
        </div>
      </div>
    </form>
  );
}
