<template>
  <div>
    <p>Enter a VIN and we'll use our data partner to search for your vehicle</p>
    <v-text-field
      class="v-col-xs-12 v-col-sm-6 mt-1"
      v-model.trim="vinNumber"
      @click:clear="handleClearVinNumber"
      clearable
      label="Enter VIN"
      variant="underlined"
      color="blue"
    ></v-text-field>
    <div class="d-flex justify-end">
      <v-btn
        class="mx-10 my-5"
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

const handleLookupVehicleClick = async function () {
  try {
    toggleIsSearching();
    let vinResponse = await VinLookupRepository.getSingleVinNumber(
      vinNumber.value
    );
    const { ErrorCode, ErrorText } = vinResponse.Results[0];
    if (ErrorCode !== "0") {
      console.log("Error", ErrorText);
      //show error alert with error text
    }
  } catch (error) {
    // show error alert
  } finally {
    toggleIsSearching();
  }
};

const toggleIsSearching = function () {
  isSearching.value = !isSearching.value;
};

const handleClearVinNumber = function () {
  vinNumber.value = "";
};

defineExpose({
  vinNumber,
  handleLookupVehicleClick,
  handleClearVinNumber,
});
</script>
