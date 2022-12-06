<template>
  <div>
    <p class="mt-4">
      To make changes to the vehicles below, expand the row of the vehicle you
      wish to edit
    </p>
    <p class="my-4">ACTIVE VEHICLES: 1</p>
    <v-expansion-panels class="mt-4">
      <VinLookupVehicleListItem />
    </v-expansion-panels>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const VinLookupVehicleListItem = defineAsyncComponent(
  () => import("./partials/VinLookupVehicleListItem.vue")
);
defineExpose({ VinLookupVehicleListItem });
</script>
