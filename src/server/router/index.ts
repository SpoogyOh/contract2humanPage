// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";


import { protectedExampleRouter } from "./protected-example-router"; //#endregion
import { mailRouter } from "./mailing";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("auth.", protectedExampleRouter)
  .merge("mail.", mailRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
