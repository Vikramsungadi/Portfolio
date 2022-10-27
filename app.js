const menu = document.querySelector(".menu");
const close = document.querySelector(".fa-xmark");
const menuLinks = document.querySelector(".menu--links");
const all = document.querySelector(".portfolio");

//                                      EVENT LISTENERS

menu.addEventListener("click", menuslide);
close.addEventListener("click", closeMenu);

function menuslide(e) {
  if (e.target.classList.contains("fa-bars")) {
    // if (menuLinks.classList.contains("none")) {
    menuLinks.classList.toggle("none");
    menu.classList.toggle("none");
    all.classList.toggle("overlay");
    menu.style.display = "none";
    // }
  }
}

function closeMenu(e) {
  if (e.target.classList.contains("fa-xmark")) {
    menuLinks.style.animation = "slideout 0.3s ease";
    all.classList.toggle("overlay");
    menu.style.display = "inline-block";
    setTimeout(() => {
      menuLinks.classList.toggle("none");
      menuLinks.style.animation = "";
    }, 280);
  }
}
