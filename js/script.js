mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

navBtn.addEventListener('click', function (event) {
  event.stopPropagation();
  toggleMobileNav();
})

window.addEventListener('click', function () {
  if (body.classList.contains('no-scroll')) {
    toggleMobileNav();
  }
})

mobileNav.addEventListener('click', function (event) {
  event.stopPropagation();
})

function toggleMobileNav() {
  body.classList.toggle('no-scroll');
  navBtn.classList.toggle('nav-button-close');
  mobileNav.classList.toggle('mobile-nav-active');
}