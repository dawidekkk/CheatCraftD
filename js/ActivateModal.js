'use strict'

const modalBtns = document.querySelectorAll('.modal-btn');

const activate = (e) => {
  modalBtns.forEach(e => e.addEventListener("click", () => {
    modalBtns.forEach(e => {
      e.classList.remove('hidden')
      e.classList.add('active')
    })
  }))
}