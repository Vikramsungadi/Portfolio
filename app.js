const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".fa-xmark");
const menuLinks = document.querySelector(".menu--links");
const all = document.querySelector(".portfolio");
const expand = document.querySelector(".projects");
const logos = document.querySelectorAll(".skill img");
const skill_link = document.querySelector("#skill__link");
const skill_btn = document.querySelector("#skill__btn");
const category = document.querySelector(".category__side");
const abouts = document.querySelector(".about__side");
const categorySkills = document.querySelector(".list__side");
const aboutExplain = document.querySelector(".about__explain");
const aboutDetails = document.querySelector(".about__details");
const interestExplain = document.querySelector(".interest__explain");
const todoimg = document.querySelector(".todoimg");

//                                      EVENT LISTENERS

menu.addEventListener("click", menuslide);
menuLinks.addEventListener("click", closeMenu);
expand.addEventListener("click", expandDetails);
skill_link.addEventListener("click", poplogos);
skill_btn.addEventListener("click", poplogos);
category.addEventListener("click", showCategory);
category.addEventListener("mousemove", showCategory);
abouts.addEventListener("mousemove", showAbout);
abouts.addEventListener("click", showAbout);
todoimg.addEventListener("mouseover", changeImage);
todoimg.addEventListener("click", changeImage);

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
  if (e.target.classList.contains("fa-circle-chevron-down")) {
    chevron = e.target;
    // projectDetails = e.target.closest(".project__details");
    // console.log(projectDetails);
    // ul = document.createElement("ul");
    // li1 = document.createElement("li");
    // li2 = document.createElement("li");
    // li3 = document.createElement("li");
    // checkul = projectDetails.querySelector("ul");
    if ((chevron.style.rotate = "180deg")) {
      chevron.style.rotate = "360deg";
    } else {
      chevrons.style.rotate = "180deg";
    }
    projectDetails = e.target.closest(".project__details");
    features = projectDetails.querySelector(".features");

    features.classList.toggle("none");

    // features.ontransitionend = function () {
    // };

    // if (!checkul) {
    //   chevron.style.rotate = "180deg";
    //   title = projectDetails.querySelector(".project__title");

    //   if (title.innerText === "todo1" || "todo2" || "todo3") {
    //     li1.innerText = "Editing";
    //     li2.innerText = "Filtering";
    //     li3.innerText = "DarkMode";
    //     ul.append(li1, li2, li3);
    //     ul.style.animation = "fadename 450ms ease";

    //     projectDetails.append(ul);

    //     setTimeout(() => {
    //       ul.style.animation = "";
    //     }, 500);
    //   }
    // } else {
    //   chevron.style.rotate = "0deg";

    //   checkul.style.animation = "fadename 450ms ease";

    //   setTimeout(() => {
    //     checkul.remove();
    //   }, 500);
    // }
  }
}

//                                          SKILLS LOGOS POPPING

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

function showCategory(e) {
  let text = e.target.innerText;

  let categories = Array.from(category.children);
  categories.forEach((categoryy) => {
    if (categoryy.innerText === text) {
      categoryy.style.setProperty("background-color", "var(--secondary-dark)");
      categoryy.style.setProperty("opacity", "1");
    } else {
      categoryy.style.setProperty("background-color", "");
      categoryy.style.setProperty("opacity", "0.2");
    }
  });

  let lowertext = text.toLowerCase();
  let categorySkill = Array.from(categorySkills.children);

  if (text === "FrontEnd" || "Backend" || "Others") {
    Array.from(categorySkill).forEach((skill_list) => {
      if (skill_list.classList.contains(lowertext)) {
        skill_list.style.setProperty(
          "background-color",
          "var(--secondary-dark)"
        );
        skill_list.classList.remove("none");
      } else {
        if (!skill_list.classList.contains("none")) {
          skill_list.classList.add("none");
        }
      }
    });
  }
}

function showAbout(e) {
  let text = e.target.innerText;

  let headings = Array.from(abouts.children);
  headings.forEach((heading) => {
    if (heading.innerText === text) {
      heading.style.setProperty("background-color", "var(--secondary-dark)");
      heading.style.setProperty("opacity", "1");
    } else {
      heading.style.setProperty("background-color", "");
      heading.style.setProperty("opacity", "0.2");
    }
  });

  if (text === "About") {
    aboutExplain.style.setProperty("background-color", "var(--secondary-dark)");
    aboutExplain.classList.remove("none");

    if (!interestExplain.classList.contains("none")) {
      interestExplain.classList.add("none");
    }
  } else if (text === "Interests") {
    interestExplain.style.setProperty(
      "background-color",
      "var(--secondary-dark)"
    );
    interestExplain.classList.remove("none");

    if (!aboutExplain.classList.contains("none")) {
      aboutExplain.classList.add("none");
    }
  }
}

function changeImage(e) {
  if (e.target.classList.contains("todoimg")) {
    e.target.style.animation = "fade 0.5s ease";
    if (e.target.classList.contains("lightImg")) {
      e.target.classList.add("darkImg");
      e.target.classList.remove("lightImg");
      let imgsrc = e.target.src;
      let modifiedsrc = imgsrc.replace("todo2.png", "todo.png");
      e.target.src = modifiedsrc;
    } else if (e.target.classList.contains("darkImg")) {
      e.target.classList.remove("darkImg");
      e.target.classList.add("lightImg");
      let imgsrc = e.target.src;
      let modifiedsrc = imgsrc.replace("todo.png", "todo2.png");
      e.target.src = modifiedsrc;
    }

    setTimeout(() => {
      e.target.style.animation = "";
    }, 500);
  }
}
function changeImageAgain(e) {
  if (e.target.classList.contains("todoimg")) {
    let imgsrc = e.target.src;
    let modifiedsrc = imgsrc.replace("todo2.png", "todo.png");

    e.target.src = modifiedsrc;
  }
}
