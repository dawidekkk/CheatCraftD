'use strict'

const backBtn = document.querySelector('.back-to-top');

const scroll = () => {
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backBtn.classList.add('show-btn')
  } else if(document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
    backBtn.classList.add('none')
    backBtn.classList.remove('show-btn')
  }
}

window.onscroll = () => {
  scroll();
}

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

backBtn.addEventListener("click", backToTop);


