'use strict';

const cardTitleMiecz = document.querySelector('.card-title-miecz');
const cardMiecz = document.querySelector('.card-miecz')
const cardLuk = document.querySelector('.card-luk')
// const cardKilof = document.querySelector('.card-kilof')
// const cardSponsor = document.querySelector('.card-sponsor')
// const cardSuper = document.querySelector('.card-super-vip')
// const cardVip = document.querySelector('.card-vip')
// const cardUnban = document.querySelector('.card-unban')
// const cardTurbo = document.querySelector('.card-turbo-drop')
// const cardCheat = document.querySelector('.card-cheat-case')
// const cardColorful = document.querySelector('.card-colorful')
// const cardGreen = document.querySelector('.card-green')
// const cardPink = document.querySelector('.card-pink')

// const animIn = () => {
//   cardMiecz.addEventListener("mouseenter", () => {
//     test.classList.toggle('test')
//   })
// }

// animIn();

const animIn = () => {
  cardMiecz.addEventListener("mouseenter", () => {
    cardTitleMiecz.classList.add("red-mouseenter")
  })
}

const animOut = () => {
  cardMiecz.addEventListener("mouseleave", () => {
    cardTitleMiecz.classList.remove("white-mouseleave")
  })
}

animIn();
animOut();
// // animIn(cardLuk);
// // animIn(cardKilof);
// animIn(cardSponsor);
// animIn(cardSuper);
// animIn(cardVip);
// animIn(cardUnban);
// animIn(cardTurbo);
// animIn(cardCheat);
// animIn(cardColorful);
// animIn(cardGreen);
// animIn(cardPink);

// // animOut(cardMiecz);
// // animOut(cardLuk);
// // animOut(cardKilof);
// animOut(cardSponsor);
// animOut(cardSuper);
// animOut(cardVip);
// animOut(cardUnban);
// animOut(cardTurbo);
// animOut(cardCheat);
// animOut(cardColorful);
// animOut(cardGreen);
// animOut(cardPink);


