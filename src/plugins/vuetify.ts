import "vuetify/styles";
import { createVuetify } from "vuetify";
// to do tree shake icons to just used the one we need
// example using JS / SVG in https://next.vuetifyjs.com/en/features/icon-fonts/
import "@mdi/font/css/materialdesignicons.css";
import {
  VApp,
  VCol,
  VCard,
  VCardItem,
  VCardText,
  VCardTitle,
  VTab,
  VTabs,
  VTextField,
  VIcon,
  VBtn,
  VAlert,
} from "vuetify/components";

export const vuetify = createVuetify({
  components: {
    VApp,
    VCard,
    VTab,
    VTabs,
    VCardItem,
    VCardText,
    VCardTitle,
    VCol,
    VTextField,
    VIcon,
    VBtn,
    VAlert,
  },
});
