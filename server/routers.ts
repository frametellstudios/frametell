import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { listR2Videos } from "./r2";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  content: router({
    service: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        try {
          const filePath = path.join(process.cwd(), 'content', 'services', `${input.slug}.json`);
          const data = fs.readFileSync(filePath, 'utf-8');
          return JSON.parse(data);
        } catch (error) {
          return null;
        }
      }),
    portfolioIndex: publicProcedure.query(async () => {
      try {
        const filePath = path.join(process.cwd(), 'client', 'public', 'content', 'portfolio-index.json');
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
      } catch (error) {
        return [];
      }
    }),
    r2Videos: publicProcedure.query(async () => {
      return await listR2Videos();
    }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
