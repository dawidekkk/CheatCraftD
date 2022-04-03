'use strict';

// const card = document.querySelector('.card-miecz');
const card = document.querySelector('.card-miecz');

card.addEventListener('mouseenter', () => {
  card.classList.toggle('testIn')
})

// card.addEventListener('mouseleave', () => {
//     // card.classList.remove('test')
//     card.classList.toggle('testR')
// })

// card.addEventListener('mouseenter', function() {
//   card.classList.add('cardShadow');
//   console.log('enter');
// })

// setTimeout(() => {
  
// }, 1000)

card.addEventListener('mouseleave', function() {
  // card.classList.remove('testIn')
  card.classList.toggle('testOut')
})

