function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function toggleInfo() {
  const info = document.getElementById("more-info");
  info.style.display = info.style.display === "none" ? "block" : "none";
}
