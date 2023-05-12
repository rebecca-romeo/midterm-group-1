// not a priority but for nav bar color change
window.onscroll = function () {
  const top = window.scrollY;

  if (top >= 100) {
      header.classList.add("navbarColor");
  } else {
      header.classList.remove("navbarColor");
  }
};
