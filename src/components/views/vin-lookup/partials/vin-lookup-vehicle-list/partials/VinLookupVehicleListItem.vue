<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <template #default>
        <div class="w-100 d-flex justify-space-between align-center">
          <span>{{ vehicleIndex }}. {{ props.vehicle?.VIN }}</span>
          <v-btn color="blue" variant="plain">DELETE</v-btn>
        </div>
      </template>
    </v-expansion-panel-title>
    <v-expansion-panel-text class="mt-4">
      <div class="v-row">
        <v-text-field
          class="v-col-xs-12 v-col-sm-4"
          v-model="vehicleInfo.VIN"
          label="Vin #"
          variant="underlined"
        >
        </v-text-field>
        <v-select
          class="v-col-xs-12 v-col-sm-4"
          v-model="vehicleInfo.ModelYear"
          label="Year"
          :items="yearsList"
          variant="underlined"
        ></v-select>
        <v-text-field
          class="v-col-xs-12 v-col-sm-4"
          v-model="vehicleInfo.Make"
          label="Make"
          variant="underlined"
        >
        </v-text-field>
      </div>
      <div class="v-row">
        <v-text-field
          class="v-col-xs-12 v-col-sm-4"
          v-model="vehicleInfo.Model"
          label="Model"
          variant="underlined"
        >
        </v-text-field>
      </div>
      <div class="d-flex justify-end">
        <v-btn variant="plain">CANCEL</v-btn>
        <v-btn color="blue" variant="plain">SAVE</v-btn>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<script setup lang="ts">
import { computed, defineEmits } from "vue";
// Types

import type { IVehicleVinData } from "../../../../../../types/vin-lookup/interfaces";

// Data Helpers

import { yearsList } from "../../../../../../utils/years-list"; // to do: see why alias is not picking up;

// Props

const props = defineProps({
  vehicle: Object as () => IVehicleVinData,
  vehicleIndex: Number,
});

// computed

const emit = defineEmits(["update:vehicle"]);

const vehicleInfo = computed({
  get: () => props.vehicle as IVehicleVinData,
  set: (newVehicleInfo) => emit("update:vehicle", newVehicleInfo),
});

// Exposed Components/Data/Methods

defineExpose({
  yearsList,
  props,
  vehicleInfo,
});
</script>
