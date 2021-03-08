'use strict';

function NewSection(title, text, path) {
  this.title = title;
  this.text = text;
  this.path = path;

};

NewSection.all = [];

function runder() {


  const parentElement = document.getElementById('newcontent');

  for (let i = 0; i < NewSection.all.length; i++) {
    const h4Element = document.createElement('h2');
    parentElement.appendChild(h4Element);
    h4Element.textContent = `${NewSection.all[i].title}`;
    console.log(NewSection.all[i].text);

    const pElement = document.createElement('p');
    parentElement.appendChild(pElement);
    pElement.textContent = `${NewSection.all[i].text}`;
    console.log(NewSection.all[i].title);


    const ImgElement = document.createElement('img');
    parentElement.appendChild(ImgElement);
    ImgElement.setAttribute('style', 'width: 280px; height:475px;');
    ImgElement.src = `${NewSection.all[i].path}`;
    console.log(NewSection.all[i].path);

  }

}


const formElement = document.getElementById('Adding-Form');

formElement.addEventListener('submit', function (event) {

  event.preventDefault();
  console.log()



  const nNewSectionTitle = event.target.title.value;
  const nNewSectionsubject = event.target.subject.value;
  const nNewSectionImg = event.target.img.value;


  const nNewSectionclothes = new NewSection(nNewSectionTitle, nNewSectionsubject,nNewSectionImg);

  NewSection.all.push(nNewSectionclothes);

  console.log(NewSection.all);

  formElement.reset();

  localStorage.setItem('nNewSectionclothes', JSON.stringify(NewSection.all));

  document.getElementById('newcontent').innerHTML = "";

  getData();

});

function getData() {
  const data = localStorage.getItem('nNewSectionclothes');

  if (data) {
    const objData = JSON.parse(data);
    NewSection.all = objData;
    runder();
  }
}

getData();

// <------------------>


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
