'use strict'

// Sponsor, SuperVip and Vip buyout days:
const buyoutDays = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 'zawsze'];
const buyoutDaysSliders = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440, 445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515, 520, 525, 530, 535, 540, 545, 550, 555, 560, 565, 570, 575, 580, 585, 590, 595, 600, 605, 610, 615, 620, 625, 630, 635, 640, 645, 650, 655, 660, 665, 670, 675, 680, 685, 690, 695, 700, 705, 710, 715, 720, 725, 730, 735, 740, 745, 750, 755, 760, 765, 770, 775, 780, 785, 790, 795, 800, 805, 810, 815, 820, 825, 830, 835, 840, 845, 850, 855, 860, 865, 870, 875, 880, 885, 890, 895, 900, 905, 910, 915, 920, 925, 930, 935, 940, 945, 950, 955, 960]

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

const btnSms = document.querySelector('.btn-price-sponsor_sms');
const btnPsc = document.querySelector('.btn-price-sponsor_psc');  
const btnPrzelew = document.querySelector('.btn-price-sponsor_przelew');
const sms = [5.50, 6.88, 8.52, 10.17, 11.00, 12.93, 14.58, 16.22, 17.60, 19.25, 20.90, 22.00, 23.65, 25.30, 27.50, 28.60, 29.98, 31.35, 33.00, 55.01];

function sponsorValue() {
  const sms = [5.50, 6.88, 8.52, 10.17, 11.00, 12.93, 14.58, 16.22, 17.60, 19.25, 20.90, 22.00, 23.65, 25.30, 27.50, 28.60, 29.98, 31.35, 33.00, 55.01];
  const psc = [5.00, 6.25, 7.75, 9.25, 10.00, 11.75, 13.25, 14.75, 16.00, 17.50, 19.00, 20.00, 21.50, 23.00, 25.00, 26.00, 27.25, 28.50, 30.00, 50.00];
  const btnSms = document.querySelector('.btn-price-sponsor_sms');
  const btnPsc = document.querySelector('.btn-price-sponsor_psc');
  const btnPrzelew = document.querySelector('.btn-price-sponsor_przelew');
  const parag = document.querySelector('.sponsor-p')

  const [initialSms] = sms;
  const [initialPsc] = psc;

  if(this === undefined) {
    // sponsorInputValue.textContent
    btnSms.textContent = `${initialSms}zł`;
    btnPsc.textContent = `${initialPsc}zł`;
    btnPrzelew.textContent = `${initialPsc}zł`;
  } else {
    btnSms.textContent = `${sms[this.value]}zł`;
    btnSms.style.fontSize = `14px`
    btnPsc.textContent = `${psc[this.value]}zł`;
    btnPsc.style.fontSize = `14px`
    btnPrzelew.textContent = `${psc[this.value]}zł`;
    btnPrzelew.style.fontSize = `14px`
    sponsorInputValue.textContent = `${buyoutDays[this.value]}`;
  }

  if(sponsorInputValue.textContent == 'zawsze' && buyoutDays[this.value.length - 1]) {
    parag.textContent = `Potrzebuje sponsora na: ${buyoutDays[this.value]}`
  } else {
    parag.textContent = `Potrzebuje sponsora na: ${buyoutDays[this.value]} dni`
    sponsorInputValue.textContent = `${buyoutDays[this.value]}`
  }
}



function superValue() {
  const sms = [4.40, 5.50, 6.61, 7.70, 8.79, 9.90, 11.00, 12.10, 13.20, 14.30, 15.40, 16.49, 17.60, 18.70, 19.80, 20.90, 22.00, 23.10, 24.19, 33.00];
  const psc = [4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 22.00, 30.00];
  const btnSms = document.querySelector('.btn-price-super_sms');
  const btnPsc = document.querySelector('.btn-price-super_psc');
  const btnPrzelew = document.querySelector('.btn-price-super_przelew');
  const parag = document.querySelector(".super-p");

  superInputValue.textContent = `${buyoutDays[this.value]}`

  if(superInputValue.textContent == 'zawsze' && buyoutDays[this.value.length - 1]) {
    parag.textContent = `Potrzebuje SuperVip'a na: ${buyoutDays[this.value]}`
  } else {
    parag.textContent = `Potrzebuje SuperVip'a na: ${buyoutDays[this.value]} dni`
    superInputValue.textContent = `${buyoutDays[this.value]}`
  }

  btnSms.textContent = `${sms[this.value]}zł`;
  btnSms.style.fontSize = `14px`
  btnPsc.textContent = `${psc[this.value]}zł`;
  btnPsc.style.fontSize = `14px`
  btnPrzelew.textContent = `${psc[this.value]}zł`;
  btnPrzelew.style.fontSize = `14px`
}

