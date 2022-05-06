'use strict'

const activePage = document.querySelector('.active-page')

function activeHighlight () {
  // if(document.URL.includes('/index') || document.URL.includes('/ranking') || document.URL.includes('/regulamin')) {
  //   activePage.style.borderBottom = '8px solid hsl(0, 0%, 85%)'
  // } else {
  //   activePage.style.color = 'inherit'
  // } 
  return (
    document.URL.includes('/index') || 
    document.URL.includes('/ranking') || 
    document.URL.includes('/regulamin') ? 
    activePage.style.borderBottom = '4px solid hsl(0, 0%, 85%)' : 
    ''
  )
};

activeHighlight();
