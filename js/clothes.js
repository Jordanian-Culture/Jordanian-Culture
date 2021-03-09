 'use strict';


let image = document.getElementById('image');

let images = [
  '../assets/indeximg/man4.jpg',
  '../assets/indeximg/man13.jpg',
  '../assets/indeximg/man14.jpg',
  '../assets/indeximg/man1.jpg',
  '../assets/indeximg/man4.jpg',

];

setInterval(function () {


  let random = Math.floor(Math.random() * 5);
  image.src = images[random];
}, 1500

) ;

//------------------------

let image2 = document.getElementById('manhed');
let images2 = [
  '../assets/indeximg/man9.jpg',
  '../assets/indeximg/man10.jpg',
  '../assets/indeximg/man12.jpg',
  '../assets/indeximg/man8.jpg'

];

setInterval(function () {


  let random = Math.floor(Math.random() * 4);
  image2.src = images2[random];
}, 1500

) ;



let image3 = document.getElementById('women');
let images3 = [
  '../assets/indeximg/women12.jpg',
  '../assets/indeximg/women1.jpg',
  '../assets/indeximg/women13.jpg',
  '../assets/indeximg/women8.jpg',
  
  

];

setInterval(function () {


  let random = Math.floor(Math.random() * 4);
  image3.src = images3[random];
}, 1500

) ;



let image4 = document.getElementById('women2');
let images4 = [
  '../assets/indeximg/women2.jpg',
  '../assets/indeximg/women10.jpg',
  '../assets/indeximg/clo2.jpg',
  '../assets/indeximg/women2.jpg',

];

setInterval(function () {


  let random = Math.floor(Math.random() * 4);
  image4.src = images4[random];
}, 1500

) ;


// Form Section

function NewClothesSection(title, text, path) {
  this.title = title;
  this.text = text;
  this.path = path;
};
 

NewClothesSection.all = [];



function runderClothes() {
   
   
  let parentElement = document.getElementById('newClothesContent');
 
  for (let i = 0; i < NewClothesSection.all.length; i++) {
    const h4Element = document.createElement('h4');
    parentElement.appendChild(h4Element);
    h4Element.textContent = `${NewClothesSection.all[i].title}`;
    console.log(NewClothesSection.all[i].title);
 
    const pElement = document.createElement('p');
    parentElement.appendChild(pElement);
    pElement.textContent = `${NewClothesSection.all[i].text}`;
    console.log(NewClothesSection.all[i].text);
 
    const ImgElement = document.createElement('img');
    parentElement.appendChild(ImgElement);
    ImgElement.setAttribute('style', 'width: 280px; height:475px;');
    ImgElement.src = `${NewClothesSection.all[i].path}`;
    console.log(NewClothesSection.all[i].path);
  }
 
}


function getData() {
  const dataClothes = localStorage.getItem('nNewClothesSection');


  if (dataClothes) {
    const objDataClothes = JSON.parse(dataClothes);
    NewClothesSection.all = objDataClothes;
    runderClothes();
  }
}


getData();