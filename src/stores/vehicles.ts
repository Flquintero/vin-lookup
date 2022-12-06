import { ref } from "vue";
import { defineStore } from "pinia";

import type { IVehicleVinData } from "@/types/vin-lookup/interfaces";

export const useVehiclesStore = defineStore("vehicles", () => {
  const activeVehicles = ref([] as IVehicleVinData[]);
  function addVehicle(vehicleResponse: IVehicleVinData) {
    activeVehicles.value.unshift(vehicleResponse);
  }
  return { activeVehicles, addVehicle };
});
