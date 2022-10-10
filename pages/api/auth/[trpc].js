import * as trpcNext from "@trpc/server/adapters/next";


import { serverRouter } from "../../../src/server/router";
import { createContext } from "../../../src/server/context";


export default trpcNext.createNextApiHandler({
  router: serverRouter,
  createContext,
});