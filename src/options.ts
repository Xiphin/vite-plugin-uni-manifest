import { UserOptions, ResolvedOptions } from "./types";

export const resolveOptions = (userOptions: UserOptions): ResolvedOptions => {
  return {
    ...userOptions,
  };
};