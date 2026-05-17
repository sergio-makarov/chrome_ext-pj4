//all const elements
const inputEl = document.getElementById('input-el');
const saveInputBtn = document.getElementById('save_input-btn');
const clearInputsBtn = document.getElementById('clear_inputs-btn');
const ulEl = document.getElementById('ul-el');


//all let elements
let urlArray = JSON.parse(localStorage.getItem('urlLinks')) || [];
displayWebLink();

inputEl.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addLinkToArray();
  }
})



//All events..
saveInputBtn.addEventListener('click', () => {addLinkToArray()});
clearInputsBtn.addEventListener('click',()=>{clearArray()});




function addLinkToArray() {
  urlArray.push(inputEl.value);
  localStorage.setItem('urlLinks',JSON.stringify(urlArray));
  displayWebLink();
  inputEl.value = '';
}


function displayWebLink(){
  ulEl.innerHTML = '';
  urlArray.forEach((urlLink)=>{
    ulEl.innerHTML +=`<li><a href="${urlLink}">${urlLink}</a></li>`;
  });
}

function clearArray(){
  urlArray = [];
  localStorage.setItem('urlLinks',JSON.stringify(urlArray));
  displayWebLink();
}