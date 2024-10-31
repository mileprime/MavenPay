document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const darkModeCSS = document.getElementById("dark-mode-css");
  if (darkModeCSS.disabled) {
    darkModeCSS.disabled = false;
  } else {
    darkModeCSS.disabled = true;
  }
});
