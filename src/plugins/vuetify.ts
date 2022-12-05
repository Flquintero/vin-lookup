import "vuetify/styles";
import { createVuetify } from "vuetify";
import {
  VApp,
  VCard,
  VCardItem,
  VCardText,
  VCardTitle,
  VTab,
  VTabs,
} from "vuetify/components";

export const vuetify = createVuetify({
  components: { VApp, VCard, VTab, VTabs, VCardItem, VCardText, VCardTitle },
});
