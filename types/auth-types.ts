import { TBaseSuccessResponse } from './base-types';
import { TUserProfile } from './general-types';

export interface TLoginPayload {
  email: string;
  password: string;
}

export type TUser = Omit<TUserProfile, 'bio' | 'createdAt'>;

interface TLoginDataResponse {
  token: string;
  user: TUser;
}

export type TLoginSuccessResponse = TBaseSuccessResponse<TLoginDataResponse>;

export type TRegisterPayload = {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
};

interface TRegisterDataResponse {
  token: string;
  user: TUser;
}

export type TRegisterResponse = TBaseSuccessResponse<TRegisterDataResponse>;
