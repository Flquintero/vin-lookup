<template>
  <div>
    <p>Enter a VIN and we'll use our data partner to search for your vehicle</p>
    <!-- put this alert component here in the interest of time but look into making it a globally accesible components, through creating a plugin and maybe toggling it with state or with a global method/variable -->
    <v-alert
      class="my-2"
      v-if="isShowingVinLookupAlert"
      type="error"
      :text="vinLookupAlert"
      closable
    ></v-alert>
    <v-text-field
      class="v-col-xs-12 v-col-sm-6 mt-1"
      v-model.trim="vinNumber"
      @click:clear="handleClearVinNumber"
      clearable
      label="Enter VIN"
      variant="underlined"
      color="blue"
    ></v-text-field>
    <div class="d-flex justify-center justify-sm-end">
      <v-btn
        class="mx-sm-10 my-5"
        @click="handleLookupVehicleClick"
        :disabled="!vinNumber || isSearching"
        :loading="isSearching"
        color="blue"
        >LOOKUP VEHICLE</v-btn
      >
    </div>
    <VinLookupVehicleList v-if="vehiclesStore?.activeVehicles.length" />
  </div>
</template>

<script setup lang="ts">
import { ref, inject, defineAsyncComponent } from "vue";

// Stores

import { useVehiclesStore } from "@/stores/vehicles";

// Types

import type { IApi } from "@/types/api-repository/interfaces";
import type { IVehicleVinData } from "@/types/vin-lookup/interfaces";

// Components

const VinLookupVehicleList = defineAsyncComponent(
  () => import("./partials/vin-lookup-vehicle-list/VinLookupVehicleList.vue")
);

// Data

const VinLookupRepository = (inject("$apiRepository") as IApi)?.get(
  "vinLookup"
);
const isSearching = ref(false);
const vinNumber = ref("");
const vinLookupAlert = ref("");
const isShowingVinLookupAlert = ref(false);
const vehicleResult = ref(null);
const vehiclesStore = useVehiclesStore();

// Methods

const handleLookupVehicleClick = async function () {
  try {
    toggleIsSearching();
    const vinLookupResponse = await VinLookupRepository.getSingleVinNumber(
      vinNumber.value
    );
    const vehicleObject = vinLookupResponse.Results[0];
    if (!hasError(vehicleObject)) {
      vehiclesStore.addVehicle(vehicleObject);
      handleClearVinNumber();
    }
  } catch (error) {
    console.log("error", error);
    showVinLookupAlert(
      "There was an error processing your request. Please try again or contact support."
    );
  } finally {
    toggleIsSearching();
  }
};

const toggleIsSearching = function () {
  isSearching.value = !isSearching.value;
};

const hasError = function (vehicleResponse: IVehicleVinData) {
  const { ErrorCode, ErrorText } = vehicleResponse;
  if (ErrorCode !== "0") {
    showVinLookupAlert(ErrorText as string);
    return true;
  }
  return false;
};

const showVinLookupAlert = function (errorText: string) {
  vinLookupAlert.value = errorText;
  isShowingVinLookupAlert.value = true;
  setTimeout(() => {
    isShowingVinLookupAlert.value = false;
  }, 10000);
};

const handleClearVinNumber = function () {
  vinNumber.value = "";
};

// Exposed Components/Data/Methods

defineExpose({
  VinLookupVehicleList,
  vehiclesStore,
  vinNumber,
  vinLookupAlert,
  isShowingVinLookupAlert,
  vehicleResult,
  handleLookupVehicleClick,
  handleClearVinNumber,
});
</script>
