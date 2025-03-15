document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  menuToggle.addEventListener('click', function() {
    navMobile.classList.toggle('active');
  });
});
