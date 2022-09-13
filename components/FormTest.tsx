import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Style from '../styles/styles';

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  // const classNames = {
  //   input: 'border-2 border-black-600 rounded-lg',
  // };

  const Styles = "p-[25px] bg-black bg-opacity-25"

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-[25px] bg-black bg-opacity-25">Test</div>
      <input
        className={Style.input}
        {...register('firstName', { required: true, maxLength: 20 })}
      />
      <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
      <input
        type="number"
        {...register('age', { min: 18, max: 99 })}
      />
      <input type="submit" />
    </form>
  );
}
