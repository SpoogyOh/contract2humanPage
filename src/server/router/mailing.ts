import { createRouter } from "./context";
import { z } from "zod";
import { createMailschema } from "../../types/mailSchema";

export const mailRouter = createRouter().mutation("createMail", {
  input: createMailschema,

  async resolve({ ctx, input }) {
    const { email, lastName, firstName,  } = input;

    const mail = await ctx.prisma.mailingList.create({
      data: {
        ...input,
      },
    });
    return mail;
  },
});
