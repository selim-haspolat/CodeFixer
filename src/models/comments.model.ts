import { Problems } from "./displayProblems.model";

export interface SetCommentInfo {
    setCommentInfo: React.Dispatch<React.SetStateAction<Problems | null>>;
    commentInfo: Problems | null;
    setFirst?: React.Dispatch<React.SetStateAction<string | null>>;
}