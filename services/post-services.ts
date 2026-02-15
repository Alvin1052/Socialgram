import {
  TResDeletePost,
  TResGetPostById,
  TResGetPosts,
  TResPostPost,
} from '@/types/posts-types';
import api from './api';
import { TPayloadParams } from '@/types/general-types';

export const getPosts = async (
  payload?: TPayloadParams
): Promise<TResGetPosts> => {
  const res = await api.get('/posts', { params: payload });
  return res.data;
};

export const postPost = async (payload: FormData): Promise<TResPostPost> => {
  const res = await api.post('/posts', payload);
  return res.data;
};

export const getPostDetail = async (
  PostId: string
): Promise<TResGetPostById> => {
  const res = await api.get(`/posts/${PostId}`);
  return res.data;
};

export const deletePost = async (PostId: string): Promise<TResDeletePost> => {
  const res = await api.delete(`/posts/${PostId}`);
  return res.data;
};
