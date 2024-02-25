document.addEventListener("DOMContentLoaded", function () {
  let tabLinks = document.querySelectorAll(".tab-link");
  let tabsContents = document.querySelectorAll(".tabContent");

  tabLinks.forEach((tabLink, index) => {
    tabLink.addEventListener("click", (event) => {
      event.preventDefault();

      tabsContents.forEach((content) => {
        content.classList.remove("active");
      });

      tabLinks.forEach((link) => {
        link.classList.remove("active");
      });

      tabsContents[index].classList.add("active");
      tabLink.classList.add("active");
    });
  });
});
