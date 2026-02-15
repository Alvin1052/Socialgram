import { TPayloadParams } from '@/types/general-types';
import {
  PatchProfilePayload,
  TResGetMyPost,
  TResGetProfile,
} from '@/types/profile-types';
import api from './api';

export const getProfile = async (): Promise<TResGetProfile> => {
  const res = await api.get('/me');
  return res.data;
};

export const patchProfile = async (
  payload: PatchProfilePayload
): Promise<TResGetProfile> => {
  const res = await api.patch('/me', payload);
  return res.data;
};

export const getMyPost = async (
  Params: TPayloadParams
): Promise<TResGetMyPost> => {
  const res = await api.patch('/me', { params: Params });
  return res.data;
};
