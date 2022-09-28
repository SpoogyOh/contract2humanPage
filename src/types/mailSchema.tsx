import z from "zod";

export const createMailschema = z.object({
  email: z.string().email(),
  lastName: z.string().min(1),
  firstName: z.string().min(1),
});

export type CreateMailInput = z.infer<typeof createMailschema>;
