import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../auth/firebase";
import CodingProblemCard from "./CodingProblemCard";
import { Problems } from "../models/displayProblems.model";

const DisplayCodingProblems = ({
  first,
  setFirst,
  setCommentInfo,
  commentInfo,
}: {
  setFirst?: React.Dispatch<React.SetStateAction<string | null>>;
  first: string | null;
  setCommentInfo:React.Dispatch<React.SetStateAction<Problems | null>>;
  commentInfo:Problems | null;
}) => {
  const [problems, setProblems] = useState([] as Problems[]);

  const getProblems = async () => {
    const querySnapshot = await getDocs(collection(db, "problems"));
    console.log(querySnapshot);
    const newProblems = querySnapshot.docs.map((doc) => {
      return {...doc.data(),id:doc.id} as Problems;
    });
    setProblems(newProblems);
  };

  
  useEffect(() => {
    getProblems();
  }, [first]);

  return (
    <div className="container mx-auto px-3 py-5 rounded mt-5">
      {problems
        .sort((a, b) => {
          return b.interesting.length - a.interesting.length;
        })
        .map((problem) => (
          <CodingProblemCard setCommentInfo={setCommentInfo} commentInfo={commentInfo} setFirst={setFirst} key={problem.createdAt} problem={problem} />
        ))}
    </div>
  );
};

export default DisplayCodingProblems;
