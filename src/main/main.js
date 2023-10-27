import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { exec } from 'child_process';


let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    // webPreferences: {
    //   nodeIntegration: true,
    //   preload: '../preload/preload.js'
    // }
  });

  // Vite dev server URL
  
  mainWindow.loadURL('http://localhost:5173');
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => mainWindow = null);
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// ipcMain.on('test', (event, arg) => { 
//   exec('echo "Hello World"');
// });

app.on('activate', () => {
  if (mainWindow == null) {
    createWindow();
  }
}); 


