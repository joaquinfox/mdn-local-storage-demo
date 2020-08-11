var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');

let bgcolorForm = document.querySelector('#bgcolor');
let fontForm = document.querySelector('#font');

if (!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);

  setStyles();
}

function setStyles() {
  let currentColor = localStorage.getItem('bgcolor');
  let currentFont = localStorage.getItem('font');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
}

bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
