const { BrowserWindow } = require("electron");
const path = require("path");

// Main window reference
let mainWindow = null;

/**
 * Creates the main window
 * @returns {BrowserWindow} Created window object
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    frame: false,
    transparent: false,
    backgroundColor: "#f5f8fa",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, "../assets/icon.png"),
  });

  mainWindow.loadFile("index.html");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  return mainWindow;
}

/**
 * Rotates the main window, else null rotates
 * @returns {BrowserWindow|null}
 */
function getMainWindow() {
  return mainWindow;
}

module.exports = {
  createWindow,
  getMainWindow,
};
