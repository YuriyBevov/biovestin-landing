const nav = document.querySelector(".lw-main-nav");
const burger = document.querySelector(".lw-burger");

if (nav && burger) {
  const closer = nav.querySelector(".lw-main-nav__closer");
  const openNav = () => {
    nav.classList.add("lw-main-nav--active");

    document.addEventListener("click", onOverlayClickCloseNav);
    closer.addEventListener("click", onClickCloseNavHandler);
    burger.removeEventListener("click", onClickOpenNavHandler);
  };

  const closeNav = () => {
    nav.classList.remove("lw-main-nav--active");

    document.removeEventListener("click", onOverlayClickCloseNav);
    closer.removeEventListener("click", onClickCloseNavHandler);
    burger.addEventListener("click", onClickOpenNavHandler);
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
