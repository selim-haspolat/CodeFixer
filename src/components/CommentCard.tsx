import { Comments } from "../models/displayProblems.model";

const CommentCard = ({ sender, comment, senderPhoto }: Comments) => {
  return (
    <div className="flex gap-3 p-3 rounded overflow-hidden items-start m-4 border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
      <img className="w-12 h-12 rounded-full" src={senderPhoto} alt={sender} />
      <div>
        <div className="font-bold">{sender}</div>
        <code className="text-gray-700 text-base">{comment}</code>
      </div>
    </div>
  );
};

export default CommentCard;
