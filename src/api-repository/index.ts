import VinRepository from "./VinRepository";
import type { IApi } from "@/types/api-repository/interfaces";

//type this with an object with all the types of each repository
const repositories: IApi = {
  vin: VinRepository,
};

export default {
  get: (name: string) => repositories[name],
};
