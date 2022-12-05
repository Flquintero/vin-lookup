import { $apiRequest } from "@/utils/api";

const BASE_PATH = "https://vpic.nhtsa.dot.gov/api/vehicles";

export default {
  getSingleVinNumber: async (vinNumber: string) => {
    return await $apiRequest({
      // if only adding it here for the purpose of the exercise
      // but i would actually add the baseURL in the abstracted utils to call our own api that then would call the vinLookupApi
      baseURL: `${BASE_PATH}/DecodeVinValues/${vinNumber}?format=json`,
    });
  },
};
