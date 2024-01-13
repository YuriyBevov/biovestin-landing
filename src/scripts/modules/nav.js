const nav = document.querySelector(".lw-main-nav");
const burger = document.querySelector(".lw-burger");

if (nav && burger) {
  const links = nav.querySelectorAll(".lw-main-nav__list-item a");

  console.log(links);
  const closer = nav.querySelector(".lw-main-nav__closer");
  const openNav = () => {
    nav.classList.add("lw-main-nav--active");

    document.addEventListener("click", onOverlayClickCloseNav);
    closer.addEventListener("click", onClickCloseNavHandler);
    burger.removeEventListener("click", onClickOpenNavHandler);

    links.forEach((link) => {
      link.addEventListener("click", onLinkClickCloseNav);
    });
  };

  const closeNav = () => {
    nav.classList.remove("lw-main-nav--active");

    document.removeEventListener("click", onOverlayClickCloseNav);
    closer.removeEventListener("click", onClickCloseNavHandler);
    burger.addEventListener("click", onClickOpenNavHandler);

    links.forEach((link) => {
      link.removeEventListener("click", onLinkClickCloseNav);
    });
  };
  const onLinkClickCloseNav = () => {
    closeNav();
  };
  const onOverlayClickCloseNav = (evt) => {
    if (evt.target === nav) {
      closeNav();
    }
  };

  const onClickCloseNavHandler = () => {
    closeNav();
  };

  const onClickOpenNavHandler = (evt) => {
    evt.stopPropagation();
    openNav();
  };

  burger.addEventListener("click", onClickOpenNavHandler);
}
