import { ref } from "vue";
import { defineStore } from "pinia";

import type { IVehicleVinData } from "@/types/vin-lookup/interfaces";

export const useVehiclesStore = defineStore("vehicles", () => {
  const activeVehicles = ref([] as IVehicleVinData[]);
  function addVehicle(vehicleResponse: IVehicleVinData) {
    activeVehicles.value.unshift(vehicleResponse);
  }
  function deleteVehicle(vehicleIndex: number) {
    activeVehicles.value.splice(vehicleIndex, 1);
  }
  return { activeVehicles, addVehicle, deleteVehicle };
});
