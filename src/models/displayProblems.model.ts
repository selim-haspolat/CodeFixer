export interface Comments {
  sender: string,
  senderPhoto: string,
  comment: string ,
}

export interface Problems {
  createdAt: string;
  description: string;
  interesting: string[];
  comments: Comments[];
  solved: boolean;
  user: string;
  name: string;
  userImage: string;
  id?:string
}
