'use strict';


// Food


function NewFoodSection(title, text, path) {
    this.title = title;
    this.text = text;
    this.path = path;
  };
   
  NewFoodSection.all = [];
   
  function runderFood() {
   
   
    const parentElement = document.getElementById('newFoodContent');
   
    for (let i = 0; i < NewFoodSection.all.length; i++) {
      const h4Element = document.createElement('h4');
      parentElement.appendChild(h4Element);
      h4Element.textContent = `${NewFoodSection.all[i].title}`;
      console.log(NewFoodSection.all[i].title);
   
      const pElement = document.createElement('p');
      parentElement.appendChild(pElement);
      pElement.textContent = `${NewFoodSection.all[i].text}`;
      console.log(NewFoodSection.all[i].text);
   
      const ImgElement = document.createElement('img');
      parentElement.appendChild(ImgElement);
      ImgElement.setAttribute('style', 'width: 280px; height:475px;');
      ImgElement.src = `${NewFoodSection.all[i].path}`;
      console.log(NewFoodSection.all[i].path);
    }
   
  }

  const formElementFood = document.getElementById('AddFoodForm');
   
  formElementFood.addEventListener('submit', function (event) {
   
    event.preventDefault();
    console.log()
   
   
   
    const nNewFoodSectionTitle = event.target.title.value;
    const nNewFoodSectionText = event.target.subject.value;
    const nNewFoodSectionImg = event.target.img.value;
   
    const nNewFoodSection = new NewFoodSection(nNewFoodSectionTitle, nNewFoodSectionText,nNewFoodSectionImg);
   
    NewFoodSection.all.push(nNewFoodSection);
   
    console.log(NewFoodSection.all);
   
    formElementFood.reset();
   
    localStorage.setItem('nNewFoodSection', JSON.stringify(NewFoodSection.all));
   
    document.getElementById('newFoodContent').innerHTML = "";
   
    getData();
   
  });



// Clothes

function NewClothesSection(title, text, path) {
    this.title = title;
    this.text = text;
    this.path = path;
  };
   
  NewClothesSection.all = [];
   
  function runderClothes() {
   
   
    const parentElement = document.getElementById('newClothesContent');
   
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

  const formElementClothes = document.getElementById('AddClothesForm');
   
  formElementClothes.addEventListener('submit', function (event) {
   
    event.preventDefault();
    console.log()
   
   
   
    const nNewClothesSectionTitle = event.target.title.value;
    const nNewClothesSectionText = event.target.subject.value;
    const nNewClothesSectionImg = event.target.img.value;
   
    const nNewClothesSection = new NewClothesSection(nNewClothesSectionTitle, nNewClothesSectionText,nNewClothesSectionImg);
   
    NewClothesSection.all.push(nNewClothesSection);
   
    console.log(NewClothesSection.all);
   
    formElementClothes.reset();
   
    localStorage.setItem('nNewClothesSection', JSON.stringify(NewClothesSection.all));
    
   
    getData();
   
   
  });

// PLace

function NewPLaceSection(title, text, path) {
    this.title = title;
    this.text = text;
    this.path = path;
  };
   
  NewPLaceSection.all = [];
   
  function runderPLace() {
   
   
    const parentElement = document.getElementById('newPLaceContent');
   
    for (let i = 0; i < NewPLaceSection.all.length; i++) {
      const h4Element = document.createElement('h4');
      parentElement.appendChild(h4Element);
      h4Element.textContent = `${NewPLaceSection.all[i].title}`;
      console.log(NewPLaceSection.all[i].title);
   
      const pElement = document.createElement('p');
      parentElement.appendChild(pElement);
      pElement.textContent = `${NewPLaceSection.all[i].text}`;
      console.log(NewPLaceSection.all[i].text);
   
      const ImgElement = document.createElement('img');
      parentElement.appendChild(ImgElement);
      ImgElement.setAttribute('style', 'width: 280px; height:475px;');
      ImgElement.src = `${NewPLaceSection.all[i].path}`;
      console.log(NewPLaceSection.all[i].path);
    }
   
  }

  const formElementPLace = document.getElementById('AddPlaceForm');
   
  formElementPLace.addEventListener('submit', function (event) {
   
    event.preventDefault();
    console.log()
   
   
   
    const nNewPLaceSectionTitle = event.target.title.value;
    const nNewPLaceSectionText = event.target.subject.value;
    const nNewPLaceSectionImg = event.target.img.value;
   
    const nNewPLaceSection = new NewFoodSection(nNewPLaceSectionTitle, nNewPLaceSectionText,nNewPLaceSectionImg);
   
    NewFoodSection.all.push(nNewPLaceSection);
   
    console.log(NewPLaceSection.all);
   
    formElementPLace.reset();
   
    localStorage.setItem('nNewPLaceSection', JSON.stringify(NewPLaceSection.all));
   
    document.getElementById('newPLaceContent').innerHTML = "";
   
    getData();
   
  });


// Celebration

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
      ImgElement.setAttribute('style', 'width: 280px; height:475px;');
      ImgElement.src = `${NewCelebrationSection.all[i].path}`;
      console.log(NewCelebrationSection.all[i].path);
    }
   
  }

  const formElementCelebration = document.getElementById('AddCelebrationForm');
   
  formElementCelebration.addEventListener('submit', function (event) {
   
    event.preventDefault();
    console.log()
   
   
   
    const nNewCelebrationSectionTitle = event.target.title.value;
    const nNewCelebrationSectionText = event.target.subject.value;
    const nNewCelebrationSectionImg = event.target.img.value;
   
    const nNewCelebrationSection = new NewFoodSection(nNewCelebrationSectionTitle, nNewCelebrationSectionText,nNewCelebrationSectionImg);
   
    NewFoodSection.all.push(nNewCelebrationSection);
   
    console.log(NewCelebrationSection.all);
   
    formElementCelebration.reset();
   
    localStorage.setItem('nNewCelebrationSection', JSON.stringify(NewCelebrationSection.all));
   
    document.getElementById('newCelebrationContent').innerHTML = "";
   
    getData();
   
  });

   
  function getData() {
    const dataFoood = localStorage.getItem('nNewFoodSection');
    const dataClothes = localStorage.getItem('nNewClothesSection');
    const dataPlace = localStorage.getItem('nNewPlaceSection');
    const dataCelebration = localStorage.getItem('nNewCelebrationSection');
   
    if (dataFoood) {
      const objDataFood = JSON.parse(dataFoood);
      NewFoodSection.all = objDataFood;
      runderFood();
    }
    if (dataClothes) {
        const objDataClothes = JSON.parse(dataClothes);
        NewFoodSection.all = objDataClothes;
        runderClothes();
      }
    if (dataPlace) {
        const objDataPlace = JSON.parse(dataPlace);
        NewFoodSection.all = objDataPlace;
        runderPlace();
      }
    if (dataCelebration) {
        const objDataCelebration = JSON.parse(dataCelebration);
        NewFoodSection.all = objDataCelebration;
        runderCelebration();
      }      
  }
   

  
  getData();
  