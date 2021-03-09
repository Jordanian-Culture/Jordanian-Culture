'use strict';


// Food


function NewFoodSection(title, text, path) {
    this.title = title;
    this.text = text;
    this.path = path;
  };
   
  NewFoodSection.all = [];
  
  const formElementFood = document.getElementById('AddFoodForm');
   
  formElementFood.addEventListener('submit', function (event) {
   
    event.preventDefault();
   
    const nNewFoodSectionTitle = event.target.titleFood.value;
    const nNewFoodSectionText = event.target.subjectFood.value;
    const nNewFoodSectionImg = event.target.imgFood.value;
   
    const nNewFoodSection = new NewFoodSection(nNewFoodSectionTitle, nNewFoodSectionText,nNewFoodSectionImg);
   
    NewFoodSection.all.push(nNewFoodSection);
   
  
    formElementFood.reset();
   
    localStorage.setItem('nNewFoodSection', JSON.stringify(NewFoodSection.all));
   
   
  });



// Clothes

function NewClothesSection(title, text, path) {
    this.title = title;
    this.text = text;
    this.path = path;
  };
   
  NewClothesSection.all = [];
  

  const formElementClothes = document.getElementById('AddClothesForm');
   
  formElementClothes.addEventListener('submit', function (event) {
   
    event.preventDefault();
    
   
    const nNewClothesSectionTitle = event.target.titleClothes.value;
    const nNewClothesSectionText = event.target.subjectClothes.value;
    const nNewClothesSectionImg = event.target.imgClothes.value;
   
    const nNewClothesSection = new NewClothesSection(nNewClothesSectionTitle, nNewClothesSectionText,nNewClothesSectionImg);
   
    NewClothesSection.all.push(nNewClothesSection);
   
    console.log(NewClothesSection.all);
   
    formElementClothes.reset();
   
    localStorage.setItem('nNewClothesSection', JSON.stringify(NewClothesSection.all));
   
   
  });

// PLace

function NewPLaceSection(title, text, path) {
    this.title = title;
    this.text = text;
    this.path = path;
  };
   
  NewPLaceSection.all = [];
  

  const formElementPLace = document.getElementById('AddPlaceForm');
   
  formElementPLace.addEventListener('submit', function (event) {
   
    event.preventDefault();
    
   
   
   
    const nNewPLaceSectionTitle = event.target.titlePlace.value;
    const nNewPLaceSectionText = event.target.subjectPlace.value;
    const nNewPLaceSectionImg = event.target.imgPlace.value;
   
    const nNewPLaceSection = new NewPLaceSection(nNewPLaceSectionTitle, nNewPLaceSectionText,nNewPLaceSectionImg);
   
    NewPLaceSection.all.push(nNewPLaceSection);
   
    console.log(nNewPLaceSection);
   
    formElementPLace.reset();
   
    localStorage.setItem('nNewPLaceSection', JSON.stringify(NewPLaceSection.all));
   
   
  });


// Celebration

function NewCelebrationSection(title, text, path) {
    this.title = title;
    this.text = text;
    this.path = path;
  };
   
  NewCelebrationSection.all = [];
 
  const formElementCelebration = document.getElementById('AddCelebrationForm');
   
  formElementCelebration.addEventListener('submit', function (event) {
   
    event.preventDefault();
    
   
   
   
    const nNewCelebrationSectionTitle = event.target.titleCelebration.value;
    const nNewCelebrationSectionText = event.target.subjectCelebration.value;
    const nNewCelebrationSectionImg = event.target.imgCelebration.value;
   
    const nNewCelebrationSection = new NewCelebrationSection(nNewCelebrationSectionTitle, nNewCelebrationSectionText,nNewCelebrationSectionImg);
   
    NewCelebrationSection.all.push(nNewCelebrationSection);
   
    console.log(NewCelebrationSection.all);
   
    formElementCelebration.reset();
   
    localStorage.setItem('nNewCelebrationSection', JSON.stringify(NewCelebrationSection.all));

   
  });



  function getData() {
    const dataFoood = localStorage.getItem('nNewFoodSection');
    const dataClothes = localStorage.getItem('nNewClothesSection');
    const dataPlace = localStorage.getItem('nNewPlaceSection');
    const dataCelebration = localStorage.getItem('nNewCelebrationSection');
   
    if (dataFoood) {
      const objDataFood = JSON.parse(dataFoood);
      NewFoodSection.all = objDataFood;
    }
    if (dataClothes) {
        const objDataClothes = JSON.parse(dataClothes);
        NewFoodSection.all = objDataClothes;
      }
    if (dataPlace) {
        const objDataPlace = JSON.parse(dataPlace);
        NewFoodSection.all = objDataPlace;
      }
    if (dataCelebration) {
        const objDataCelebration = JSON.parse(dataCelebration);
        NewFoodSection.all = objDataCelebration;
      }      
  }


  
  getData();