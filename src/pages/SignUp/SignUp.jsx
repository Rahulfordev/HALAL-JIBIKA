import { useForm } from "react-hook-form";
import Container from "../../components/common/Container";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };


  return (
    <div className="signup-section">
      <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )} 
      <input {...register("age", { min: 18, max: 99 })} />
      <input {...register("age", { min: 18, max: 99 })} />
      <input {...register("age", { min: 18, max: 99 })} />
      {errors.age && (
        <p>You Must be older then 18 and younger then 99 years old</p>
      )}
      <input type="submit" />
    </form>
      </Container>
    </div>
  );
};

export default Signup;
