const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("li.active__link").classList.remove("active__link");
    item.classList.add("active__link");
  });
});
