import { TPayloadParams } from '@/types/general-types';
import {
  PatchProfilePayload,
  TResGetMyPost,
  TResGetMyProfile,
} from '@/types/profile-types';
import api from './api';

export const getMyProfile = async (): Promise<TResGetMyProfile> => {
  const res = await api.get('/me');
  return res.data;
};

export const patchProfile = async (
  payload: PatchProfilePayload
): Promise<TResGetMyProfile> => {
  const res = await api.patch('/me', payload);
  return res.data;
};

export const getMyPost = async (
  Params: TPayloadParams
): Promise<TResGetMyPost> => {
  const res = await api.patch('/me', { params: Params });
  return res.data;
};
