<template>
  <v-card>
    <v-tabs v-model="tab" fixed-tabs color="primary">
      <v-tab :value="0">Single Vin</v-tab>
      <v-tab :value="1">Bulk Vin</v-tab>
      <v-tab :value="2">Manual Vin</v-tab>
    </v-tabs>

    <v-card-text>
      <component :is="getVinLookupOptions(tab)"></component>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getVinLookupOptions } from "./utils/vin-lookup-tab-content";
const tab = ref(0);
</script>

<style scoped></style>
