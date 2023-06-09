import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import signup from "../assets/signup.svg";
import { useAuthContext } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const name = useRef<HTMLInputElement>(null);
  const surename = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const { createUser, user } = useAuthContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(
      email.current?.value ?? "",
      password.current?.value ?? "",
      name.current?.value ?? "",
      surename.current?.value ?? ""
    );
    navigate("/");
  };

  return (
    <div className="flex justify-center h-[calc(100vh-115px)] items-center flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-32">
      <img
        src={signup}
        className="w-72 md:w-96 lg:max-w-[500px] lg:w-[40%]"
        alt="sign up svg"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-72 md:w-96"
      >
        <h1 className="text-center text-4xl mb-5 font-light">Register</h1>
        <div className="flex gap-2">
          <input
            ref={name}
            type="text"
            className="w-1/2"
            placeholder="Name"
            required
          />
          <input
            ref={surename}
            type="text"
            className="w-1/2"
            placeholder="Surename"
            required
          />
        </div>
        <input ref={email} type="email" placeholder="Email" required />
        <input ref={password} type="password" placeholder="Password" required />
        <button
          type="submit"
          className="outline outline-1 w-36 md:w-52 py-1 rounded self-center hover:text-white hover:bg-black transition-colors mt-3"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
