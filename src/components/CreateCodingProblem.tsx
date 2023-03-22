import { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../auth/firebase";
import { useAuthContext } from "../context/AuthContext";
import { warningAlert } from "./SweetAler";


const CreateCodingProblem = ({
  setFirst,
  first,
}: {
  setFirst: React.Dispatch<React.SetStateAction<string | null>>;
  first: string | null;
}) => {
  const { user } = useAuthContext();
  const problemInput = useRef<HTMLInputElement>(null);

  const addProblems = () => {
    if (user?.email) {
      addDoc(collection(db, `problems`), {
        user: user?.email,
        name: user?.displayName,
        userImage: user?.photoURL,
        createdAt: `${new Date().toLocaleTimeString()} | ${new Date().toLocaleDateString()}`,
        description: problemInput?.current?.value,
        solved: false,
        interesting: [],
        comments: [],
      });
    } else {
      warningAlert('You must Login')
    }
    setFirst(problemInput?.current?.value || "");
  };

  const handleSubmitProblem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProblems();
    if (problemInput.current) {
      problemInput.current.value = "";
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center w-72  md:w-[500px] h-14 rounded mx-auto mt-10 md:px-3">
        <form
          onSubmit={handleSubmitProblem}
          className="relative flex w-[95%] gap-3 justify-between items-center"
        >
          <img
            src={
              user?.photoURL ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
            alt={user?.displayName || "user"}
            className="w-10 h-10 rounded-full bg-black"
          />
          <input
            ref={problemInput}
            type={"text"}
            className="w-[85%] py-1.5 pl-4 pr-10 rounded-full"
            placeholder="Enter a problem"
            required
          />
          <div className="absolute right-0 top-0 group">
            <button
              type="submit"
              className="absolute w-10 opacity-70 group-hover:translate-x-3 group-hover:scale-125 transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6.99811 10.2467L7.43298 11.0077C7.70983 11.4922 7.84825 11.7344 7.84825 12C7.84825 12.2656 7.70983 12.5078 7.43299 12.9923L7.43298 12.9923L6.99811 13.7533C5.75981 15.9203 5.14066 17.0039 5.62348 17.5412C6.1063 18.0785 7.24961 17.5783 9.53623 16.5779L15.8119 13.8323C17.6074 13.0468 18.5051 12.654 18.5051 12C18.5051 11.346 17.6074 10.9532 15.8119 10.1677L9.53624 7.4221C7.24962 6.42171 6.1063 5.92151 5.62348 6.45883C5.14066 6.99615 5.75981 8.07966 6.99811 10.2467Z"
                    fill="#222222"
                  ></path>
                </g>
              </svg>
            </button>
            <button type="submit" className="absolute w-10 z-[2]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6.99811 10.2467L7.43298 11.0077C7.70983 11.4922 7.84825 11.7344 7.84825 12C7.84825 12.2656 7.70983 12.5078 7.43299 12.9923L7.43298 12.9923L6.99811 13.7533C5.75981 15.9203 5.14066 17.0039 5.62348 17.5412C6.1063 18.0785 7.24961 17.5783 9.53623 16.5779L15.8119 13.8323C17.6074 13.0468 18.5051 12.654 18.5051 12C18.5051 11.346 17.6074 10.9532 15.8119 10.1677L9.53624 7.4221C7.24962 6.42171 6.1063 5.92151 5.62348 6.45883C5.14066 6.99615 5.75981 8.07966 6.99811 10.2467Z"
                    fill="#222222"
                  ></path>
                </g>
              </svg>
            </button>
            <button
              type="submit"
              className=" w-10 opacity-70 group-hover:-translate-x-3 
              group-hover:scale-75 transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6.99811 10.2467L7.43298 11.0077C7.70983 11.4922 7.84825 11.7344 7.84825 12C7.84825 12.2656 7.70983 12.5078 7.43299 12.9923L7.43298 12.9923L6.99811 13.7533C5.75981 15.9203 5.14066 17.0039 5.62348 17.5412C6.1063 18.0785 7.24961 17.5783 9.53623 16.5779L15.8119 13.8323C17.6074 13.0468 18.5051 12.654 18.5051 12C18.5051 11.346 17.6074 10.9532 15.8119 10.1677L9.53624 7.4221C7.24962 6.42171 6.1063 5.92151 5.62348 6.45883C5.14066 6.99615 5.75981 8.07966 6.99811 10.2467Z"
                    fill="#222222"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCodingProblem;
