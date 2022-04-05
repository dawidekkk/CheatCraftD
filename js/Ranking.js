'use strict';

const toggleList = (btn, list, crown) => {
  const btns = document.querySelector(`${btn}`);
  const showList = document.querySelector(`${list}`);
  const crownHide = document.querySelector(`${crown}`)

  btns.addEventListener('click', () => {
    showList.classList.toggle('block')
    
    if(showList.classList.contains('block')) {
      btns.textContent = 'Załaduj mniej'
    } else {
      btns.textContent = 'Zaladuj wiecej'
    }

    crownHide.classList.toggle('hide')
  })
}

toggleList('.toggle-btn_topka_rankingu', '.show-list_topka_rankingu', '.crown-hide-first');
toggleList('.toggle-btn_topka_gildii', '.show-list_topka_gildii', '.test');
// toggleList('.toggle-btn_topka_zabojcow', '.show-list_topka_zabojcow');
// toggleList('.toggle-btn_topka_koxy', '.show-list_topka_koxy');

