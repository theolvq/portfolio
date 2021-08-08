const scroll100Vh = (() => {
  document.body.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
      window.scrollBy(0, window.innerHeight);
    } else {
      window.scrollBy(0, -window.innerHeight);
    }
  });
})();

export default scroll100Vh;
