'use strict';

const cards = document.querySelectorAll('.opacity-zero');
const anim = document.querySelectorAll('.anim');

function intersectionOne(classOne, classTwo, t) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(!entry.isIntersecting) return;
      entry.target.classList.remove(`${classOne}`)
      entry.target.classList.add(`${classTwo}`)
      observer.unobserve(entry.target);
    })
  })

  cards.forEach(e => {
    observer.observe(e);
  })
}

intersectionOne('opacity-zero', 'opacity-one')

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards ease-out`
      observer.unobserve(entry.target);
    }
  })
})

anim.forEach(e => {
  observer.observe(e);
})

