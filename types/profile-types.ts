import { TBaseSuccessResponse } from './base-types';
import { TPost, TUserProfile } from './general-types';

export type TUserStats = {
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

interface TGetMyPostPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface TResGetMyPostData {
  items: TPost[];
  pagination: TGetMyPostPagination;
}

export type TResGetMyPost = TBaseSuccessResponse<TResGetMyPostData>;
