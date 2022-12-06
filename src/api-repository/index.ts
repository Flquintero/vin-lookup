import VinLookupRepository from "./VinLookupRepository";
import type { IApi } from "@/types/api-repository/interfaces";

const repositories: IApi = {
  vinLookup: VinLookupRepository,
};

export default {
  get: (name: string) => repositories[name],
};
