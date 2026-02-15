import { TResGetFeed } from '@/types/feed-types';
import { TPayloadParams } from '@/types/general-types';
import api from './api';

export const getFeed = async (
  Params?: TPayloadParams
): Promise<TResGetFeed> => {
  const res = await api.get('/feed', { params: Params });
  return res.data;
};