function vipValue() {
  const sms = [3.30, 4.12, 4.94, 5.78, 6.61, 7.43, 8.25, 9.08, 9.90, 10.73, 11.00, 12.37, 13.20, 14.02, 14.85, 15.67, 16.49, 17.33, 18.15, 22.00];
  const psc = [3.00, 3.75, 4.50, 5.25, 6.00, 6.75, 7.50, 8.25, 9.00, 9.75, 10.00, 11.25, 12.00, 12.75, 13.50, 14.25, 15.00, 15.75, 16.60, 20.00];
  const btnSms = document.querySelector('.btn-price-vip_sms');
  const btnPsc = document.querySelector('.btn-price-vip_psc');
  const btnPrzelew = document.querySelector('.btn-price-vip_przelew');
  const parag = document.querySelector(".vip-p");

  vipInputValue.textContent = `${buyoutDays[this.value]}`

  if(vipInputValue.textContent == 'zawsze' && buyoutDays[this.value.length - 1]) {
    parag.textContent = `Potrzebuje Vip'a na: ${buyoutDays[this.value]}`
  } else {
    parag.textContent = `Potrzebuje Vip'a na: ${buyoutDays[this.value]} dni`
    vipInputValue.textContent = `${buyoutDays[this.value]}`
  }

  btnSms.textContent = `${sms[this.value]}zł`;
  btnSms.style.fontSize = `14px`
  btnPsc.textContent = `${psc[this.value]}zł`;
  btnPsc.style.fontSize = `14px`
  btnPrzelew.textContent = `${psc[this.value]}zł`;
  btnPrzelew.style.fontSize = `14px`
}

