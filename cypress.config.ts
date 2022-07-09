import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://google.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
