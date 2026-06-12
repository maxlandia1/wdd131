document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;

const menuBtn = document.getElementById("menu");
const navigatorMenu = document.querySelector(".navigator");

menuBtn.addEventListener("click", () => {
    navigatorMenu.classList.toggle("open");
});
