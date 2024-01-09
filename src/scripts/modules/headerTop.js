const headerTop = document.querySelector(".lw-header__top");

if (headerTop) {
  const closer = headerTop.querySelector(".lw-header__top-closer");

  closer.addEventListener("click", () => {
    headerTop.style.display = "none";
  });
}
