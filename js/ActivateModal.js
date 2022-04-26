'use strict'

const modalBtns = document.querySelectorAll('.modal-btn');
const modal = document.querySelector('.behind-bg-modal')
const modalOverlay = document.querySelector('.overlay')
const modalCancel = document.querySelector('.modal-cancel');
const modalCloseBtn = document.querySelector('.modal-close-btn')
const modalBuy = document.querySelector('.modal-buy');
const modalTitle = document.querySelector('.modal-title');

const openModal = () => {
  modal.classList.remove('hidden')
  modalOverlay.classList.remove('hidden')
}

const closeModal = () => {
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
const activateModalMiecz = () => {

  const smsBtn = document.querySelector(`.modal-btn-miecz_sms`)
  const pscBtn = document.querySelector('.modal-btn-miecz_psc')
  const przelewBtn = document.querySelector('.modal-btn-miecz_przelew')

  smsBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Miecz Śmierci. Płatność: SMS.`;
  })

  pscBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Miecz Śmierci. Płatność: PaysafeCard.`;
  })
  przelewBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Miecz Śmierci. Płatność: przelew.`;
  })

  
}

const activateModalLuk = () => {
  
  const smsBtn = document.querySelector(`.modal-btn-luk_sms`)
  const pscBtn = document.querySelector('.modal-btn-luk_psc')
  const przelewBtn = document.querySelector('.modal-btn-luk_przelew')

  smsBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Łuk Anihilacji. Płatność: SMS.`;
  })

  pscBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Łuk Anihilacji. Płatność: PaysafeCard.`;
  })
  przelewBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Łuk Anihilacji. Płatność: przelew.`;
  })
}

const activateModalKilof = () => {
  
  const smsBtn = document.querySelector(`.modal-btn-kilof_sms`)
  const pscBtn = document.querySelector('.modal-btn-kilof_psc')
  const przelewBtn = document.querySelector('.modal-btn-kilof_przelew')

  smsBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Kilof Zniszczenia. Płatność: SMS.`;
  })

  pscBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Kilof Zniszczenia. Płatność: PaysafeCard.`;
  })
  przelewBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Kilof Zniszczenia. Płatność: przelew.`;
  })
}

const activateModalSponsor = () => {
  
  const smsBtn = document.querySelector(`.modal-btn-sponsor_sms`)
  const pscBtn = document.querySelector('.modal-btn-sponsor_psc')
  const przelewBtn = document.querySelector('.modal-btn-sponsor_przelew')
  
  smsBtn.addEventListener("click", () => {
    openModal();
    if(sponsorInputValue.textContent === 'zawsze') {
      modalTitle.textContent = `Wybrana usługa: Sponsor na ${sponsorInputValue.textContent}. Płatność: SMS.`
    } else {
      modalTitle.textContent = `Wybrana usługa: Sponsor na ${sponsorInputValue.textContent} dni. Płatność: SMS.`
    }
  })

  pscBtn.addEventListener("click", () => {
    openModal();
    if(sponsorInputValue.textContent === 'zawsze') {
      modalTitle.textContent = `Wybrana usługa: Sponsor na ${sponsorInputValue.textContent}. Płatność: PaysafeCard.`
    } else {
      modalTitle.textContent = `Wybrana usługa: Sponsor na ${sponsorInputValue.textContent} dni. Płatność: PaysafeCard.`
    }
  })
  przelewBtn.addEventListener("click", () => {
    openModal();
    // modalTitle.textContent = `Wybrana usługa: Sponsor na ${sponsorInputValue.textContent} dni. Płatność: przelew.`;
    if(sponsorInputValue.textContent === 'zawsze') {
      modalTitle.textContent = `Wybrana usługa: Sponsor na ${sponsorInputValue.textContent}. Płatność: przelew.`
    } else {
      modalTitle.textContent = `Wybrana usługa: Sponsor na ${sponsorInputValue.textContent} dni. Płatność: przelew.`
    }
  })
}

const activateModalSuper = () => {
  
  const smsBtn = document.querySelector(`.modal-btn-super_sms`)
  const pscBtn = document.querySelector('.modal-btn-super_psc')
  const przelewBtn = document.querySelector('.modal-btn-super_przelew')
  
  smsBtn.addEventListener("click", () => {
    openModal();
    if(superInputValue.textContent === 'zawsze') {
      modalTitle.textContent = `Wybrana usługa: Super Sponsor na ${superInputValue.textContent}. Płatność: SMS.`
    } else {
      modalTitle.textContent = `Wybrana usługa: Super Sponsor na ${superInputValue.textContent} dni. Płatność: SMS.`
    }
  })

  pscBtn.addEventListener("click", () => {
    openModal();
    if(superInputValue.textContent === 'zawsze') {
      modalTitle.textContent = `Wybrana usługa: Super Sponsor na ${superInputValue.textContent}. Płatność: PaysafeCard.`
    } else {
      modalTitle.textContent = `Wybrana usługa: Super Sponsor na ${superInputValue.textContent} dni. Płatność: PaysafeCard.`
    }
  })
  przelewBtn.addEventListener("click", () => {
    openModal();
    if(superInputValue.textContent === 'zawsze') {
      modalTitle.textContent = `Wybrana usługa: Super Sponsor na ${superInputValue.textContent}. Płatność: przelew.`
    } else {
      modalTitle.textContent = `Wybrana usługa: Super Sponsor na ${superInputValue.textContent} dni. Płatność: przelew.`
    }
  })
}

const activateModalVip = () => {
  
  const smsBtn = document.querySelector(`.modal-btn-vip_sms`)
  const pscBtn = document.querySelector('.modal-btn-vip_psc')
  const przelewBtn = document.querySelector('.modal-btn-vip_przelew')
  
  smsBtn.addEventListener("click", () => {
    openModal();
    if(vipInputValue.textContent === 'zawsze') {
      modalTitle.textContent = `Wybrana usługa: Vip na ${vipInputValue.textContent}. Płatność: SMS.`
    } else {
      modalTitle.textContent = `Wybrana usługa: Vip na ${vipInputValue.textContent} dni. Płatność: SMS.`
    }
  })

  pscBtn.addEventListener("click", () => {
    openModal();
    if(vipInputValue.textContent === 'zawsze') {
      modalTitle.textContent = `Wybrana usługa: Vip na ${vipInputValue.textContent}. Płatność: PaysafeCard.`
    } else {
      modalTitle.textContent = `Wybrana usługa: Vip na ${vipInputValue.textContent} dni. Płatność: PaysafeCard.`
    }
  })
  przelewBtn.addEventListener("click", () => {
    openModal();
    if(vipInputValue.textContent === 'zawsze') {
      modalTitle.textContent = `Wybrana usługa: Vip na ${vipInputValue.textContent}. Płatność: przelew.`
    } else {
      modalTitle.textContent = `Wybrana usługa: Vip na ${vipInputValue.textContent} dni. Płatność: przelew.`
    }
  })
}

const activateModalUnban = () => {
  
  const smsBtn = document.querySelector(`.modal-btn-unban_sms`)
  const pscBtn = document.querySelector('.modal-btn-unban_psc')
  const przelewBtn = document.querySelector('.modal-btn-unban_przelew')

  smsBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Unban. Płatność: SMS.`;
  })

  pscBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Unban. Płatność: PaysafeCard.`;
  })
  przelewBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Unban. Płatność: przelew.`;
  })
}

