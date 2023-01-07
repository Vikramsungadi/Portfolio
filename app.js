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
const body = document.body;
const resume = document.querySelector(".resume");
const resume_links = document.querySelectorAll(".resume-link");
const resume_close_btn = document.querySelector("#resumeCloseBtn");

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
// todoimg.addEventListener("mouseover", changeImage);
// todoimg.addEventListener("click", changeImage);
document.addEventListener("DOMContentLoaded", preserveTheme);
resume_close_btn.addEventListener("click", openResume);

// MENU OPENING FUNCTION
function menuslide(e) {
  if (e.target.classList.contains("fa-bars")) {
    menuLinks.classList.toggle("none");
    menu.classList.toggle("none");
    all.classList.toggle("overlay");
    menu.style.display = "none";
  }
}

// MENU CLOSING FUNCTION
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

// PROJECT FEATURES SHOWING FUNCTION
function expandDetails(e) {
  if (e.target.classList.contains("fa-circle-chevron-down")) {
    chevron = e.target;
    if (chevron.style.rotate == "180deg") {
      chevron.style.rotate = "360deg";
    } else {
      chevron.style.rotate = "180deg";
    }
    projectDetails = e.target.closest(".project__details");
    features = projectDetails.querySelector(".features");

    features.classList.toggle("none");
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

// ABOUT HANDLING FUNCTION
function showCategory(e) {
  let text = e.target.innerText;

  let categories = Array.from(category.children);
  categories.forEach((categoryy) => {
    if (categoryy.innerText === text) {
      categoryy.style.setProperty(
        "background-color",
        "var(--about-background)"
      );
      categoryy.style.setProperty("opacity", "1");
    } else if (text.length < 15) {
      categoryy.style.setProperty("background-color", "");
      categoryy.style.setProperty("opacity", "0.2");
    }
  });

  let lowertext = text.toLowerCase();
  let categorySkill = Array.from(categorySkills.children);

  if (text === "FrontEnd" || "Backend" || "Others") {
    categorySkill.forEach((skill_list) => {
      if (skill_list.classList.contains(lowertext)) {
        skill_list.style.setProperty(
          "background-color",
          "var(--about-background)"
        );
        skill_list.classList.remove("none");
      } else if (text.length < 15) {
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
      heading.style.setProperty("background-color", "var(--about-background)");
      heading.style.setProperty("opacity", "1");
    } else if (text.length < 14) {
      heading.style.setProperty("background-color", "");
      heading.style.setProperty("opacity", "0.2");
    }
  });

  if (text === "About") {
    aboutExplain.style.setProperty(
      "background-color",
      "var(--about-background)"
    );
    aboutExplain.classList.remove("none");

    if (!interestExplain.classList.contains("none")) {
      interestExplain.classList.add("none");
    }
  } else if (text === "Interests") {
    interestExplain.style.setProperty(
      "background-color",
      "var(--about-background)"
    );
    interestExplain.classList.remove("none");

    if (!aboutExplain.classList.contains("none")) {
      aboutExplain.classList.add("none");
    }
  }
}

// CHANGING IMAGE ON PROJECT
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

// THEME CHANGING

const themes = document.querySelector(".theme");
const themes_array = Array.from(themes.children);
const themes_list = [];

themes_array.forEach((themee) => {
  themes_list.push(themee.classList.value);
});

themes.addEventListener("click", changeTheme);

function changeTheme(e) {
  if (themes_list.includes(e.target.classList.value)) {
    let theme = e.target.classList.value;

    themeHighlighter(themes_array, theme);

    localStorage.setItem("theme", JSON.stringify(theme));

    body.classList = "";

    body.classList.add(theme);
  }
}

// Helper Function to HighLight Theme
function themeHighlighter(arrayOfThemes, theme) {
  arrayOfThemes.forEach((theme_color) => {
    if (theme_color.classList.value === theme) {
      theme_color.style.scale = "1.15";
    } else {
      theme_color.style.scale = "0.7";
    }
  });
}

//  Saving theme to LS
function preserveTheme() {
  if (localStorage.getItem("theme") == null) {
    let theme = "navy";
    localStorage.setItem("theme", JSON.stringify(theme));
  }
  let theme = JSON.parse(localStorage.getItem("theme"));

  themeHighlighter(themes_array, theme);
  body.classList = "";
  body.classList.add(theme);
}

resume_links.forEach((link) => {
  link.addEventListener("click", openResume);
});

function openResume(e) {
  if (e.target.classList.contains("resume-link")) {
    resume.classList.toggle("none");
    all.classList.toggle("opacity");
  } else if (e.target.classList.contains("fa-xmark")) {
    resume.style.animation = "";
    resume.style.animation = "slideFromBottom 2s ease";
    setTimeout(() => {
      all.classList.toggle("opacity");
      resume.classList.toggle("none");
      resume.style.animation = "";
    }, 2000);
  }
}

// CHANGING PROJECT IMAGE ON HOVER
// const project_images = document.querySelectorAll(".projects img");

// project_images.forEach((image) => {
//   image.addEventListener("click", changeImage);
//   image.addEventListener("mouseover", changeImage);
// });

// function changeImage(e) {
//   let imgsrc = e.target.src;

//   //LIGHT IMAGE TO BLACK IMAGE
//   if (e.target.classList.contains("lightImg")) {
//     e.target.style.animation = "fade 0.5s ease";
//     e.target.classList.add("darkImg");
//     e.target.classList.remove("lightImg");

//     //todoimg
//     if (e.target.classList.contains("todoimg")) {
//       let modifiedsrc = imgsrc.replace("todo2.png", "todo.png");
//       e.target.src = modifiedsrc;
//     }

//     //portfolioimg
//     if (e.target.classList.contains("portfolioimg")) {
//       let modifiedsrc = imgsrc.replace(
//         "portfolio-white.png",
//         "portfolio-black.png"
//       );
//       e.target.src = modifiedsrc;
//     }

//     // BLACK IMAGE TO  LIGHT IMAGE
//   } else if (e.target.classList.contains("darkImg")) {
//     e.target.classList.remove("darkImg");
//     e.target.classList.add("lightImg");

//     //todoimg
//     if (e.target.classList.contains("todoimg")) {
//       let modifiedsrc = imgsrc.replace("todo.png", "todo2.png");
//       e.target.src = modifiedsrc;
//     }

//     //portfolioimg
//     if (e.target.classList.contains("portfolioimg")) {
//       let modifiedsrc = imgsrc.replace(
//         "portfolio-black.png",
//         "portfolio-white.png"
//       );
//       e.target.src = modifiedsrc;
//     }
//   }

//   setTimeout(() => {
//     e.target.style.animation = "";
//   }, 600);
// }
