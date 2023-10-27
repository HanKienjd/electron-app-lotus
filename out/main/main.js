"use strict";
const electron = require("electron");
require("path");
require("child_process");
let mainWindow;
function createWindow() {
  mainWindow = new electron.BrowserWindow({
    // webPreferences: {
    //   nodeIntegration: true,
    //   preload: '../preload/preload.js'
    // }
  });
  mainWindow.loadURL("http://localhost:5173");
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", () => mainWindow = null);
}
electron.app.whenReady().then(() => {
  createWindow();
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
electron.app.on("activate", () => {
  if (mainWindow == null) {
    createWindow();
  }
});
