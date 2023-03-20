import { SetCommentInfo } from "../models/comments.model";
import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";

const CommentsModal = ({
  setCommentInfo,
  commentInfo,
  setFirst,
}: SetCommentInfo) => {
  return (
    <div
      className={`fixed z-[5] top-[30%] left-[50%] translate-x-[-50%] translate-y-[-30%] bg-blue-100/20 backdrop-blur-sm border border-gray-200 container rounded py-5 ${
        commentInfo || "hidden"
      }`}
    >
      <svg
        onClick={() => setCommentInfo?.(null)}
        className="absolute top-0 right-0 cursor-pointer w-10 h-10"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <line x1="16" y1="16" x2="48" y2="48"></line>
          <line x1="48" y1="16" x2="16" y2="48"></line>
        </g>
      </svg>
      <div className="rounded overflow-hidden m-4 border border-gray-200 bg-white">
        <div className="flex gap-3 items-center p-3">
          <img
            className="w-12 h-12 rounded-full"
            src={commentInfo?.userImage}
            alt="Profile"
          />
          <div className="">{commentInfo?.name}</div>
        </div>
        <code className="text-gray-700 text-base px-6">
          {commentInfo?.description}
        </code>
        <div className="flex gap-7 px-5 pb-1 justify-end">
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
            <span className={`text-sm ${true && "text-[#00eeff]"}`}>
              {commentInfo?.interesting.length}
            </span>
          </span>
        </div>
      </div>
      <CreateComment
        commentInfo={commentInfo}
        setFirst={setFirst}
        setCommentInfo={setCommentInfo}
      />
      <div className="py-5 mx-4 rounded border border-gray-200 bg-white max-h-[40vh] overflow-auto">
        {commentInfo && commentInfo?.comments?.length > 0 ? (
          commentInfo?.comments.map((c, i) => <CommentCard key={i} {...c} />)
        ) : (
          <div className="flex justify-center items-center gap-2">
            <div className="w-24 h-[0.5px] bg-black"></div>
            <div className="font-light">No Comments</div>
            <div className="w-24 h-[0.5px] bg-black"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsModal;
