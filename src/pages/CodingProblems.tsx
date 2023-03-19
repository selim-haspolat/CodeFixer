import {useState} from 'react'
import CommentsModal from '../components/CommentsModal';
import CreateCodingProblem from '../components/CreateCodingProblem'
import DisplayCodingProblems from '../components/DisplayCodingProblems'
import { Problems } from '../models/displayProblems.model';

const CodingProblems = () => {
  const [first, setFirst] = useState<string | null>(null);
  const [commentInfo, setCommentInfo] = useState<Problems | null>(null)
  return (
    <div>
      <CreateCodingProblem setFirst={setFirst} first={first}/>
      <DisplayCodingProblems setCommentInfo={setCommentInfo} commentInfo={commentInfo} first={first} setFirst={setFirst}/>
      <CommentsModal setCommentInfo={setCommentInfo} commentInfo={commentInfo}/>
    </div>
  )
}

export default CodingProblems