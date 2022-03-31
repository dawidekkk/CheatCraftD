'use strict'

let sponsorInput = document.getElementById('sponsor-input')
let sponsorInputValue = document.getElementById('sponsor-value')
let superInput = document.getElementById('super-input')
let superInputValue = document.getElementById('super-value')
let vipInput = document.getElementById('vip-input')
let vipInputValue = document.getElementById('vip-value')
let turboInput = document.getElementById('turbo-input')
let turboInputValue = document.getElementById('turbo-value')
let cheatInput = document.getElementById('cheat-input')
let cheatInputValue = document.getElementById('cheat-value')

let btnSponsorSms = document.querySelector('.btn-price-sponsor_sms')

let sms = [5.50, 6.88, 8.52, 10.17, 11, 12.93, 14.58, 16.22, 17.6, 19.25, 20.9, 22, 23.65, 25.3, 27.5, 28.6, 29.98, 31.35, 33, 55.01]
let psc = [5, 6.25, 7.75, 9.25, 10, 11.75, 13.25, 14.75, 16, 17.5, 19, 20, 21.5, 23, 25, 26, 27.25, 28.5, 30, 50]
let przelew = [5, 6.25, 7.75, 9.25, 10, 11.75, 13.25, 14.75, 16, 17.5, 19, 20, 21.5, 23, 25, 26, 27.25, 28.5, 30, 50]

sponsorInput.addEventListener('input', function() {

  let val = sponsorInputValue.textContent = this.value;
  let i = this.value;

  for(i; i <= val; i++) {

    if(val == 100) {
      sponsorInputValue.textContent = 'zawsze.';
      btnSponsorSms.textContent = `${sms[sms.length - 1]}PLN`
    } else {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `$$$`;
    }
    
  }
  
})

superInput.addEventListener('input', function() {
  let val = superInputValue.textContent = this.value;
  if(val == 100) {
    superInputValue.textContent = 'zawsze.';
  } else {
    superInputValue.textContent = `${this.value} dni.`
  }
})

vipInput.addEventListener('input', function() {
  let val = vipInputValue.textContent = this.value;
  if(val == 100) {
    vipInputValue.textContent = 'zawsze.';
  } else {
    vipInputValue.textContent = `${this.value} dni.`
  }
})

turboInput.addEventListener('input', function() {
  let val = turboInputValue.textContent = this.value;
  if(val == 100) {
    turboInputValue.textContent = 'zawsze.';
  } else {
    turboInputValue.textContent = `${this.value} dni.`
  }
})

cheatInput.addEventListener('input', function() {
  let val = cheatInputValue.textContent = this.value;
  if(val == 100) {
    cheatInputValue.textContent = 'zawsze.';
  } else {
    cheatInputValue.textContent = `${this.value} dni.`
  }
})
