<script setup lang="ts"></script>

<template>
  <div>
    <p>Enter a VIN and we'll use our data partner to search for your vehicle</p>
    <v-text-field
      clearable
      label="Enter VIN"
      variant="underlined"
      class="v-col-xs-12 v-col-sm-6 mt-1"
      color="blue"
    ></v-text-field>
    <div class="d-flex justify-end">
      <v-btn class="mx-10 my-5" color="blue">LOOKUP VEHICLE</v-btn>
    </div>
  </div>
</template>
