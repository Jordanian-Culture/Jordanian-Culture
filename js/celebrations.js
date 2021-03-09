'use strict';


function NewCelebrationSection(title, text, path) {
  this.title = title;
  this.text = text;
  this.path = path;
};
 
NewCelebrationSection.all = [];
 
function runderCelebration() {
 
 
  const parentElement = document.getElementById('newCelebrationContent');
 
  for (let i = 0; i < NewCelebrationSection.all.length; i++) {
    const h4Element = document.createElement('h4');
    parentElement.appendChild(h4Element);
    h4Element.textContent = `${NewCelebrationSection.all[i].title}`;
    console.log(NewCelebrationSection.all[i].title);
 
    const pElement = document.createElement('p');
    parentElement.appendChild(pElement);
    pElement.textContent = `${NewCelebrationSection.all[i].text}`;
    console.log(NewCelebrationSection.all[i].text);
 
    const ImgElement = document.createElement('img');
    parentElement.appendChild(ImgElement);
    ImgElement.src = `${NewCelebrationSection.all[i].path}`;
    console.log(NewCelebrationSection.all[i].path);
  }
 
}



function getData() {
  const dataCelebration = localStorage.getItem('nNewCelebrationSection');
  if (dataCelebration) {
    const objDataCelebration = JSON.parse(dataCelebration);
    NewCelebrationSection.all = objDataCelebration;
    runderCelebration();
  } 
}

getData();