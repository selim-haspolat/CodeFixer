import { doc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../auth/firebase";
import { useAuthContext } from "../context/AuthContext";
import { Problems } from "../models/displayProblems.model";

interface Props {
  problem: Problems;
  setFirst?: React.Dispatch<React.SetStateAction<string | null>>;
  first?: string | null;
  setCommentInfo: React.Dispatch<React.SetStateAction<Problems | null>>;
  commentInfo: Problems | null;
}

const CodingProblemCard = (props: Props) => {
  const [interested, setInterested] = useState(false);
  const { user } = useAuthContext();
  const { problem, setFirst, setCommentInfo, commentInfo } = props;
  const navigate = useNavigate();
  const getInteresteds = async () => {
    if (
      problem.interesting.includes(
        user?.email || "asıofabsgıoansuıgasugasgagasgasgn"
      )
    ) {
      const filteredInteresting = problem.interesting.filter(
        (p) => p !== user?.email
      );
      await setDoc(doc(db, "problems", `${problem.id}`), {
        ...problem,
        interesting: filteredInteresting,
      });
    } else {
      await setDoc(doc(db, "problems", `${problem.id}`), {
        ...problem,
        interesting: interested
          ? [...problem.interesting]
          : [...problem.interesting, user?.email],
      });
    }
  };

  useEffect(() => {
    if (
      problem.interesting.includes(
        user?.email || "asıofabsgıoansuıgasugasgagasgasgn"
      )
    ) {
      setInterested(true);
    }
  }, [problem]);

  const toogleInterest = async () => {
    await setFirst?.(`${new Date().getTime()}`);
    await getInteresteds();
    setInterested(!interested);
  };

  const displayComments = () => {
    setCommentInfo(problem);
  };

  return (
    <div className="rounded overflow-hidden shadow-sm hover:shadow-lg transition-shadow m-4 border border-gray-200">
      <div className="flex gap-3 items-center p-3 pr-5">
        <img
          onClick={() =>
            navigate(`/profile/${problem.name}`, { state: problem })
          }
          className="w-12 h-12 rounded-full cursor-pointer"
          src={problem.userImage}
          alt="Profile"
        />
        <div>{problem.name}</div>
      </div>
      <div className="px-2 break-words">

      <code className="text-gray-700 text-base px-6">
        {problem.description}
      </code>
      </div>
      <div className="px-6 pb-2 pt-4 flex justify-between items-center">
        <div className="flex gap-7">
          <button onClick={toogleInterest} className="flex items-center">
            <svg
              className="w-6 mr-1"
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
                  d="M3 17L9 11L13 15L21 7V13M15 7H18"
                  stroke="#00eeff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <span className={`text-sm ${interested && "text-[#00eeff]"}`}>
              {problem.interesting.length}
            </span>
          </button>
          <button onClick={displayComments} className="flex items-center ">
            <svg
              className="w-6"
              fill="#000000"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>comment</title>
                <path d="M2.5 5.438h17.406c1.375 0 2.5 1.125 2.5 2.5v10.563c0 1.375-1.125 2.5-2.5 2.5h-3.313l0.156 4.281c0 1.031-0.563 1.281-1.313 0.563l-4.906-4.844h-8.031c-1.375 0-2.5-1.125-2.5-2.5v-10.563c0-1.375 1.125-2.5 2.5-2.5z"></path>
              </g>
            </svg>
            <span className="text-sm">{problem.comments.length}</span>
          </button>
        </div>
        <span className="text-sm text-gray-600">{problem.createdAt}</span>
      </div>
    </div>
  );
};

export default CodingProblemCard;
