import { ref } from "vue";
import { defineStore } from "pinia";

import type { IVehicleVinData } from "@/types/vin-lookup/interfaces";

export const useVehiclesStore = defineStore("vehicles", () => {
  const activeVehicles = ref([] as IVehicleVinData[]);
  function addVehicle(vehicleResponse: IVehicleVinData) {
    activeVehicles.value.unshift(vehicleResponse);
  }
  function updateVehicle(
    vehicleIndex: number,
    newVehicleInfo: IVehicleVinData
  ) {
    const targetObject = activeVehicles.value[vehicleIndex];
    const updatedVehicleInfo = Object.assign(targetObject, newVehicleInfo);
    activeVehicles.value.splice(vehicleIndex, 1, updatedVehicleInfo);
  }
  function deleteVehicle(vehicleIndex: number) {
    activeVehicles.value.splice(vehicleIndex, 1);
  }
  return { activeVehicles, addVehicle, updateVehicle, deleteVehicle };
});
