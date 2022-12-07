<template>
  <div class="h-100 bg-grey-lighten-4">
    <v-card class="mx-auto my-sm-10" max-width="675" min-height="350">
      <v-card-title class="pa-5 text-blue">1. Add Vehicles</v-card-title>
      <v-tabs v-model="tab" fixed-tabs color="blue">
        <v-tab
          v-for="(lookupOption, index) in tabItems"
          :key="`${lookupOption}-${index}`"
          :value="index"
        >
          {{ lookupOption }}
        </v-tab>
      </v-tabs>
      <v-card-text>
        <component :is="getVinLookupOptions(tab)"></component>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getVinLookupOptions } from "./utils/vin-lookup-tab-content";
const tab = ref(0);
const tabItems = ["Single Vin", "Bulk Vin", "Manual Vin"];

defineExpose({
  tab,
  tabItems,
  getVinLookupOptions,
});
</script>
