'use strict';

const toggleList = (btn, list, crown) => {
  const btns = document.querySelector(`${btn}`);
  const showList = document.querySelector(`${list}`);
  const crownHide = document.querySelector(`${crown}`)

  btns.addEventListener('click', () => {
    showList.classList.toggle('block')
    crownHide.classList.toggle('hide')
    if(showList.classList.contains('block')) {
      btns.textContent = 'Załaduj mniej'
    } else {
      btns.textContent = 'Zaladuj wiecej'
    }
  })
}

toggleList('.toggle-btn_topka_rankingu', '.show-list_topka_rankingu', '.crown-hide-first');
toggleList('.toggle-btn_topka_gildii', '.show-list_topka_gildii', '.crown-hide-second');
