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

sponsorInput.addEventListener('input', function() {
  let val = sponsorInputValue.textContent = this.value;
  if(val == 100) {
    sponsorInputValue.textContent = 'zawsze.';
  } else {
    sponsorInputValue.textContent = `${this.value} dni.`
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
