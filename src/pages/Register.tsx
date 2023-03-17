import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import signup from "../assets/signup.svg";
import { useAuthContext } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const name = useRef<HTMLInputElement>(null);
  const surename = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const { createUser } = useAuthContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(
      email.current?.value ?? "",
      password.current?.value ?? "",
      name.current?.value ?? "",
      surename.current?.value ?? '',
    );
    navigate("/");
  };

  return (
    <div className="flex justify-center h-[calc(100vh-150px)] items-center flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-32">
      <img
        src={signup}
        className="w-96 lg:max-w-[500px] lg:w-[40%]"
        alt="sign up svg"
      />
      <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-3 w-96">
        <h1 className="col-span-4 text-center text-4xl mb-5 font-light">
          Register
        </h1>
        <input
          ref={name}
          type="text"
          className="col-span-2 lg:col-span-4"
          placeholder="Name"
          required
        />
        <input
          ref={surename}
          type="text"
          className="col-span-2 lg:col-span-4"
          placeholder="Surename"
          required
        />
        <input
          ref={email}
          type="email"
          className="col-span-2 lg:col-span-4"
          placeholder="Email"
          required
        />
        <input
          ref={password}
          type="password"
          className="col-span-2 lg:col-span-4"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="outline outline-1 px-2 py-1 rounded col-start-2 col-end-4 hover:text-white hover:bg-black transition-colors mt-3"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
