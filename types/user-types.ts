import { TBaseSuccessResponse } from './base-types';
import { TAuthor, TPagination, TPost, TUserProfile } from './general-types';

export interface TParamsGetUserSearch {
  page: number;
  limit: number;
}

type TUser = TAuthor & {
  isFollowedByMe: boolean;
};

type TUserGetUserSearchData = {
  users: TUser[];
  pagination: TPagination;
};

export type TResGetUserSearch = TBaseSuccessResponse<TUserGetUserSearchData>;

type TPostGetPostUserLikes = TPost;

type TGetPostUserLikesData = {
  posts: TPostGetPostUserLikes[];
  pagination: TPagination;
};

export type TResGetPostUserLikes = TBaseSuccessResponse<TGetPostUserLikesData>;

export interface TPayloadGetUserPost {
  page: number;
  limit: number;
}

type TPostGetUserPost = TPost;

export interface TGetUserPostData {
  posts: TPostGetUserPost[];
  pagination: TPagination;
}

export type TResGetUserPost = TBaseSuccessResponse<TGetUserPostData>;

type TCounts = {
  post: number;
  followers: number;
  following: number;
  likes: number;
};
type TGetPublicProfileData = TUserProfile & {
  counts: TCounts;
  isFollowing: boolean;
  isMe: boolean;
};

export type TResGetPublicProfile = TBaseSuccessResponse<TGetPublicProfileData>;
