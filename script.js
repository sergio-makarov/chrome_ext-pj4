//all const elements
const inputEl = document.getElementById('input-el');
const saveInputBtn = document.getElementById('save_input-btn');
const clearInputsBtn = document.getElementById('clear_inputs-btn');
const ulEl = document.getElementById('ul-el');
const ulContainer = document.querySelector('.web_link-list');


//all let elements
let urlArray;



function init() {
  urlArray = JSON.parse(localStorage.getItem('urlLinks')) || [];
  displayWebLink(urlArray);
}

inputEl.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addLinkToArray(urlArray);
  }
})



//All events..
saveInputBtn.addEventListener('click', () => { addLinkToArray(urlArray) });
clearInputsBtn.addEventListener('click', () => { clearArray(urlArray) });




function addLinkToArray(nameArray) {
  nameArray.push(inputEl.value);
  localStorage.setItem('urlLinks', JSON.stringify(nameArray));
  displayWebLink(nameArray);
  inputEl.value = '';
  ulContainer.scrollTop = ulContainer.scrollHeight;
}


function displayWebLink(nameArray) {
  ulEl.innerHTML = '';
  nameArray.forEach((urlLink) => {
    ulEl.innerHTML += `<li><a href="${urlLink}">${urlLink}</a></li>`;
  });
}

function clearArray(nameArray) {
  nameArray = [];
  localStorage.setItem('urlLinks', JSON.stringify(nameArray));
  init();
}



// load the logic....
document.addEventListener('DOMContentLoaded',()=>{init()});