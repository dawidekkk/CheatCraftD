'use strict';

const cardTitleMiecz = document.querySelector('.card-title-miecz');
const cardTitleLuk = document.querySelector('.card-title-luk');
const cardTitleKilof = document.querySelector('.card-title-kilof');
const cardTitleSponsor = document.querySelector('.card-title-sponsor');
const cardTitleSuper = document.querySelector('.card-title-super');
const cardTitleVip = document.querySelector('.card-title-vip');
const cardTitleUnban = document.querySelector('.card-title-unban');
const cardTitleDrop = document.querySelector('.card-title-drop');
const cardTitleCheat = document.querySelector('.card-title-cheat');
const cardTitleColorful = document.querySelector('.card-title-colorful');
const cardTitleGreen = document.querySelector('.card-title-green');
const cardTitlePink = document.querySelector('.card-title-pink');
const behindMiecz = document.querySelector('.behind-bg-miecz');
const behindLuk = document.querySelector('.behind-bg-luk');
const behindKilof = document.querySelector('.behind-bg-kilof');
const behindSponsor = document.querySelector('.behind-bg-sponsor');
const behindSuper = document.querySelector('.behind-bg-super');
const behindVip = document.querySelector('.behind-bg-vip');
const behindUnban = document.querySelector('.behind-bg-unban');
const behindDrop = document.querySelector('.behind-bg-drop');
const behindCheat = document.querySelector('.behind-bg-cheat');
const behindColorful = document.querySelector('.behind-bg-colorful');
const behindGreen = document.querySelector('.behind-bg-green');
const behindPink = document.querySelector('.behind-bg-pink');

const animIn = (item, title) => {
  item.addEventListener("mouseenter", () => {
    title.classList.add("red-mouseenter")
    title.classList.remove("white-mouseleave")
  })
}

const animOut = (item, title) => {
  item.addEventListener("mouseleave", () => {
    title.classList.remove("red-mouseenter")
    title.classList.add("white-mouseleave")
  })
}

// const animInColorful = (item, title) => {
//   item.addEventListener("mouseenter", () => {
//     title.classList.add("colorful");
//     title.classList.remove("white-colorful")
//   })
// }

// const animOutColorFul = (item, title) => {
//   item.addEventListener("mouseleave", () => {
//     title.classList.remove("colorful");
//     title.classList.add("white-colorful")
//   })
// }

animIn(behindMiecz, cardTitleMiecz);
animOut(behindMiecz, cardTitleMiecz);
animIn(behindLuk, cardTitleLuk);
animOut(behindLuk, cardTitleLuk);
animIn(behindKilof, cardTitleKilof);
animOut(behindKilof, cardTitleKilof);
animIn(behindSponsor, cardTitleSponsor);
animOut(behindSponsor, cardTitleSponsor);
animIn(behindSuper, cardTitleSuper);
animOut(behindSuper, cardTitleSuper);
animIn(behindVip, cardTitleVip);
animOut(behindVip, cardTitleVip);
animIn(behindUnban, cardTitleUnban);
animOut(behindUnban, cardTitleUnban);
animIn(behindDrop, cardTitleDrop);
animOut(behindDrop, cardTitleDrop);
animIn(behindCheat, cardTitleCheat);
animOut(behindCheat, cardTitleCheat);
animIn(behindColorful, cardTitleColorful);
animOut(behindColorful, cardTitleColorful);
animIn(behindGreen, cardTitleGreen);
animOut(behindGreen, cardTitleGreen);
animIn(behindPink, cardTitlePink);
animOut(behindPink, cardTitlePink);
// animInColorful(behindColorful, cardTitleColorful)
// animOutColorFul(behindColorful, cardTitleColorful)

