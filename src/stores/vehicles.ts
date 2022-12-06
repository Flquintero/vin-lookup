import { ref } from "vue";
import { defineStore } from "pinia";

export const useVehiclesStore = defineStore("vehicles", () => {
  const activeVehicles = ref([] as any[]);
  function addVehicle(vehicleResponse: any) {
    activeVehicles.value.unshift(vehicleResponse);
  }
  return { activeVehicles, addVehicle };
});
