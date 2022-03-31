'use strict';

const toggleList = (btn, list) => {
  const btns = document.querySelector(`${btn}`);
  const showList = document.querySelector(`${list}`);

  btns.addEventListener('click', () => {
    showList.classList.toggle('block')
    if(showList.classList.contains('block')) {
      btns.textContent = 'Załaduj mniej.'
    } else {
      btns.textContent = 'Zaladuj wiecej.'
    }
  })
}

toggleList('.toggle-btn_topka_rankingu', '.show-list_topka_rankingu');

// const toggleList = (list, btn) => {
//   const showList = document.querySelector(list)
//   const activatelist = document.querySelector(btn);

//   activatelist.addEventListener('click', () => {
//     showList.classList.toggle('block');
//     if(showList.classList.contains('block')) {
//       activatelist.textContent = 'Zmniejsz listę.'
//     } else {
//       activatelist.textContent = 'Załaduj więcej.'
//     }
//   })
// }

// toggleList('.show-list_topka_rankingu', '.toggle-btn');