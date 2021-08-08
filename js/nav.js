const toggleNav = (() => {
  const hamburger = document.querySelector('#hamburger');
  const nav = document.querySelector('#nav');
  const toggle = () => {
    if (hamburger.textContent.trim() == 'menu') {
      nav.classList.add('animate__fadeInRight');
      nav.classList.remove('animate__fadeOutRight');
      hamburger.textContent = 'close';
      nav.style.visibility = 'visible';
      nav.style.opacity = 1;
    } else if (hamburger.textContent.trim() === 'close') {
      nav.classList.add('animate__fadeOutRight');
      nav.classList.remove('animate__fadeInRight');
      hamburger.textContent = 'menu';
      nav.style.visibility = 'hidden';
      nav.style.opacity = 0;
    }
  };

  hamburger.addEventListener('click', toggle);

  return {
    toggle,
  };
})();

export default toggleNav;
