import {
  TPayloadPostComment,
  TResDeleteComment,
  TResGetComment,
  TResPostComment,
} from '@/types/comment-types';
import api from './api';

export const getComments = async (PostId: string): Promise<TResGetComment> => {
  const res = await api.get(`/posts/${PostId}/comments`);
  return res.data;
};

export const postComment = async ({
  PostId,
  comment,
}: TPayloadPostComment): Promise<TResPostComment> => {
  const res = await api.get(`/comments/${PostId}`, {
    params: { text: comment },
  });
  return res.data;
};

export const deleteComment = async (
  CommentId: string
): Promise<TResDeleteComment> => {
  const res = await api.delete(`/comments/${CommentId}`);
  return res.data;
};
