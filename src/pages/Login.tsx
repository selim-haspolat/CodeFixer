import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signin from "../assets/signin.svg";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const { sigInUser , user} = useAuthContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.current && password.current) {
      sigInUser(email.current.value, password.current.value);
      navigate("/");
    }
  };

  useEffect(() => {
    if(user){
      navigate("/coding-problems");
    }
  }, []);

  return (
    <div className="flex justify-center h-[calc(100vh-115px)] items-center flex-col lg:flex-row-reverse gap-10 lg:gap-20 xl:gap-32">
      <img
        src={signin}
        className="w-72 md:w-96 lg:max-w-[500px] lg:w-[40%]"
        alt="sign in svg"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-72 md:w-96"
      >
        <h1 className="text-center text-4xl mb-5 font-light">Login</h1>
        <input
          ref={email}
          type="email"
          className=""
          placeholder="Email"
          required
        />
        <input
          ref={password}
          type="password"
          className=""
          placeholder="Password"
          required
        />
        <button className="outline outline-1 w-36 md:w-52 py-1 rounded self-center hover:text-white hover:bg-black transition-colors mt-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
