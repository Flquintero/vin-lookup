import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";

import { vuetify } from "@/plugins/vuetify";
import apiRepository from "@/plugins/api-repository";

const app = createApp(App);

app.use(apiRepository);
app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
