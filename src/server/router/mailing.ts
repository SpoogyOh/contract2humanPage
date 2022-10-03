import { createRouter } from "./context";

import { createMailschema } from "../../types/mailSchema";

export const mailRouter = createRouter().mutation("createMail", {
  input: createMailschema,

  async resolve({ ctx, input }) {
    const {} = input;

    const mail = await ctx.prisma.mailingList.create({
      data: {
        ...input,
      },
    });
    return mail;
  },
});
