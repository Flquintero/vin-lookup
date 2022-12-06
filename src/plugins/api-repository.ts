import type { App } from "vue";
import $apiRepository from "@/api-repository/index";

export default {
  install: (app: App) => {
    app.provide("$apiRepository", $apiRepository);
  },
};
