'use strict'

// Inputs ID's and Inputs range ID"s
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

// Inputs buttons
let btnSponsorSms = document.querySelector('.btn-price-sponsor_sms')
let btnSponsorPsc = document.querySelector('.btn-price-sponsor_psc')
let btnSponsorPrzelew = document.querySelector('.btn-price-sponsor_przelew')
// let btnSuperSms = document.querySelector('.btn-price-super_sms')
// let btnSuper = document.querySelectorAll('.btn-price-super')
// let btnVipSms = document.querySelector('.btn-price-vip_sms')
// let btnVip = document.querySelectorAll('.btn-price-vip')

// Input price
let sms = [5.50, 6.88, 8.52, 10.17, 11, 12.93, 14.58, 16.22, 17.6, 19.25, 20.9, 22, 23.65, 25.3, 27.5, 28.6, 29.98, 31.35, 33, 55.01]
let psc = [5, 6.25, 7.75, 9.25, 10, 11.75, 13.25, 14.75, 16, 17.5, 19, 20, 21.5, 23, 25, 26, 27.25, 28.5, 30, 50]


// sponsorInput.oninput = function() {
//   sponsorInputValue.innerHTML = sms[this.value];
// }
// sponsorInput.oninput();

let price = document.querySelector('.price');

sponsorInput.addEventListener("change", function() {
  // let val = ();
  let val = sponsorInputValue.textContent = this.value;
  let i = this.value;
  console.log(val);

  const showText = () => {
    btnSponsorSms.textContent = 'SMS';
    btnSponsorPsc.textContent = 'PSC'
    btnSponsorPrzelew.textContent = 'PRZELEW'
  }

  // setTimeout(showText, 750, btnSponsorSms.textContent = `${sms[i]}PLN`)

  setTimeout(showText, 1000)

  btnSponsorSms.textContent = `${sms[i]}PLN`;
  btnSponsorPsc.textContent = psc[i];
  btnSponsorPrzelew.textContent = psc[i];

})


superInput.addEventListener('input', function() {
  let val = superInputValue.textContent = this.value;
  let i = this.value;
  // for(i; i <= val; i++) {

    // if(val == 100) {
    //   superInputValue.textContent = 'zawsze.';
    //   btnSuperSms.textContent = `${sms[sms.length - 1]}PLN`
    //   btnSuper.forEach(e => {
    //     e.textContent = `${sms[sms.length - 1]}PLN`
    //   })
    // } else {
    //   superInputValue.textContent = `${i} dni.`
    //   btnSuperSms.textContent = `$$$`;
    //   btnSuper.forEach(e => {
    //     e.textContent = `$$$`
    //   })
    // } 
  // }

  // price.textContent = sms[i];
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
