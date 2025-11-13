import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name too short").max(30, "Name too long"),
  email: z.email("Invalid Email"),
  password: z.string().min(8, "Password must be 8+ characters"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