function turboValue() {
  const sms = [0.55, 1.08, 1.57, 2.03, 2.47, 2.89, 3.28, 3.63, 3.96, 4.27, 4.54, 4.78, 5.18, 5.58, 5.99, 6.38, 6.78, 7.18, 7.58, 7.97, 8.38, 8.78, 9.18, 9.57, 9.96, 10.37, 10.77, 11.17, 11.56, 11.97, 12.36, 12.76, 13.16, 13.57, 13.96, 14.35, 14.75, 15.15, 15.56, 15.95, 16.35, 16.75, 17.15, 17.54, 17.95, 18.35, 18.75, 19.14, 19.53, 19.94, 20.34, 20.74, 21.13, 21.54, 21.93, 22.32, 22.73, 23.14, 23.53, 23.92, 24.32, 24.72, 25.13, 25.52, 25.92, 26.32, 26.72, 27.11, 27.52, 27.92, 28.31, 28.71, 29.10, 29.51, 29.91, 30.31, 30.70, 31.11, 31.50, 31.89, 32.30, 32.71, 33.10, 33.49, 33.89, 34.29, 34.70, 35.09, 35.49, 35.89, 36.28, 36.69, 37.08, 37.49, 37.88, 38.28, 38.67, 39.08, 39.48, 39.88, 40.27, 40.68, 41.07, 41.48, 41.87, 42.28, 42.67, 43.06, 43.46, 43.87, 44.27, 44.66, 45.05, 45.46, 45.85, 46.26, 46.65, 47.06, 47.45, 47.85, 48.24, 48.66, 49.05, 49.45, 49.84, 50.25, 50.64, 51.05, 51.44, 51.84, 52.24, 52.63, 53.03, 53.44, 53.84, 54.23, 54.62, 55.03, 55.42, 55.83, 56.22, 56.63, 57.02, 57.42, 57.81, 58.23, 58.62, 59.02, 59.41, 59.81, 60.21, 60.61, 61.01, 61.41, 61.81, 62.20, 62.61, 63.01, 63.41, 63.80, 64.19, 64.60, 64.99, 65.40, 65.79, 66.20, 66.59, 66.99, 67.39, 67.80, 68.19, 68.58, 68.98, 69.38, 69.78, 70.18, 70.58, 70.98, 71.38, 71.77, 72.18, 72.58, 72.98, 73.37, 73.76, 74.17, 74.57, 74.97, 75.36, 75.77, 76.16, 76.56]
  const psc = [0.50, 0.98, 1.43, 1.85, 2.25, 2.63, 2.98, 3.30, 3.60, 3.88, 4.13, 4.35, 4.71, 5.08, 5.44, 5.80, 6.16, 6.53, 6.89, 7.25, 7.61, 7.98, 8.34, 8.70, 9.06, 9.43, 9.79, 10.15, 10.51, 10.88, 11.24, 11.60, 11.96, 12.33, 12.69, 13.05, 13.41, 13.78, 14.14, 14.50, 14.86, 15.23, 15.56, 15.95, 16.31, 16.68, 17.04, 17.40, 17.76, 18.13, 18.49, 18.85, 19.21, 19.58, 19.94, 20.30, 20.66, 21.03, 21.39, 21.75, 22.11, 22.48, 22.84, 23.20, 23.56, 23.93, 24.29, 24.65, 25.01, 25.38, 25.74, 26.10, 26.46, 26.83, 27.19, 27.55, 27.91, 28.28, 28.64, 29.00, 29.36, 29.73, 30.09, 30.45, 30.81, 31.18, 31.54, 31.90, 32.26, 32.63, 32.99, 33.35, 33.71, 34.08, 34.44, 34.80, 35.16, 35.53, 35.89, 36.25, 36.61, 36.98, 37.34, 37.70, 38.06, 38.43, 38.79, 39.15, 39.51, 39.88, 40.24, 40.60, 40.96, 41.33, 41.69, 42.05, 42.41, 42.78, 43.14, 43.50, 43.86, 44.23, 44.59, 44.95, 45.31, 45.68, 46.04, 46.40, 46.76, 47.13, 47.49, 47.85, 48.21, 48.58, 48.94, 49.30, 49.66, 50.03, 50.39, 50.75, 51.11, 51.48, 51.84, 52.20, 52.56, 52.93, 53.29, 53.65, 54.01, 54.38, 54.74, 55.10, 55.46, 55.83, 56.19, 56.55, 56.91, 57.28, 57.64, 58.00, 58.36, 58.73, 59.09, 59.45, 59.81, 60.18, 60.54, 60.90, 61.26, 61.63, 61.99, 62.35, 62.71, 63.08, 63.44, 63.80, 64.16, 64.53, 64.89, 65.25, 65.61, 65.98, 66.34, 66.70, 67.06, 67.43, 67.79, 68.15, 68.51, 68.88, 69.24, 69.60]
  const btnSms = document.querySelector('.btn-price-turbo_sms');
  const btnPsc = document.querySelector('.btn-price-turbo_psc');
  const btnPrzelew = document.querySelector('.btn-price-turbo_przelew');
  const parag = document.querySelector(".vip-p");
  const info = document.querySelector('.info-turbo')

  turboInputValue.textContent = `${buyoutDaysSliders[this.value]} minut.`
  info.style.fontSize = `16px`

  btnSms.textContent = `${sms[this.value]}zł`
  btnPsc.textContent = `${psc[this.value]}zł`
  btnPrzelew.textContent = `${psc[this.value]}zł`
}

function cheatValue() {
  const btnSms = document.querySelector('.btn-price-cheat_sms');
  const btnPsc = document.querySelector('.btn-price-cheat_psc');
  const btnPrzelew = document.querySelector('.btn-price-cheat_przelew');
  const parag = document.querySelector(".vip-p");

  cheatInputValue.textContent = `${this.value} CheatCasów.`
}

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

// IIFE for immedietely showing [...]Input.value
(() => {
  sponsorInput.value = 0;
  sponsorInputValue.textContent = buyoutDays[sponsorInput.value];
  superInputValue.textContent = buyoutDays[superInput.value];
  vipInputValue.textContent = buyoutDays[vipInput.value];
  turboInputValue.textContent = `${buyoutDaysSliders[turboInput.value]} minut`;
})();

sponsorInput.addEventListener("change", sponsorValue);
sponsorInput.addEventListener("input", sponsorValue)
superInput.addEventListener("change", superValue)
superInput.addEventListener("input", superValue)
vipInput.addEventListener("change", vipValue)
vipInput.addEventListener("input", vipValue)
turboInput.addEventListener("input", turboValue)
turboInput.addEventListener("change", turboValue)
cheatInput.addEventListener("input", cheatValue)
cheatInput.addEventListener("change", cheatValue)

window.onload = function(e) {
  e.preventDefault();
  sponsorValue();
  console.log(sponsorInput);
  console.log('femsjfseik');
}

// location.reload(true);