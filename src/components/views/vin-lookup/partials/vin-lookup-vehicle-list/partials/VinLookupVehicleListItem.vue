<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <template #default>
        <div class="w-100 d-flex justify-space-between align-center">
          <span>1. 398938984984839</span>
          <v-btn color="blue" variant="plain">DELETE</v-btn>
        </div>
      </template>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <div class="v-row">
        <v-text-field
          class="v-col-xs-12 v-col-sm-4"
          label="Vin #"
          variant="underlined"
        >
        </v-text-field>
        <v-select
          class="v-col-xs-12 v-col-sm-4"
          label="Year"
          :items="yearsList(1950)"
          variant="underlined"
        ></v-select>
        <v-text-field
          class="v-col-xs-12 v-col-sm-4"
          label="Make"
          variant="underlined"
        >
        </v-text-field>
      </div>
      <div class="v-row">
        <v-text-field
          class="v-col-xs-12 v-col-sm-4"
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
import { yearsList } from "../../../../../../utils/years-list"; // to do: see why alias is not picking up;
defineExpose({
  yearsList,
});
</script>
