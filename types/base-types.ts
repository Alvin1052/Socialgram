export type TBaseSuccessResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type TBaseErrorResponse = {
  success: boolean;
  message: string;
  data: null;
};
