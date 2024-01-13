const links = document.querySelectorAll(".lw-anchor-link");

if (links) {
  links.forEach((link) => {
    link.addEventListener("click", (evt) => {
      evt.preventDefault();
      const id = link.getAttribute("href");

      document.querySelector(`.${id}`).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}
