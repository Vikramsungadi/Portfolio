const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".fa-xmark");
const menuLinks = document.querySelector(".menu--links");
const all = document.querySelector(".portfolio");
const expand = document.querySelector(".projects");
const logos = document.querySelectorAll(".skill img");
const skill_link = document.querySelector("#skill__link");
const skill_btn = document.querySelector("#skill__btn");
console.log(skill_btn);

//                                      EVENT LISTENERS

menu.addEventListener("click", menuslide);
menuLinks.addEventListener("click", closeMenu);
expand.addEventListener("click", expandDetails);
skill_link.addEventListener("click", poplogos);
skill_btn.addEventListener("click", poplogos);

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
  parent = e.target.parentElement;
  if (
    e.target.classList.contains("fa-xmark") ||
    parent.classList.contains("menu__btns") ||
    parent.classList.contains("menu__ul")
  ) {
    menuLinks.style.animation = "slideout 0.3s ease";
    all.classList.toggle("overlay");
    menu.style.display = "inline-block";
    setTimeout(() => {
      menuLinks.classList.toggle("none");
      menuLinks.style.animation = "";
    }, 280);
  }
}

function expandDetails(e) {
  console.log(e.target);
  if (e.target.classList.contains("fa-circle-chevron-down")) {
    chevron = e.target;
    projectDetails = e.target.closest(".project__details");
    console.log(projectDetails);
    ul = document.createElement("ul");
    li1 = document.createElement("li");
    li2 = document.createElement("li");
    li3 = document.createElement("li");

    checkul = projectDetails.querySelector("ul");
    if (!checkul) {
      chevron.style.rotate = "180deg";
      title = projectDetails.querySelector(".project__title");

      if (title.innerText === "todo1" || "todo2" || "todo3") {
        li1.innerText = "Editing";
        li2.innerText = "Filtering";
        li3.innerText = "DarkMode";
        ul.append(li1, li2, li3);
        ul.style.animation = "fadename 450ms ease";

        projectDetails.append(ul);

        setTimeout(() => {
          ul.style.animation = "";
        }, 500);
      }
    } else {
      chevron.style.rotate = "0deg";

      checkul.style.animation = "fadename 450ms ease";

      setTimeout(() => {
        checkul.remove();
      }, 500);
    }
  }
}
function poplogos(e) {
  setTimeout(() => {
    logos[0].style.animation = "popup 1s ease-out";

    setTimeout(() => {
      logos[1].style.animation = "popup 1s ease-out";
      setTimeout(() => {
        logos[2].style.animation = "popup 1s ease-out";
        setTimeout(() => {
          logos[3].style.animation = "popup 1s ease-out";
          setTimeout(() => {
            logos[4].style.animation = "popup 1s ease-out";
            setTimeout(() => {
              logos[5].style.animation = "popup 1s ease-out";
              setTimeout(() => {
                logos[6].style.animation = "popup 1s ease-out";
                setTimeout(() => {
                  logos[7].style.animation = "popup 1s ease-out";

                  setTimeout(() => {
                    logos.forEach((logo) => {
                      logo.style.animation = "";
                    });
                  }, 1000);
                }, 100);
              }, 125);
            }, 150);
          }, 185);
        }, 175);
      }, 150);
    }, 100);
  }, 100);
}
