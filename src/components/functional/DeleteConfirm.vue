<template>
  <div>
    <v-dialog max-width="600" v-model="dialog">
      <template v-slot:activator="{ props }">
        <v-btn color="blue" variant="plain" v-bind="props">DELETE</v-btn>
      </template>
      <v-card>
        <v-card-title class="text-wrap">
          Are you sure you want to remove {{ props.item }}?
        </v-card-title>
        <v-card-text
          >This means you will no longer have access to the info and will need
          to resubmit via the vin lookup.</v-card-text
        >
        <v-card-actions class="justify-end">
          <v-btn color="blue" variant="text" @click="handleDialogCancel">
            CANCEL
          </v-btn>
          <v-btn color="blue" variant="text" @click="handleDialogConfirm">
            CONFIRM
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits, defineProps } from "vue";

//Props

const props = defineProps({
  item: String,
});

// Data

const dialog = ref(false);

// Methods

const handleDialogCancel = function () {
  dialog.value = false;
};

const emit = defineEmits(["update:confirm"]);

const handleDialogConfirm = function () {
  emit("update:confirm");
};

// Expose Components/Data/Methods

defineExpose({
  dialog,
  props,
  handleDialogCancel,
  handleDialogConfirm,
});
</script>