const activateModalTurbo = () => {
  
  const smsBtn = document.querySelector(`.modal-btn-turbo_sms`)
  const pscBtn = document.querySelector('.modal-btn-turbo_psc')
  const przelewBtn = document.querySelector('.modal-btn-turbo_przelew')
  
  smsBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Vip na ${turboInputValue.textContent}. Płatność: SMS.`
  })

  pscBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Vip na ${turboInputValue.textContent}. Płatność: PaysafeCard.`
  })
  przelewBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Vip na ${turboInputValue.textContent}. Płatność: przelew.`
  })
}

const activateModalColorful = () => {
  
  const smsBtn = document.querySelector(`.modal-btn-colorful_sms`)
  const pscBtn = document.querySelector('.modal-btn-colorful_psc')
  const przelewBtn = document.querySelector('.modal-btn-colorful_przelew')

  smsBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Kolorowy nick. Płatność: SMS.`;
  })

  pscBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Kolorowy nick. Płatność: PaysafeCard.`;
  })
  przelewBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Kolorowy nick. Płatność: przelew.`;
  })
}

const activateModalGreen = () => {
  
  const smsBtn = document.querySelector(`.modal-btn-green_sms`)
  const pscBtn = document.querySelector('.modal-btn-green_psc')
  const przelewBtn = document.querySelector('.modal-btn-green_przelew')

  smsBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Zielony nick. Płatność: SMS.`;
  })

  pscBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Zielony nick. Płatność: PaysafeCard.`;
  })
  przelewBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Zielony nick. Płatność: przelew.`;
  })
}

const activateModalPink = () => {
  
  const smsBtn = document.querySelector(`.modal-btn-pink_sms`)
  const pscBtn = document.querySelector('.modal-btn-pink_psc')
  const przelewBtn = document.querySelector('.modal-btn-pink_przelew')

  smsBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Różowy nick. Płatność: SMS.`;
  })

  pscBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Różowy nick. Płatność: PaysafeCard.`;
  })
  przelewBtn.addEventListener("click", () => {
    openModal();
    modalTitle.textContent = `Wybrana usługa: Różowy nick. Płatność: przelew.`;
  })
}

activateModalMiecz();
activateModalLuk();
activateModalKilof();
activateModalSponsor();
activateModalSuper();
activateModalVip();
activateModalUnban();
activateModalTurbo();
activateModalColorful();
activateModalGreen();
activateModalPink();
