export interface IApi {
  [property: string]: any;
  vinLookup: IVinLookupRepository;
}

export interface IVinLookupRepository {
  getSingleVinNumber(vinNumber: string): Promise<IVinNumberApiResponse>;
}

export interface IVinNumberApiResponse {
  [k: string]: any;
}
