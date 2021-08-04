const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');

const toggleNav = () => {
  nav.classList.toggle('nav--hidden');
};

hamburger.addEventListener('click', toggleNav);

export default toggleNav;
