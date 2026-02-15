import { TBaseSuccessResponse } from './base-types';
import { TPagination, TPost } from './general-types';

type TGetFeedData = {
  items: TPost[];
  pagination: TPagination;
};

export type TResGetFeed = TBaseSuccessResponse<TGetFeedData>;
