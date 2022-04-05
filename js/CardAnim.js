'use strict';

const cardMiecz = document.querySelector('.card-miecz')
const cardLuk = document.querySelector('.card-luk')
const cardKilof = document.querySelector('.card-kilof')
const cardSponsor = document.querySelector('.card-sponsor')
const cardSuper = document.querySelector('.card-super-vip')
const cardVip = document.querySelector('.card-vip')
const cardUnban = document.querySelector('.card-unban')
const cardTurbo = document.querySelector('.card-turbo-drop')
const cardCheat = document.querySelector('.card-cheat-case')
const cardColorful = document.querySelector('.card-colorful')
const cardGreen = document.querySelector('.card-green')
const cardPink = document.querySelector('.card-pink')

const test = document.querySelectorAll('.behind-bg')

test.forEach(e => e.addEventListener("mouseenter", () => {
  console.log('elo');
}))

const animIn = obj => {
  obj.addEventListener("mouseenter", () => {
    obj.classList.add("cardAnimIn")
    obj.classList.remove("cardAnimOut")
  })
}

const animOut = obj => {
  obj.addEventListener("mouseleave", () => {
    obj.classList.add("cardAnimOut")
    obj.classList.remove("cardAnimIn")
  })
}

animIn(cardMiecz);
animIn(cardLuk);
animIn(cardKilof);
animIn(cardSponsor);
animIn(cardSuper);
animIn(cardVip);
animIn(cardUnban);
animIn(cardTurbo);
animIn(cardCheat);
animIn(cardColorful);
animIn(cardGreen);
animIn(cardPink);

animOut(cardMiecz);
animOut(cardLuk);
animOut(cardKilof);
animOut(cardSponsor);
animOut(cardSuper);
animOut(cardVip);
animOut(cardUnban);
animOut(cardTurbo);
animOut(cardCheat);
animOut(cardColorful);
animOut(cardGreen);
animOut(cardPink);


// card.addEventListener('mouseenter', () => {
//   card.classList.add('cardAnimIn')
//   card.classList.remove('cardAnimOut')
// })

// card.forEach(e => {
//   e.addEventListener('mouseenter', function(e) {
//     e.classList.add('cardAnimIn')
//     e.classList.remove('cardAnimOut')
//   })
// })

// const animIn = (obj) => {
//   itemCards.forEach(el => el.addEventListener("mouseenter", function() {
//     itemCards.forEach(el => el.classList.add("cardAnimIn"));
//     itemCards.forEach(el => el.classList.remove("cardAnimOut"))
//   }))
// }

// animIn(itemCards);

// card.forEach(e => {
  
// })

// card.addEventListener('mouseleave', function() {
//   card.classList.add('cardAnimOut')
//   card.classList.remove('cardAnimIn')
// })

