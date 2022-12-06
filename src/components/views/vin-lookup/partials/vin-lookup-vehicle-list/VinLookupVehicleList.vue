<template>
  <div>
    <p class="mt-4">
      To make changes to the vehicles below, expand the row of the vehicle you
      wish to edit
    </p>
    <p class="my-4">
      ACTIVE VEHICLES: {{ vehiclesStore.activeVehicles.length }}
    </p>
    <v-expansion-panels v-model="openListItems" class="mt-4">
      <VinLookupVehicleListItem
        v-for="(vehicle, index) in vehiclesStore.activeVehicles"
        :key="vehicle.VIN"
        v-bind="{ vehicle, vehicleIndex: index, vehiclesStore }"
        @close:list-item="handleCloseListItem"
      />
    </v-expansion-panels>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";

// Stores

import { useVehiclesStore } from "@/stores/vehicles";

// Components

const VinLookupVehicleListItem = defineAsyncComponent(
  () => import("./partials/VinLookupVehicleListItem.vue")
);

// Data
const openListItems = ref(null);
const vehiclesStore = useVehiclesStore();

// Methods

const handleCloseListItem = function () {
  openListItems.value = null;
};

// Exposed Components/Data/Methods

defineExpose({
  VinLookupVehicleListItem,
  handleCloseListItem,
  vehiclesStore,
  openListItems,
});
</script>
