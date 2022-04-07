'use strict'

const modalBtns = document.querySelectorAll('.modal-btn');
const modal = document.querySelector('.behind-bg-modal')
const modalOverlay = document.querySelector('.overlay')
const modalCancel = document.querySelector('.modal-cancel');
const modalCloseBtn = document.querySelector('.modal-close-btn')
const modalBuy = document.querySelector('.modal-buy');

const openModal = (e) => {
  modal.classList.remove('hidden')
  modalOverlay.classList.remove('hidden')
}

const closeModal = (e) => {
  modal.classList.add('hidden');
  modalOverlay.classList.add('hidden');
}

modalCancel.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);

// Closing via click in overlay obj.
modalOverlay.addEventListener("click", closeModal);

// Closing via keydown ESC.
document.addEventListener("keydown", (e) => {
  if(e.key === 'Escape' && !modal.classList.contains("hidden")) {
    closeModal();
  }
})

// 
const activateModal = (sms, psc, przelew) => {
  const smsBtn = document.querySelector(`${sms}`)
  const pscBtn = document.querySelector(`${psc}`)
  const przelewBtn = document.querySelector(`${przelew}`)

  smsBtn.addEventListener("click", openModal)
  pscBtn.addEventListener("click", openModal)
  przelewBtn.addEventListener("click", openModal)
}

activateModal('.modal-btn-miecz_sms', '.modal-btn-miecz_psc', '.modal-btn-miecz_przelew')
activateModal('.modal-btn-luk_sms', '.modal-btn-luk_psc', '.modal-btn-luk_przelew')
activateModal('.modal-btn-kilof_sms', '.modal-btn-kilof_psc', '.modal-btn-kilof_przelew')
activateModal('.modal-btn-sponsor_sms', '.modal-btn-sponsor_psc', '.modal-btn-sponsor_przelew')
activateModal('.modal-btn-super_sms', '.modal-btn-super_psc', '.modal-btn-super_przelew')
activateModal('.modal-btn-vip_sms', '.modal-btn-vip_psc', '.modal-btn-vip_przelew')
activateModal('.modal-btn-unban_sms', '.modal-btn-unban_psc', '.modal-btn-unban_przelew')
activateModal('.modal-btn-turbo_sms', '.modal-btn-turbo_psc', '.modal-btn-turbo_przelew')
activateModal('.modal-btn-cheat_sms', '.modal-btn-cheat_psc', '.modal-btn-cheat_przelew')
activateModal('.modal-btn-colorful_sms', '.modal-btn-colorful_psc', '.modal-btn-colorful_przelew')
activateModal('.modal-btn-green_sms', '.modal-btn-green_psc', '.modal-btn-green_przelew')
activateModal('.modal-btn-pink_sms', '.modal-btn-pink_psc', '.modal-btn-pink_przelew')


