import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {"PERCY_TOKEN":"web_07f6df327a6d2ee5b1b5ca29c37c7af97db8c500aa1f48e04144bafdf8375669"}
  }
});
