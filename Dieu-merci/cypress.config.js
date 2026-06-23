const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://student.michaelkentburns.com",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
