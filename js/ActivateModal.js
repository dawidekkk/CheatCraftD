'use strict'

const modalBtns = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-container')
const modalOverlay = document.querySelector('.overlay')
const modalCancel = document.querySelector('.modal-cancel');
const modalCloseBtn = document.querySelector('.modal-close-btn')
const modalBuy = document.querySelector('.modal-buy');

const openModal = (e) => {
  e.preventDefault();
  modal.classList.remove('hidden')
  modalOverlay.classList.remove('hidden')
}

const closeModal = (e) => {
  modal.classList.add('hidden');
  modalOverlay.classList.add('hidden');
}

// Closing via buttons
modalBtns.addEventListener("click", openModal);
modalCancel.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);

// Closing via click in overlay obj.
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if(e.key === 'Escape' && !modal.classList.contains("hidden")) {
    closeModal();
  }
})
