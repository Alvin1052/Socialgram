import {
  TResDeleteLike,
  TResGetPostMeLike,
  TResGetUsersLiked,
  TResPostLike,
} from '@/types/like-types';
import api from './api';

export const postLikes = async (PostId: string): Promise<TResPostLike> => {
  const res = await api.post(`/posts/${PostId}/like`);
  return res.data;
};

export const deleteLikes = async (PostId: string): Promise<TResDeleteLike> => {
  const res = await api.delete(`/posts/${PostId}/like`);
  return res.data;
};

export const getUsersLikes = async (
  PostId: string
): Promise<TResGetUsersLiked> => {
  const res = await api.get(`/posts/${PostId}/likes`);
  return res.data;
};

export const getPostMeLikes = async (): Promise<TResGetPostMeLike> => {
  const res = await api.get(`/me/like`);
  return res.data;
};
