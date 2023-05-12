console.log("coucou");

const btnToggleMenu = document.getElementById("icon-menu");
const btnCloseMenu = document.getElementById("menu-close");
const divMenu = document.getElementById("menu-toggle");
const divOverlay = document.getElementById("overlay");

btnToggleMenu.addEventListener("click", (event) => {
  event.preventDefault(); // Empêche la soumission du formulaire
  divMenu.classList.toggle("hidden");
  divOverlay.classList.toggle("hidden");
});

btnCloseMenu.addEventListener("click", (event) => {
  event.preventDefault(); // Empêche la soumission du formulaire
  divMenu.classList.remove("hidden");
  divOverlay.classList.remove("hidden");
});
