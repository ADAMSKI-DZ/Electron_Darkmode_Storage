const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const ipc = ipcMain;
const { getTheme, saveTheme } = require("./settings");

let mainWin;

const createMainWin = () => {
  mainWin = new BrowserWindow({
    width: 500,
    height: 500,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
    },
  });
  mainWin.loadFile("./src/index.html");
  mainWin.webContents.openDevTools({ mode: "detach" });
};

app.whenReady().then(() => {
  createMainWin();
});

app.on("window-all-closed", () => {
  app.quit();
});

ipc.on("check_theme", (event) => {
  event.sender.send("theme_state", getTheme());
});

ipc.on("dom_theme", (args, data) => {
  saveTheme(data);
});
