'use strict'

// Sponsor, SuperVip and Vip buyout days:
const buyoutDays = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 'zawsze'];
const buyoutDayss = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 'zawsze'];

// Sponsor, SuperVip, Vip, TurboDrop and CheatCase selectors:
const sponsorInput = document.getElementById('sponsor-input');
const sponsorInputValue = document.getElementById('sponsor-value');
const superInput = document.getElementById('super-input');
const superInputValue = document.getElementById('super-value');
const vipInput = document.getElementById('vip-input');
const vipInputValue = document.getElementById('vip-value');
const turboInput = document.getElementById('turbo-input');
const turboInputValue = document.getElementById('turbo-value');
const cheatInput = document.getElementById('cheat-input');
const cheatInputValue = document.getElementById('cheat-value');

// premium case SMS 2 - 1.09, SMS 3 - 1.65, SMS 4 - 2.20, SMS 5 - 2.75, 
// premium case PSC 2 - 1.00, PSC 3 - 1.50, PSC 4 - 2.00, PSC 5 - 2.50,

function sponsorValue() {
  const sms = [5.50, 6.88, 8.52, 10.17, 11.00, 12.93, 14.58, 16.22, 17.60, 19.25, 20.90, 22.00, 23.65, 25.30, 27.50, 28.60, 29.98, 31.35, 33.00, 55.01];
  const psc = [5.00, 6.25, 7.75, 9.25, 10.00, 11.75, 13.25, 14.75, 16.00, 17.50, 19.00, 20.00, 21.50, 23.00, 25.00, 26.00, 27.25, 28.50, 30.00, 50.00];
  const btnSms = document.querySelector('.btn-price-sponsor_sms');
  const btnPsc = document.querySelector('.btn-price-sponsor_psc');
  const btnPrzelew = document.querySelector('.btn-price-sponsor_przelew');
  const parag = document.querySelector('.sponsor-p')
  
  sponsorInputValue.textContent = `${buyoutDays[this.value]}`

  if(sponsorInputValue.textContent == 'zawsze' && buyoutDays[this.value.length - 1]) {
    parag.textContent = `Potrzebuje sponsora na: ${buyoutDays[this.value]}`
  } else {
    parag.textContent = `Potrzebuje sponsora na: ${buyoutDays[this.value]} dni`
    sponsorInputValue.textContent = `${buyoutDays[this.value]}`
  }

  btnSms.textContent = `${sms[this.value]} PLN`;
  btnPsc.textContent = `${psc[this.value]} PLN`;
  btnPrzelew.textContent = `${psc[this.value]} PLN`;

  setTimeout(() => {
    btnSms.textContent = `SMS`
    btnPsc.textContent = `PSC`
    btnPrzelew.textContent = `Przelew`
  }, 1000)
}

function superValue() {
  const sms = [4.40, 5.50, 6.61, 7.70, 8.79, 9.90, 11.00, 12.10, 13.20, 14.30, 15.40, 16.49, 17.60, 18.70, 19.80, 20.90, 22.00, 23.10, 24.19, 33.00];
  const psc = [4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 22.00, 30.00];
  const btnSms = document.querySelector('.btn-price-super_sms');
  const btnPsc = document.querySelector('.btn-price-super_psc');
  const btnPrzelew = document.querySelector('.btn-price-super_przelew');
  const parag = document.querySelector(".super-p");

  superInputValue.textContent = `${buyoutDays[this.value]}`
  console.log(buyoutDays[this.value]);

  if(superInputValue.textContent == 'zawsze' && buyoutDays[this.value.length - 1]) {
    parag.textContent = `Potrzebuje SuperVip'a na: ${buyoutDays[this.value]}`
  } else {
    parag.textContent = `Potrzebuje SuperVip'a na: ${buyoutDays[this.value]} dni`
    superInputValue.textContent = `${buyoutDays[this.value]}`
  }

  btnSms.textContent = `${sms[this.value]} PLN`;
  btnPsc.textContent = `${psc[this.value]} PLN`;
  btnPrzelew.textContent = `${psc[this.value]} PLN`;

  setTimeout(() => {
    btnSms.textContent = `SMS`
    btnPsc.textContent = `PSC`
    btnPrzelew.textContent = `Przelew`
  }, 1000)
}

function vipValue() {
  const sms = [3.30, 4.12, 4.94, 5.78, 6.61, 7.43, 8.25, 9.08, 9.90, 10.73, 11.00, 12.37, 13.20, 14.02, 14.85, 15.67, 16.49, 17.33, 18.15, 22.00];
  const psc = [3.00, 3.75, 4.50, 5.25, 6.00, 6.75, 7.50, 8.25, 9.00, 9.75, 10.00, 11.25, 12.00, 12.75, 13.50, 14.25, 15.00, 15.75, 16.60, 20.00];
  const btnSms = document.querySelector('.btn-price-vip_sms');
  const btnPsc = document.querySelector('.btn-price-vip_psc');
  const btnPrzelew = document.querySelector('.btn-price-vip_przelew');
  const parag = document.querySelector(".vip-p");

  vipInputValue.textContent = `${buyoutDays[this.value]}`
  console.log(buyoutDays[this.value]);

  if(vipInputValue.textContent == 'zawsze' && buyoutDays[this.value.length - 1]) {
    parag.textContent = `Potrzebuje Vip'a na: ${buyoutDays[this.value]}`
  } else {
    parag.textContent = `Potrzebuje Vip'a na: ${buyoutDays[this.value]} dni`
    vipInputValue.textContent = `${buyoutDays[this.value]}`
  }

  btnSms.textContent = `${sms[this.value]} PLN`;
  btnPsc.textContent = `${psc[this.value]} PLN`;
  btnPrzelew.textContent = `${psc[this.value]} PLN`;

  setTimeout(() => {
    btnSms.textContent = `SMS`
    btnPsc.textContent = `PSC`
    btnPrzelew.textContent = `Przelew`
  }, 1000)
}

sponsorInput.addEventListener("change", sponsorValue);
superInput.addEventListener("change", superValue)
vipInput.addEventListener("change", vipValue)
