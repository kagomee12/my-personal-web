import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Invalid email address",
    }),
  phone: z.string().min(1, {
    message: "Phone is required",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

export type TformSchema = z.infer<typeof formSchema>;
