const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");
const navLogo = document.querySelector("#navbar_logo");

// Display Mobile Menu

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show Active menu

const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const eventsMenu = document.querySelector("#events-page");
  const charityMenu = document.querySelector("#charity-page");
  let scrollPos = window.scrollY;
  console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    eventsMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    eventsMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    charityMenu.classList.remove("highlight");

    return;
  } else if (window.innerWidth > 960 && scrollPos < 3435) {
    charityMenu.classList.add("highlight");
    eventsMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};
window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 1000 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

let currentImageIndex = 0;

function scrollGallery(direction) {
  const gallery = document.querySelector(".gallery");
  const images = document.querySelectorAll(".gallery-image-container");

  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1; // Loop to the last image
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0; // Loop back to the first image
  }

  // Move the gallery to the current image
  gallery.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    successMessage.style.display = "block"; // Show the thank-you message
    form.reset(); // Optionally reset the form fields
  });
});
