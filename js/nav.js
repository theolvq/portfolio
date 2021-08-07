const toggleNav = (() => {
  const hamburger = document.querySelector('#hamburger');
  const nav = document.querySelector('#nav');
  const toggle = () => {
    if (nav.classList.contains('nav--hidden')) {
      nav.classList.remove('nav--hidden');
    }
    if (hamburger.textContent.trim() == 'menu') {
      hamburger.textContent = 'close';
    } else if (hamburger.textContent.trim() === 'close') {
      hamburger.textContent = 'menu';
    }
    nav.classList.toggle('animate__fadeOutRight');
    nav.classList.toggle('animate__fadeInRight');
  };

  hamburger.addEventListener('click', toggle);

  return {
    toggle,
  };
})();

export default toggleNav;
