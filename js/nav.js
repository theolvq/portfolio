const toggleNav = (() => {
  const hamburger = document.querySelector('#hamburger');
  const nav = document.querySelector('#nav');
  const toggle = () => {
    console.log(nav.classList);
    if (nav.classList.contains('nav--hidden')) {
      nav.classList.remove('nav--hidden');
    }
    if (nav.classList.contains('animate__fadeInLeft')) {
      nav.classList.add('animate__fadeOutLeft');
      nav.classList.remove('animate__fadeInLeft');
    }
    if (nav.classList.contains('animate__fadeOutLeft')) {
      nav.classList.add('animate__fadeInLeft');
      nav.classList.remove('animate__fadeOutLeft');
    }
  };

  hamburger.addEventListener('click', toggle);

  return {
    toggle,
  };
})();

export default toggleNav;
