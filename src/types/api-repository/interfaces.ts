import type { IVinNumberApiResponse } from "@/types/vin-lookup/interfaces";

export interface IApi {
  [property: string]: any; // To do: correct this issue with typing
  vinLookup: IVinLookupRepository;
}

export interface IVinLookupRepository {
  getSingleVinNumber(vinNumber: string): Promise<IVinNumberApiResponse>;
}
