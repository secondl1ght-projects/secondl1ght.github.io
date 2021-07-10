//functions and event listeners for hiding the different content sections
//when clicking on the nav links to create dynamic pages

const contact = document.querySelector("#contact");

contact.onclick = function swapContentContact() {
  document.querySelector(".about").hidden = true;
  document.querySelector(".projects").hidden = true;
  document.querySelector(".skills").hidden = true;
  document.querySelector(".learning").hidden = true;
  document.querySelector(".contact").hidden = false;
};

const about = document.querySelector("#about");

about.onclick = function swapContentAbout() {
  document.querySelector(".about").hidden = false;
  document.querySelector(".projects").hidden = true;
  document.querySelector(".skills").hidden = true;
  document.querySelector(".learning").hidden = true;
  document.querySelector(".contact").hidden = true;
};

const projects = document.querySelector("#projects");

projects.onclick = function swapContentProjects() {
  document.querySelector(".about").hidden = true;
  document.querySelector(".projects").hidden = false;
  document.querySelector(".skills").hidden = true;
  document.querySelector(".learning").hidden = true;
  document.querySelector(".contact").hidden = true;
};

const skills = document.querySelector("#skills");

skills.onclick = function swapContentSkills() {
  document.querySelector(".about").hidden = true;
  document.querySelector(".projects").hidden = true;
  document.querySelector(".skills").hidden = false;
  document.querySelector(".learning").hidden = true;
  document.querySelector(".contact").hidden = true;
};

const learning = document.querySelector("#learning");

learning.onclick = function swapContentLearning() {
  document.querySelector(".about").hidden = true;
  document.querySelector(".projects").hidden = true;
  document.querySelector(".skills").hidden = true;
  document.querySelector(".learning").hidden = false;
  document.querySelector(".contact").hidden = true;
};

const home = document.querySelector("#home");

home.onclick = function swapContentHome() {
  document.querySelector(".about").hidden = false;
  document.querySelector(".projects").hidden = false;
  document.querySelector(".skills").hidden = false;
  document.querySelector(".learning").hidden = false;
  document.querySelector(".contact").hidden = false;
};

//function and event listeners to hide and show the certificates when clicking on the link and image

const cert1Link = document.querySelector("#cert1link");
const certificate1 = document.querySelector("#certificate1");

cert1Link.onclick = function showHideCert1() {
  if (
    certificate1.style.display === "none" ||
    certificate1.style.display === ""
  ) {
    certificate1.style.display = "block";
  } else {
    certificate1.style.display = "none";
  }
};

certificate1.onclick = function hideCert1() {
  certificate1.style.display = "none";
};

const cert2Link = document.querySelector("#cert2link");
const certificate2 = document.querySelector("#certificate2");

cert2Link.onclick = function showHideCert2() {
  if (
    certificate2.style.display === "none" ||
    certificate2.style.display === ""
  ) {
    certificate2.style.display = "block";
  } else {
    certificate2.style.display = "none";
  }
};

certificate2.onclick = function hideCert2() {
  certificate2.style.display = "none";
};

const cert3Link = document.querySelector("#cert3link");
const certificate3 = document.querySelector("#certificate3");

cert3Link.onclick = function showHideCert3() {
  if (
    certificate3.style.display === "none" ||
    certificate3.style.display === ""
  ) {
    certificate3.style.display = "block";
  } else {
    certificate3.style.display = "none";
  }
};

certificate3.onclick = function hideCert3() {
  certificate3.style.display = "none";
};

const cert4Link = document.querySelector("#cert4link");
const certificate4 = document.querySelector("#certificate4");

cert4Link.onclick = function showHideCert4() {
  if (
    certificate4.style.display === "none" ||
    certificate4.style.display === ""
  ) {
    certificate4.style.display = "block";
  } else {
    certificate4.style.display = "none";
  }
};

certificate4.onclick = function hideCert4() {
  certificate4.style.display = "none";
};
