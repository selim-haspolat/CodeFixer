import { useEffect, useRef } from "react";
import blurpng from "../assets/blurpng.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const question = useRef(null);
  const commentRight = useRef(null);
  const commentRight1 = useRef(null);
  const commentRight2 = useRef(null);
  const description = useRef(null);

  useEffect(() => {
    gsap.to(question.current, {
      scrollTrigger: {
        trigger: question.current,
        toggleActions: "play none none none",
        end: "top center",
        scrub: true,
      },
      x: 0,
    });
    gsap.to(commentRight.current, {
      scrollTrigger: {
        trigger: commentRight.current,
        toggleActions: "play none none none",
        end: "top center",
        scrub: true,
      },
      x: 0,
    });
    gsap.to(commentRight2.current, {
      scrollTrigger: {
        trigger: commentRight2.current,
        toggleActions: "play none none none",
        end: "top center",
        scrub: true,
      },
      x: 0,
    });
    gsap.to(commentRight1.current, {
      scrollTrigger: {
        trigger: commentRight1.current,
        toggleActions: "play none none none",
        end: "top center",
        scrub: true,
      },
      x: 0,
    });
    gsap.to(description.current, {
      scrollTrigger: {
        trigger: description.current,
        toggleActions: "play none none none",
        end: "top center",
        scrub: true,
      },
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    });
  }, []);

  return (
    <div className="h-[230vh] overflow-hidden bg-black flex flex-col">
      <div
        className="h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${blurpng})` }}
      >
        <h1 className="text-white text-5xl tracking-widest font-light text-center">
          Welcome to CodeFixer
        </h1>
        <svg
          className="w-16 animate-bounce mt-3"
          viewBox="-2.4 -2.4 28.80 28.80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fff"
          strokeWidth="0.00024000000000000003"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#fff"
            strokeWidth="0.288"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 16.0609L5.96956 10.0278L7.03046 8.96739L12 13.9391L16.9696 8.96739L18.0305 10.0278L12 16.0609Z"
              fill="#fff"
            ></path>
          </g>
        </svg>
      </div>

      <div
        ref={question}
        className="-translate-x-[100%] rounded overflow-hidden shadow-sm hover:shadow-lg transition-shadow m-4 mt-10 border bg-white border-gray-200"
      >
        <div className="flex gap-3 items-center p-3 pr-5">
          <img
            className="w-12 h-12 rounded-full cursor-pointer"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt="Profile"
          />
          <div>Abuzer</div>
        </div>
        <code className="text-gray-700 text-base px-6">
          How to center a div ?
        </code>
        <div className="px-6 pb-2 pt-4 flex justify-between items-center">
          <div className="flex gap-7">
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
              <span className={`text-sm text-[#00eeff]`}>15</span>
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
              <span className="text-sm">3</span>
            </span>
          </div>
          <span className="text-sm text-gray-600">2 hours ago</span>
        </div>
      </div>
      <div
        ref={commentRight}
        className="flex gap-3 translate-x-[100%] p-3 rounded overflow-hidden items-start m-4 mt-10 border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
      >
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="profile"
        />
        <div>
          <div className="font-bold">Selim</div>
          <code className="text-gray-700 text-base">Really ?!</code>
        </div>
      </div>
      <div
        ref={commentRight1}
        className="flex gap-3 p-3 -translate-x-[100%] rounded overflow-hidden items-start m-4 border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
      >
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="profile"
        />
        <div>
          <div className="font-bold">code_bender</div>
          <code className="text-gray-700 text-base">You can use flex</code>
        </div>
      </div>
      <div
        ref={commentRight2}
        className="flex gap-3 p-3 translate-x-[100%] rounded overflow-hidden items-start m-4 border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
      >
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="profile"
        />
        <div>
          <div className="font-bold">ScriptSensei</div>
          <code className="text-gray-700 text-base">text-align: center;</code>
        </div>
      </div>
      <div className="grow mt-7 bg-[#fff] text-black flex flex-col gap-10 justify-center items-center">
        <span
          ref={description}
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          className="w-72 sm:w-96 lg:w-[40%] text-center lg:text-3xl text-2xl lg:tracking-wider"
        >
          Join us today and start getting the answers you need to take your
          coding skills to the next level!
        </span>
        <Link to={'/login'} className="button">Start Now</Link>
      </div>
    </div>
  );
};

export default Home;
