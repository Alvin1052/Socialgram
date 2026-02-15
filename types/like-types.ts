import { TBaseSuccessResponse } from './base-types';
import { TAuthor, TPagination, TPost } from './general-types';

interface TPostLikeData {
  liked: boolean;
  likeCount: number;
}

export type TResPostLike = TBaseSuccessResponse<TPostLikeData>;

type TDeleteLikeData = {
  liked: boolean;
  likeCount: number;
};

export type TResDeleteLike = TBaseSuccessResponse<TDeleteLikeData>;

export type TGetUserLike = TAuthor & {
  isFollowedByMe?: boolean;
  isMe?: boolean;
  followsMe?: boolean;
};

type TGetUserLikesData = {
  users: TGetUserLike[];
  pagination: TPagination;
};

export type TResGetUsersLiked = TBaseSuccessResponse<TGetUserLikesData>;

type TGetPostMeLikeAuthor = TAuthor;

type TGetPostMeLikePost = TPost & {
  likedAt: string;
  commentCount: number;
};

type TGetPostMeLikeData = {
  posts: TGetPostMeLikePost[];
  pagination: TPagination;
};

export type TResGetPostMeLike = TBaseSuccessResponse<TGetPostMeLikeData>;
