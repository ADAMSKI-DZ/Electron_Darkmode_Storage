// Darkmode system storage
const Store = require("electron-store");
const store = new Store();

const getTheme = () => {
  const defaultTheme = "Dark";
  const theme = store.get("theme");

  if (theme) {
    return theme;
  } else {
    store.set("theme", defaultTheme);
    return defaultTheme;
  }
};

const saveTheme = (theme) => {
  store.set("theme", theme);
  console.log("theme saved", theme);
};

module.exports = {
  getTheme: getTheme,
  saveTheme: saveTheme,
};
