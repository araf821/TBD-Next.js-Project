"use client";

import { SafeUser } from "@/types";
import { Comment, User } from "@prisma/client";
import { z } from "zod";
import { validInputPattern } from "../write/PostForm";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import IndividualComment from "@/components/IndividualComment";
import CommentForm from "@/components/CommentForm";

interface PostCommentsProps {
  currentUser: SafeUser | null;
  postId: string;
  comments: (Comment & {
    author: User;
    replies: (Comment & { author: User })[];
  })[];
}

export const commentSchema = z.object({
  comment: z
    .string()
    .min(3, { message: "Comment must be between 3 to 252 characters long." })
    .max(252, { message: "Comment must be between 3 to 252 characters long." })
    .refine((value) => validInputPattern.test(value), {
      message: "Title can only contain letters, digits, and spaces.",
    }),
});

const PostComments = ({ currentUser, postId, comments }: PostCommentsProps) => {
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof commentSchema>) => {
    try {
      await axios.post(`/api/comments/${postId}`, data);

      toast.success("Thanks for commenting!")
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="mx-auto mb-6 mt-2 flex max-w-[950px] flex-col gap-4">
      {/* Comment Input Section */}
      {currentUser ? (
        <CommentForm currentUser={currentUser} onSubmit={onSubmit} />
      ) : null}

      {/* Displaying Comments */}
      <div className="flex flex-col gap-4 border-t-[1px] border-zinc-200 py-4">
        {comments.map((comment) => {
          if (comment.replyToId) {
            return;
          }

          return (
            <IndividualComment
              key={comment.id}
              currentUser={currentUser}
              comment={comment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostComments;
