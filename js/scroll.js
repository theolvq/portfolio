const scroll = (() => {})();

export default scroll;

// const pageHeight = window.innerHeight;
// const documentHeight = document.body.clientHeight;
// console.log(documentHeight, pageHeight);
// let isScrolling = false;
// document.body.style.transform = 'translate3d(0px, 0px, 0px)';

// const wheelListener = (e) => {
//   if (e.deltaY > 0) {
//     scrollPage(-pageHeight);
//   } else {
//     scrollPage(+pageHeight);
//   }
// };

// const getNewYPosition = (scrollHeight) => {
//   const oldYPosition = Number(
//     document.body.style.transform.split(',')[1].replace(/px/, '')
//   );
//   const newYPosition = oldYPosition + scrollHeight;
//   if (newYPosition > 0) {
//     isScrolling = false;
//   } else if (newYPosition > pageHeight + documentHeight) {
//     return;
//   }
//   return `${Math.min(0, newYPosition)}px`;
// };

// const scrollPage = (scrollHeight) => {
//   if (isScrolling) {
//     return;
//   }
//   isScrolling = true;
//   const yPosition = getNewYPosition(scrollHeight);

//   console.log(yPosition);
//   document.body.style.transform = `translate3d(0px, ${yPosition}, 0px)`;
// };

// document.addEventListener('scroll', () => {
//   document.body.scrollTop = 0;
// });

// document.addEventListener('wheel', wheelListener);

// document.body.addEventListener('transitionend', () => {
//   setTimeout(() => {
//     isScrolling = false;
//   }, 100);
//   document.addEventListener('wheel', wheelListener);
// });

// return {
//   wheelListener,
// };
