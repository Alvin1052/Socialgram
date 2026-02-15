import { TBaseSuccessResponse } from './base-types';
import { TComment, TPagination } from './general-types';

type TGetCommentData = {
  comments: TComment[];
  pagination: TPagination;
};

export type TResGetComment = TBaseSuccessResponse<TGetCommentData>;

export interface TPayloadPostComment {
  PostId: string;
  comment: string;
}

type TPostCommentData = TComment & { isMine: boolean };

export type TResPostComment = TBaseSuccessResponse<TPostCommentData>;

type TDeleteCommentData = { deleted: boolean };

export type TResDeleteComment = TBaseSuccessResponse<TDeleteCommentData>;
