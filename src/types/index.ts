// Previous types...

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorImage: string;
  content: string;
  media: string[];
  likes: string[];
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}