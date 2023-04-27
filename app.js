const burger = document.querySelector("#burger");

const dropdown = document.querySelector("#dropdown-menu");

console.log(dropdown);

burger.addEventListener("click", () => {
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
    burger.classList.remove("active");
    dropdown.classList.add("d-none");
  } else {
    burger.classList.add("active");
    dropdown.classList.add("show");
    dropdown.classList.remove("d-none");
  }
});
