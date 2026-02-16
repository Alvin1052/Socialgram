import { TBaseSuccessResponse } from './base-types';
import { TUserProfile } from './general-types';

type TUserStats = {
  posts: number;
  followers: number;
  following: number;
  likes: number;
};

type TResGetMyProfileData = {
  profile: TUserProfile;
  stats: TUserStats;
};

export type TResGetMyProfile = TBaseSuccessResponse<TResGetMyProfileData>;

export interface PatchProfilePayload {
  name: string | null;
  username: string | null;
  email: string | null;
  phone: string | null;
  bio: string | null;
  avatarUrl: string | null;
}

export type TPatchProfile = TBaseSuccessResponse<TUserProfile>;

type TGetMyPostAuthor = Pick<
  TUserProfile,
  'id' | 'name' | 'username' | 'avatarUrl'
>;

interface TGetMyPostItems {
  id: number;
  imageUrl: string;
  caption: string;
  createdAt: string;
  author: TGetMyPostAuthor;
  likeCount: number;
  commentCount: number;
  likedByMe: boolean;
}

interface TGetMyPostPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface TResGetMyPostData {
  items: TGetMyPostItems[];
  pagination: TGetMyPostPagination;
}

export type TResGetMyPost = TBaseSuccessResponse<TResGetMyPostData>;
