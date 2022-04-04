'use strict'

// Inputs ID's and Inputs range ID"s


// let superInput = document.getElementById('super-input')
// let superInputValue = document.getElementById('super-value')
// let vipInput = document.getElementById('vip-input')
// let vipInputValue = document.getElementById('vip-value')
// let turboInput = document.getElementById('turbo-input')
// let turboInputValue = document.getElementById('turbo-value')
// let cheatInput = document.getElementById('cheat-input')
// let cheatInputValue = document.getElementById('cheat-value')

// // Inputs buttons

// let btnSuperSms = document.querySelector('.btn-price-super_sms')
// let btnSuper = document.querySelectorAll('.btn-price-super')
// let btnVipSms = document.querySelector('.btn-price-vip_sms')
// let btnVip = document.querySelectorAll('.btn-price-vip')
// premium case SMS 2 - 1.09, SMS 3 - 1.65, SMS 4 - 2.20, SMS 5 - 2.75, 
// premium case PSC 2 - 1.00, PSC 3 - 1.50, PSC 4 - 2.00, PSC 5 - 2.50,




// const superSms = [4.40, 5.50, 6.61, 7.70, 8.79, 9.90, 11.00, 12.10, 13.20, 14.30, 15.40, 16.49, 17.60, 18.70, 19.80, 20.90, 22.00, 23.10, 24.19, 33.00]
// const superPsc = [4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 22.00, 30.00]
// const vipSms = [3.30, 4.12, 4.94, 5.78, 6.61, 7.43, 8.25, 9.08, 9.90, 10.73, 11.00, 12.37, 13.20, 14.02, 14.85, 15.67, 16.49, 17.33, 18.15, 22.00]
// const vipPsc = [3.00, 3.75, 4.50, 5.25, 6.00, 6.75, 7.50, 8.25, 9.00, 9.75, 10.00, 11.25, 12.00, 12.75, 13.50, 14.25, 15.00, 15.75, 16.60, 20.00]

// alert(vipSms.length)
// alert(vipPsc.length)

// sponsorInput.oninput = function() {
//   sponsorInputValue.innerHTML = sms[this.value];
// }
// sponsorInput.oninput();
const sponsorSms = [5.50, 6.88, 8.52, 10.17, 11.00, 12.93, 14.58, 16.22, 17.60, 19.25, 20.90, 22.00, 23.65, 25.30, 27.50, 28.60, 29.98, 31.35, 33.00, 55.01]
const sponsorPsc = [5.00, 6.25, 7.75, 9.25, 10.00, 11.75, 13.25, 14.75, 16.00, 17.50, 19.00, 20.00, 21.50, 23.00, 25.00, 26.00, 27.25, 28.50, 30.00, 50.00]
const sponsorDays = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 'zawsze']
let sponsorInput = document.getElementById('sponsor-input')
let sponsorInputValue = document.getElementById('sponsor-value')
let btnSponsorSms = document.querySelector('.btn-price-sponsor_sms')
let btnSponsorPsc = document.querySelector('.btn-price-sponsor_psc')
let btnSponsorPrzelew = document.querySelector('.btn-price-sponsor_przelew')

function changeInputValue(value) {

  sponsorInputValue.textContent = `${sponsorDays[this.value]} dni`
  if(sponsorDays[this.value.length - 1]) {
    sponsorInputValue.textContent = `${sponsorDays[this.value]}`
  }

  btnSponsorSms.textContent = `${sponsorSms[this.value]} PLN`;
  btnSponsorPsc.textContent = `${sponsorPsc[this.value]} PLN`;
  btnSponsorPrzelew.textContent = `${sponsorPsc[this.value]} PLN`;

  setTimeout(() => {
    btnSponsorSms.textContent = `SMS`
    btnSponsorPsc.textContent = `PSC`
    btnSponsorPrzelew.textContent = `Przelew`
  }, 1000)

}

sponsorInput.addEventListener("change", changeInputValue);

// sponsorInput.addEventListener("change", function() {
//   let val = this.value;
  
//   if(val === 1) {
//     // let val = sponsorInputValue.textContent = 10;
//     console.log('elo');
//   }
//   console.log(this.value);
  

//   // const showText = () => {
//   //   btnSponsorSms.textContent = 'SMS';
//   //   btnSponsorPsc.textContent = 'PSC'
//   //   btnSponsorPrzelew.textContent = 'PRZELEW'
//   // }

//   // setTimeout(showText, 750, btnSponsorSms.textContent = `${sms[i]}PLN`)

//   // setTimeout(showText, 1000)

//   // btnSponsorSms.textContent = `${sms[i]}PLN`;
//   // btnSponsorPsc.textContent = psc[i];
//   // btnSponsorPrzelew.textContent = psc[i];

// })


// superInput.addEventListener('input', function() {
//   let val = superInputValue.textContent = this.value;
//   let i = this.value;
//   // for(i; i <= val; i++) {

//     // if(val == 100) {
//     //   superInputValue.textContent = 'zawsze.';
//     //   btnSuperSms.textContent = `${sms[sms.length - 1]}PLN`
//     //   btnSuper.forEach(e => {
//     //     e.textContent = `${sms[sms.length - 1]}PLN`
//     //   })
//     // } else {
//     //   superInputValue.textContent = `${i} dni.`
//     //   btnSuperSms.textContent = `$$$`;
//     //   btnSuper.forEach(e => {
//     //     e.textContent = `$$$`
//     //   })
//     // } 
//   // }

//   // price.textContent = sms[i];
// })

// vipInput.addEventListener('input', function() {
//   let val = vipInputValue.textContent = this.value;
//   let i = this.value;
//   for(i; i <= val; i++) {

//     if(val == 100) {
//       vipInputValue.textContent = 'zawsze.';
//       btnVipSms.textContent = `${sms[sms.length - 1]}PLN`
//       btnVip.forEach(e => {
//         e.textContent = `${sms[sms.length - 1]}PLN`
//       })
//     } else {
//       vipInputValue.textContent = `${i} dni.`
//       btnVipSms.textContent = `$$$`;
//       btnVip.forEach(e => {
//         e.textContent = `$$$`
//       })
//     } 
//   }
// })

// turboInput.addEventListener('input', function() {
//   let val = turboInputValue.textContent = this.value;
//   if(val == 100) {
//     turboInputValue.textContent = 'zawsze.';
//   } else {
//     turboInputValue.textContent = `${this.value} dni.`
//   }
// })

// cheatInput.addEventListener('input', function() {
//   let val = cheatInputValue.textContent = this.value;
//   if(val == 100) {
//     cheatInputValue.textContent = 'zawsze.';
//   } else {
//     cheatInputValue.textContent = `${this.value} dni.`
//   }
// })
