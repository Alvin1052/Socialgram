export type TUserProfile = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  bio: string;
  avatarUrl: string;
  createdAt: string;
};

export interface TAuthor {
  id: number;
  username: string;
  name: string;
  avatarUrl: string | null;
}

export interface TPost {
  id: number;
  imageUrl: string;
  caption: string | null;
  createdAt: string;
  author: TAuthor;
  likeCount: number;
  commentCount: number;
  likedByMe: boolean;
}

export interface TPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface TComment {
  id: number;
  text: string;
  createdAt: string;
  author: TAuthor;
}

export interface TPayloadParams {
  page?: number;
  limit?: number;
}
