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
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import type { IApi } from "../../../types/api-repository/interfaces"; // to do: Why didn't it read alias
const VinLookupRepository = (inject("$apiRepository") as IApi).get("vinLookup");
const isSearching = ref(false);
const vinNumber = ref("");
const vinLookupAlert = ref("");
const isShowingVinLookupAlert = ref(false);

const handleLookupVehicleClick = async function () {
  try {
    toggleIsSearching();
    let vinResponse = await VinLookupRepository.getSingleVinNumber(
      vinNumber.value
    );
    const { ErrorCode, ErrorText } = vinResponse.Results[0];
    if (ErrorCode !== "0") {
      showVinLookupAlert(ErrorText);
    }
  } catch (error) {
    showVinLookupAlert(
      "There was an error processing your request. Please try again or contact support."
    );
    // to do: add error reporting here
  } finally {
    toggleIsSearching();
  }
};

const toggleIsSearching = function () {
  isSearching.value = !isSearching.value;
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

defineExpose({
  vinNumber,
  vinLookupAlert,
  isShowingVinLookupAlert,
  handleLookupVehicleClick,
  handleClearVinNumber,
});
</script>
