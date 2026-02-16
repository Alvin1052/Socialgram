import { TBaseSuccessResponse } from './base-types';
import { TPagination, TPost } from './general-types';

type TGetPostsPagination = TPagination;

type TGetPostsData = {
  posts: TPost[];
  pagination: TGetPostsPagination;
};

export interface TPayloadPostPost {
  photo: File;
  caption: string;
}

export type TResGetPosts = TBaseSuccessResponse<TGetPostsData>;

export type TResPostPost = TBaseSuccessResponse<TPost>;

export type TResGetPostById = TBaseSuccessResponse<TPost>;

type TDeletePostData = { deleted: boolean };

export type TResDeletePost = TBaseSuccessResponse<TDeletePostData>;
