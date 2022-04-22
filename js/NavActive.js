'use strict'

const activePage = document.querySelector('.active-page')

const activeHighlight = () => {
  if(document.URL.includes('/index.html') || document.URL.includes('/ranking.html') || document.URL.includes('/regulamin.html')) {
    console.log(true);
    activePage.style.color = 'black'
  } else {
    console.log(false);
  }
}

activeHighlight();
