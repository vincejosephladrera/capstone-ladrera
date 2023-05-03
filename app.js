const menuButton = document.querySelector("#menu-icon");
const aboutButton = document.querySelector("#about-bottom");
const worksButton = document.querySelector("#works-bottom");
const contactButton = document.querySelector("#contact-bottom");

menuButton.addEventListener("click", () => {
  if (aboutButton.classList.contains("show")) {
    aboutButton.classList.remove("show");
  } else {
    aboutButton.classList.add("show");
  }
  if (worksButton.classList.contains("show")) {
    worksButton.classList.remove("show");
  } else {
    worksButton.classList.add("show");
  }
  if (contactButton.classList.contains("show")) {
    contactButton.classList.remove("show");
  } else {
    contactButton.classList.add("show");
  }
});
