import z, { file } from 'zod';

const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];
const FILESIZE_LIMIT = 5000000;

const ImageSchema = z
  .file()
  .refine((file) => file.size <= FILESIZE_LIMIT, {
    message: "File can't be bigger than 5MB.",
  })
  .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
    message: 'File format must be either jpg, jpeg lub png.',
  });

export const PostSchema = z.object({
  photo: ImageSchema,
  caption: z.string(),
});

export type TPostSchema = z.infer<typeof PostSchema>;
