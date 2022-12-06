import VinLookupRepository from "./VinLookupRepository";
import type { IApi } from "@/types/api-repository/interfaces";

//type this with an object with all the types of each repository
const repositories: IApi = {
  vinLookup: VinLookupRepository,
};

export default {
  get: (name: string) => repositories[name],
};
