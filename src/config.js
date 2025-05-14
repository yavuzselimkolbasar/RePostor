const Store = require("electron-store");
require("dotenv").config();

// Store build
const store = new Store({
  encryptionKey: "buffer-app-secure-key",
});

// Default Settings
const defaultSettings = {
  theme: "light",
  headlessMode: false,
  pageTimeout: 30,
  elementTimeout: 10,
  autoPublish: false,
};

// Module Export
module.exports = {
  store,
  defaultSettings,
};
