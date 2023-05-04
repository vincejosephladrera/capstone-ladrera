const menuButton = document.querySelector("#menu-icon");
const aboutButton = document.querySelector("#about-bottom");
const worksButton = document.querySelector("#works-bottom");
const contactButton = document.querySelector("#contact-bottom");

menuButton.addEventListener("click", () => {
  document.querySelector("#burger").classList.toggle("active");
  aboutButton.classList.toggle("show");
  worksButton.classList.toggle("show");
  contactButton.classList.toggle("show");
});
