// Menu

document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector(".header");

  window.addEventListener("scroll", function() {
    if (window.scrollY>=10) {
      header.classList.add("on");
    } else {
      header.classList.remove("on");
    }
  });
});

// Menu