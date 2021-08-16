const date = (() => {
  const dateSpan = document.querySelector('#date');
  const currentYear = new Date().getFullYear();
  dateSpan.innerText = currentYear;
})();

export default date;
