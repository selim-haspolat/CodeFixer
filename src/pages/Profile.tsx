import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { db } from "../auth/firebase";
import { useAuthContext } from "../context/AuthContext";
import { Problems } from "../models/displayProblems.model";

interface ProfileProps {
  myProfile: boolean;
}

const Profile = (props: ProfileProps) => {
  let { user } = useAuthContext();
  const [userProblems, setUserProblems] = useState<Problems[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { myProfile } = props;
  const navigate = useNavigate()


  const { state } = useLocation();
  if (!props.myProfile) {
    user = {
      displayName: state.name,
      email: state.user,
      photoURL: state.userImage,
    };
  }


  const getUserProblems = async () => {
    const querySnapshot = await getDocs(collection(db, "problems"));
    const newProblems = querySnapshot.docs
      .map((doc) => {
        if (doc.data().name === user?.displayName) {
          return { ...doc.data(), id: doc.id } as Problems;
        }
      })
      .filter((problem) => problem !== undefined) as Problems[];
    setUserProblems(newProblems);
    setLoading(false);
  };

  const deleteProblem = async (id: string) => {
    if (!id) {
      console.error("Invalid problem ID");
      return;
    }
    const problemRef = doc(collection(db, "problems"), id);
    await deleteDoc(problemRef);
    navigate('/coding-problems')
  };

  useEffect(() => {
    setLoading(true)
    getUserProblems();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="flex mt-5 justify-center items-center gap-5">
            <img
              src={
                user?.photoURL ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt={user?.displayName || "Profile Image"}
              className="w-28 h-28 bg-black rounded-full"
            />
            <div className="flex flex-col items-start ">
              <span className="text-2xl font-bold">{user?.displayName}</span>
              <span className="font-light">{user?.email}</span>
            </div>
          </div>
          <div className="mt-5 flex gap-5 justify-center items-center">
            <div className="flex items-center">
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
              <span className={`text-sm text-[#00eeff]`}>
                {userProblems &&
                  userProblems.reduce(
                    (acc, cur) => acc + cur.interesting.length,
                    0
                  )}
              </span>
            </div>
            <div className="flex items-center">
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
              <span className="text-sm">{userProblems?.length}</span>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10 max-h-96 overflow-auto">
            {userProblems &&
              userProblems.map((problem) => (
                <div
                  key={problem.id}
                  className="container rounded mx-auto px-5 py-3 border border-gray-200 flex justify-between items-center"
                >
                  <span className="break-words">{problem.description}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center">
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
                      <span className={`text-sm text-[#00eeff]`}>
                        {problem.interesting.length}
                      </span>
                    </span>

                    <span className="flex items-center ">
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
                    </span>
                    {myProfile && (
                      <button onClick={() => deleteProblem(problem?.id || "")}>
                        <svg
                          className="w-6"
                          viewBox="0 0 1024 1024"
                          fill="#000000"
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
                            <path
                              d="M176.662 817.173c-8.19 8.471-7.96 21.977 0.51 30.165 8.472 8.19 21.978 7.96 30.166-0.51l618.667-640c8.189-8.472 7.96-21.978-0.511-30.166-8.471-8.19-21.977-7.96-30.166 0.51l-618.666 640z"
                              fill=""
                            ></path>
                            <path
                              d="M795.328 846.827c8.19 8.471 21.695 8.7 30.166 0.511 8.471-8.188 8.7-21.694 0.511-30.165l-618.667-640c-8.188-8.471-21.694-8.7-30.165-0.511-8.471 8.188-8.7 21.694-0.511 30.165l618.666 640z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
