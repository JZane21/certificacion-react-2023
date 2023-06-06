import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export const LoginHookForm = () => {
  const { 
    register,
    handleSubmit,
    watch,
    formState:{errors},
  } = useForm();

  const params = useParams();


  const whenSubmit = (data:FieldValues) => {
    // Perform login logic here
    console.log(data);
  };

  return (
    // <form onSubmit={handleSubmit(whenSubmit)}>
    //   <input {...register('firstName')} />
    //   <input {...register('lastName', { required: true })} />
    //   {errors.lastName && <p>Last name is required.</p>}
    //   <input {...register('age', { pattern: /\d+/ })} />
    //   {errors.age && <p>Please enter number for age.</p>}
    //   <input type="submit" />
    // </form>
    <section className="h-full w-full fixed top-0 left-0 bottom-0 right-0">
      <form onSubmit={handleSubmit(whenSubmit)}
      className="flex flex-col w-max">

        <label htmlFor="firstName">First Name:</label>
        <input name="firstName" />
        {errors.firstName && <span>This field is required</span>}

        <label htmlFor="lastName">Last Name:</label>
        <input name="lastName" type="text" />
        {errors.lastName && <span>This field is required</span>}

        <label htmlFor="lastName">Last Name:</label>
        <input name="lastName" type="text" />
        {errors.lastName && <span>This field is required</span>}

        <input type="submit" value="Log in" />
      </form>
    </section>
  );
};
