export interface IApi {
  [property: string]: any;
  vin: IVinRepository;
}

export interface IVinRepository {
  decodeVin(vinNumber: string): Promise<IVinNumberApiResponse>;
}

export interface IVinNumberApiResponse {
  [k: string]: any;
}
