<template>
  <div class="h-100 bg-grey-lighten-4">
    <v-card class="mx-auto my-sm-10" max-width="600" min-height="350">
      <v-card-title class="pa-5 text-blue">1. Add Vehicles</v-card-title>
      <v-tabs v-model="tab" fixed-tabs color="blue">
        <v-tab :value="0">Single Vin</v-tab>
        <v-tab :value="1">Bulk Vin</v-tab>
        <v-tab :value="2">Manual Vin</v-tab>
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

defineExpose({
  tab,
  getVinLookupOptions,
});
</script>
