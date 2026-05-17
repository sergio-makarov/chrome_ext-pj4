//all const elements
const inputEl = document.getElementById('input-el');
const saveInputBtn = document.getElementById('save_input-btn');
const ulEl = document.getElementById('ul-el');


//all let elements
let urlArray = [];


inputEl.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addLinkToArray();
  }
})
saveInputBtn.addEventListener('click', () => {
  addLinkToArray();
});




function addLinkToArray() {
  urlArray.push(inputEl.value);
  displayWebLink();
  inputEl.value = '';
}


function displayWebLink(){
  ulEl.innerHTML = '';
  urlArray.forEach((urlLink)=>{
    ulEl.innerHTML +=`<li><a href="${urlLink}">${urlLink}</a></li>`;
  });
}