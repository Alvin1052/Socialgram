import {
  TloginScheme,
  TregisterScheme,
} from '@/features/auth/validations/auth';
import {
  TLoginSuccessResponse,
  TRegisterPayload,
  TRegisterResponse,
} from '@/types/auth-types';
import api from './api';

export const PostLogin = async (
  LoginPayload: TloginScheme
): Promise<TLoginSuccessResponse> => {
  const res = await api.post('/auth/login', LoginPayload);
  return res.data;
};

export const PostRegister = async (
  RegisterPayload: TregisterScheme
): Promise<TRegisterResponse> => {
  const res = await api.post('/auth/register', RegisterPayload);
  return res.data;
};
