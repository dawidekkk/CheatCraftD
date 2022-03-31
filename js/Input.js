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
let btnSponsor = document.querySelectorAll('.btn-price-sponsor')
let btnSuperSms = document.querySelector('.btn-price-super_sms')
let btnSuper = document.querySelectorAll('.btn-price-super')
let btnVipSms = document.querySelector('.btn-price-vip_sms')
let btnVip = document.querySelectorAll('.btn-price-vip')

let sms = [5.50, 6.88, 8.52, 10.17, 11, 12.93, 14.58, 16.22, 17.6, 19.25, 20.9, 22, 23.65, 25.3, 27.5, 28.6, 29.98, 31.35, 33, 55.01]
let psc = [5, 6.25, 7.75, 9.25, 10, 11.75, 13.25, 14.75, 16, 17.5, 19, 20, 21.5, 23, 25, 26, 27.25, 28.5, 30, 50]
let przelew = [5, 6.25, 7.75, 9.25, 10, 11.75, 13.25, 14.75, 16, 17.5, 19, 20, 21.5, 23, 25, 26, 27.25, 28.5, 30, 50]

sponsorInput.addEventListener('input', function() {

  let val = sponsorInputValue.textContent = this.value;
  let i = this.value;

  for(i; i <= val; i++) {

    if(val == 10) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[0]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[0]}PLN`
      })
    } else if(val == 15) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[1]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[1]}PLN`
      })
    } else if(val == 20) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[2]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[2]}PLN`
      })
    } else if(val == 25) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[3]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[3]}PLN`
      })
    } else if(val == 30) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[4]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[4]}PLN`
      })
    } else if(val == 35) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[5]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[5]}PLN`
      })
    } else if(val == 40) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[6]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[6]}PLN`
      })
    } else if(val == 45) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[7]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[7]}PLN`
      })
    } else if(val == 50) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[8]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[8]}PLN`
      })
    } else if(val == 55) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[9]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[9]}PLN`
      })
    } else if(val == 60) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[10]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[10]}PLN`
      })
    } else if(val == 65) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[11]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[11]}PLN`
      })
    } else if(val == 70) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[12]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[12]}PLN`
      })
    } else if(val == 75) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[13]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[13]}PLN`
      })
    } else if(val == 80) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[14]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[14]}PLN`
      })
    } else if(val == 85) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[15]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[15]}PLN`
      })
    } else if(val == 90) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[16]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[16]}PLN`
      })
    } else if(val == 95) {
      sponsorInputValue.textContent = `${i} dni.`
      btnSponsorSms.textContent = `${sms[17]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[17]}PLN`
      })
    } else if(val == 100) {
      sponsorInputValue.textContent = `${i} dni.`
      sponsorInputValue.textContent = 'zawsze.';
      btnSponsorSms.textContent = `${sms[sms.length - 1]}PLN`
      btnSponsor.forEach(e => {
        e.textContent = `${sms[sms.length - 1]}PLN`
      })
    } 
  }
})

superInput.addEventListener('input', function() {
  let val = superInputValue.textContent = this.value;
  let i = this.value;
  for(i; i <= val; i++) {

    if(val == 100) {
      superInputValue.textContent = 'zawsze.';
      btnSuperSms.textContent = `${sms[sms.length - 1]}PLN`
      btnSuper.forEach(e => {
        e.textContent = `${sms[sms.length - 1]}PLN`
      })
    } else {
      superInputValue.textContent = `${i} dni.`
      btnSuperSms.textContent = `$$$`;
      btnSuper.forEach(e => {
        e.textContent = `$$$`
      })
    } 
  }
})

vipInput.addEventListener('input', function() {
  let val = vipInputValue.textContent = this.value;
  let i = this.value;
  for(i; i <= val; i++) {

    if(val == 100) {
      vipInputValue.textContent = 'zawsze.';
      btnVipSms.textContent = `${sms[sms.length - 1]}PLN`
      btnVip.forEach(e => {
        e.textContent = `${sms[sms.length - 1]}PLN`
      })
    } else {
      vipInputValue.textContent = `${i} dni.`
      btnVipSms.textContent = `$$$`;
      btnVip.forEach(e => {
        e.textContent = `$$$`
      })
    } 
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
