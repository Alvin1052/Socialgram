import z from 'zod';

export const updatePostValidation = z.object({
  name: z
    .string({ message: 'Name is required' })
    .min(3, { message: 'Name must be at least 3 characters' }),
  username: z
    .string({ message: 'username is required' })
    .min(3, { message: 'username must be at least 3 characters' }),
  phone: z
    .number({ message: 'phone is required' })
    .min(6, { message: 'phone must be at least 6 characters' }),
  bio: z.string({ message: 'bio is required' }).optional(),
  avatar: z.string(),
  avatarUrl: z.string(),
});

export type TupdatePostValidation = z.infer<typeof updatePostValidation>;
