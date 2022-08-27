import { createRouter } from "./context";
import { z } from "zod";

export const userRouter = createRouter()
  .query("getUser", {
    input: z
      .object({
        text: z.string(),
      }),
    resolve({ input }) {
      return {
        greeting: `Hello ${input.text}`,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  });
