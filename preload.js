const { contextBridge, ipcRenderer } = require("electron");
const ipc = ipcRenderer;

const API = {
  checkTheme: () => ipc.send("check_theme"),
  themeState: (callback) =>
    ipc.on("theme_state", (event, data) => callback(data)),
  domTheme: (data) => ipc.send("dom_theme", data),
};
contextBridge.exposeInMainWorld("bridge", API);
