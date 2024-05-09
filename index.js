//Mobile menu items
const navMenu = document.querySelector("#nav-menu");
//Mobile Burger Icon and Close
const mobileOpenMenuIcon = document.querySelector("#menu-open-icon");
const mobileCloseMenuIcon = document.querySelector("#menu-close-icon");

// Function to hide and show mobile menu
function mobileMenuHandler() {
  if (navMenu.classList.contains("scale-0")) {
    navMenu.classList.replace("scale-0", "scale-100");
    mobileOpenMenuIcon.classList.toggle("hidden");
    mobileCloseMenuIcon.classList.toggle("hidden");
    mobileCloseMenuIcon.classList.toggle("scale-0");
  } else {
    navMenu.classList.replace("scale-100", "scale-0");
    mobileOpenMenuIcon.classList.toggle("hidden");
    mobileCloseMenuIcon.classList.toggle("hidden");
    mobileCloseMenuIcon.classList.toggle("scale-0");
  }
}

//Event listeners to handle mobile menu

mobileOpenMenuIcon.addEventListener("click", mobileMenuHandler);
mobileCloseMenuIcon.addEventListener("click", mobileMenuHandler);
