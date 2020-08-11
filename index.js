// Variable declarations.
var htmlElem = document.querySelector('html');
var pElem = document.querySelectorAll('p');

let bgcolorForm = document.querySelector('#bgcolor');
let fontForm = document.querySelector('#font');

/* Check if localStorage is populated. If not populate it. If it is, then apply the styles.*/
if (!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

/* Cache the input values to Web Storage using setItem, then call setStyles()*/
function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  sessionStorage.setItem('font', document.getElementById('font').value);
  //   localStorage.setItem('font', document.getElementById('font').value);

  setStyles();
}

/*Retrieve the captured values using getItem then apply the styleing to html elements. */
function setStyles() {
  let currentColor = localStorage.getItem('bgcolor');
  let currentFont = sessionStorage.getItem('font');
  //   let currentFont = localStorage.getItem('font');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.forEach((p) => {
    p.style.fontFamily = currentFont;
  });
}

/*Apply a listener to the input form so that any change will invoke a change  */
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
