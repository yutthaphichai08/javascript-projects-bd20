const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

document.addEventListener("click", (event) => {
  if (!search.contains(event.target) && !btn.contains(event.target)) {
    if (input.value.trim() === "") {
      search.classList.remove("active");
    }
  }
});
