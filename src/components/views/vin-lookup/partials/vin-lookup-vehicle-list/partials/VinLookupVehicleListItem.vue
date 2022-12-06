<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <template #default>
        <div class="w-100 d-flex justify-space-between align-center">
          <span>{{ vehicleIndex + 1 }}. {{ props.vehicle?.VIN }}</span>
          <DeleteConfirm
            :item="props.vehicle?.VIN"
            @update:confirm="handleDeleteVehicle"
          >
          </DeleteConfirm>
        </div>
      </template>
    </v-expansion-panel-title>
    <v-expansion-panel-text class="mt-4">
      <div class="v-row">
        <v-text-field
          class="v-col-xs-12 v-col-sm-4"
          v-model="currentVenicleInfo.formData.VIN"
          label="Vin #"
          variant="underlined"
          disabled
        >
        </v-text-field>
        <v-select
          class="v-col-xs-12 v-col-sm-4"
          v-model="currentVenicleInfo.formData.ModelYear"
          label="Year"
          :items="modelYears"
          variant="underlined"
        ></v-select>
        <v-text-field
          class="v-col-xs-12 v-col-sm-4"
          v-model="currentVenicleInfo.formData.Make"
          label="Make"
          variant="underlined"
        >
        </v-text-field>
      </div>
      <div class="v-row">
        <v-text-field
          class="v-col-xs-12 v-col-sm-4"
          v-model="currentVenicleInfo.formData.Model"
          label="Model"
          variant="underlined"
        >
        </v-text-field>
      </div>
      <div class="d-flex justify-end">
        <v-btn variant="plain" @click="handleCloseVehicleItem">CANCEL</v-btn>
        <v-btn color="blue" @click="handleUpdateVehicle" variant="plain"
          >SAVE</v-btn
        >
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<script setup lang="ts">
import { reactive, onMounted, defineAsyncComponent } from "vue";

// Stores

import { useVehiclesStore } from "@/stores/vehicles";

// Types

import type { IVehicleVinData } from "@/types/vin-lookup/interfaces";

// Data Helpers

import { modelYears } from "@/utils/data-lists/model-years-list";

// Components

const DeleteConfirm = defineAsyncComponent(
  () => import("@/components/functional/DeleteConfirm.vue")
);

// Props

const props = defineProps({
  vehicle: Object as () => IVehicleVinData,
  vehicleIndex: { type: Number, required: true },
});

// Data
const vehiclesStore = useVehiclesStore();
const currentVenicleInfo = reactive({
  formData: {
    VIN: "",
    ModelYear: "",
    Make: "",
    Model: "",
  },
});

// Lifecycle hooks

onMounted(() => {
  setInitialFormValues();
});

// Methods

const setInitialFormValues = function () {
  currentVenicleInfo.formData = Object.assign(props.vehicle as IVehicleVinData);
};

const handleCloseVehicleItem = function () {};

const handleDeleteVehicle = function () {
  vehiclesStore.deleteVehicle(props.vehicleIndex as number);
};

const handleUpdateVehicle = function () {};

// Exposed Components/Data/Methods

defineExpose({
  DeleteConfirm,
  modelYears,
  props,
  currentVenicleInfo,
  handleCloseVehicleItem,
  handleDeleteVehicle,
  handleUpdateVehicle,
});
</script>
