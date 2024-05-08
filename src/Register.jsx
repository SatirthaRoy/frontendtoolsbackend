import { useForm } from "react-hook-form";
import { auth } from "../firebase.cofig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors} } = useForm();

  const [error, setError] = useState(null);

  const onSubmit = data => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then(result => {
      console.log(result.user);
      axios.post('http://localhost:5000/jwt', {email: data.email, password: data.password}, {withCredentials: true})
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
    })
    .catch(e => {
      console.log(e.message.split('/')[1].replace(')', ''));
      setError(e.message.split('/')[1].replace(')', ''));
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label>
          <h1>Email:</h1>
          <input type="email" {...register('email', {})} defaultValue='satirtharoy2003@gmail.com' placeholder="Enter your email"/>
          {errors.email?.type === 'required' && <p className="text-red-500">Please fill out this field.</p>}
        </label>
        <label>
          <h1>Password:</h1>
          <input type="password" {...register('password', {})} defaultValue='H1mu@218' placeholder="Enter your password"/>
          {errors.password?.type === 'required' && <p className="text-red-500">Please fill out this field.</p>}
          {<p className={`text-red-500 ${error ? 'opacity-100' : 'opacity-0'}`}>{error}</p>}
        </label>
        <input type="submit" value='submit' className="border"/>
      </form>
    </div>
  );
};

export default Register;