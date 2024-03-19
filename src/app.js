const toggleBtn = document.querySelector(".toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.classList.contains("active")) {
    toggleBtn.classList.remove("active");
    body.classList.remove("light");
    bridge.domTheme("Dark");
    console.log("Theme : Dark");
  } else {
    toggleBtn.classList.add("active");
    body.classList.add("light");
    bridge.domTheme("Light");
    console.log("Theme : Light");
  }
});

bridge.themeState(async (data) => {
  const themeState = await data;
  if (themeState === "Dark") {
    toggleBtn.classList.remove("active");
    body.classList.remove("light");
  } else if (themeState === "Light") {
    toggleBtn.classList.add("active");
    body.classList.add("light");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  bridge.checkTheme();
});
