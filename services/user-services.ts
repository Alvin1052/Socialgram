import {
  TParamsGetUserSearch,
  TPayloadGetUserPost,
  TResGetPostUserLikes,
  TResGetPublicProfile,
  TResGetUserPost,
  TResGetUserSearch,
} from '@/types/user-types';
import api from './api';
import { TPayloadParams } from '@/types/general-types';

export const getUserSearch = async (
  keyword: string,
  params?: TParamsGetUserSearch
): Promise<TResGetUserSearch> => {
  const Params = { q: keyword, ...params };

  const res = await api.get('/users/search', {
    params: Params,
  });
  return res.data;
};

export const getPostUserLikes = async (
  username: string
): Promise<TResGetPostUserLikes> => {
  const res = await api.get(`/users/${username}/likes`);
  return res.data;
};

export const getUserPost = async (
  username: string,
  payload?: TPayloadParams
): Promise<TResGetUserPost> => {
  const res = await api.get(`/users/${username}/posts`, { params: payload });
  return res.data;
};

export const getPublicProfile = async (
  username: string
): Promise<TResGetPublicProfile> => {
  const res = await api.get(`/users/${username}`);
  return res.data;
};
