import {useForm, SubmitHandler} from 'react-hook-form';


type FormData = {
    name: string;
    email: string;
    password: string
}
const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors , isSubmitting}
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register("name", {required:"Name is required"})} />
          {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          id="email"
          placeholder="Email"
        />

        {errors.email && (
          <div style={{ color: "red" }}>{errors.email.message}</div>
        )}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" placeholder='Please input password' id="password" 
        { ...register("password", {required:"Password is required",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })} />
        {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
      </div>

          <button disabled={isSubmitting}>{isSubmitting?"Loading...":"Submit"}</button>
      </form>
        
    </div>
  )
}

export default Form