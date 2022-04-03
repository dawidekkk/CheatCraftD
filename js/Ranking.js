'use strict';

const testBtn = document.querySelector('.testBtn')

const toggleList = (btn, list) => {
  const btns = document.querySelector(`${btn}`);
  const showList = document.querySelector(`${list}`);

  btns.addEventListener('click', () => {
    showList.classList.toggle('block')
    if(showList.classList.contains('block')) {
      btns.textContent = 'Załaduj mniej'
    } else {
      btns.textContent = 'Zaladuj wiecej'
    }
  })
}

// const markup = `
//   <table class="table intersection-anim" data-delay=".3s">
//     <tbody>
//       <tr class="table-row">
//         <td>4.</td>
//         <td><img src="./style/img/face.png" alt="Ikonka heada"></td>
//         <td>{ nick }</td>
//         <td>{ punkty }</td>
//       </tr>
//     </tbody>
//   </table>
// `

// const addMarkup = (e) => {
//   testBtn.addEventListener("click", (e) => {
//     e.insertAdjacentHTML("afterend", markup);
//   })
// }

// addMarkup(markup);

toggleList('.toggle-btn_topka_rankingu', '.show-list_topka_rankingu');
toggleList('.toggle-btn_topka_gildii', '.show-list_topka_gildii');
toggleList('.toggle-btn_topka_zabojcow', '.show-list_topka_zabojcow');
toggleList('.toggle-btn_topka_koxy', '.show-list_topka_koxy');

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