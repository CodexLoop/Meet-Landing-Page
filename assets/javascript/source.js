// Add header shadow
const header = document.querySelector('.header');

function QueryShadow() {
  if (window.scrollY > 40) {
    header.classList.add('shadow');
  }
  else {
    header.classList.remove('shadow');
  }
}
window.addEventListener('scroll', QueryShadow);
