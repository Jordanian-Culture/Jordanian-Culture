'use strict';



const Random = function ( number ) {
  this.photo = `../foodimg/Mansaf/${number}.jpg`;
  Random.all.push( this );
};
Random.all = [];
for ( let i = 0; i <= 4; i++ ) {
  new Random( i );
}
function random() {
  let a = randomNumber( 1, 4 );
  const leftImage = document.getElementById( 'fimage' );

  leftImage.src = Random.all[a].photo;
}
random();



const Random1 = function ( number ) {
  this.photo = `../foodimg/Makmoura/${number}.jpg`;
  Random1.all.push( this );
};
Random1.all = [];

for ( let i = 0; i <= 3; i++ ) {
  new Random1( i );
}
function random1() {
  let a = randomNumber( 1, 3 );
  const leftImage = document.getElementById( 'maimage' );

  leftImage.src = Random1.all[a].photo;
}
random1();

const Random2 = function ( number ) {
  this.photo = `../foodimg/Rashouf/${number}.jpg`;
  Random2.all.push( this );
};
Random2.all = [];

for ( let i = 0; i <= 4; i++ ) {
  new Random2( i );
}
function random2() {
  let a = randomNumber( 1, 4 );
  const leftImage = document.getElementById( 'rimage' );

  leftImage.src = Random2.all[a].photo;
}
random2();

const Random3 = function ( number ) {
  this.photo = `../foodimg/Shorabet Adas/${number}.jpg`;
  Random3.all.push( this );
};
Random3.all = [];

for ( let i = 0; i <= 5; i++ ) {
  new Random3( i );
}
function random3() {
  let a = randomNumber( 1, 5 );
  const leftImage = document.getElementById( 'simage' );

  leftImage.src = Random3.all[a].photo;
}
random3();

const Random4 = function ( number ) {
  this.photo = `../foodimg/Mujadara/${number}.jpg`;
  Random4.all.push( this );
};
Random4.all = [];

for ( let i = 0; i <= 5; i++ ) {
  new Random4( i );
}
function random4() {
  let a = randomNumber( 1, 5 );
  const leftImage = document.getElementById( 'mimage' );

  leftImage.src = Random4.all[a].photo;
}
random4();

const Random5 = function ( number ) {
  this.photo = `../foodimg/Maqluba/${number}.jpg`;
  Random5.all.push( this );
};
Random5.all = [];

for ( let i = 0; i <= 3; i++ ) {
  new Random5( i );
}
function random5() {
  let a = randomNumber( 1, 3 );
  const leftImage = document.getElementById( 'kimage' );

  leftImage.src = Random5.all[a].photo;
}
random5();

const Random6 = function ( number ) {
  this.photo = `../foodimg/Mulukhiyah/${number}.jpg`;
  Random6.all.push( this );
};
Random6.all = [];

for ( let i = 0; i <= 3; i++ ) {
  new Random6( i );
}
function random6() {
  let a = randomNumber( 1, 3 );
  const leftImage = document.getElementById( 'mkimage' );

  leftImage.src = Random6.all[a].photo;
}
random6();


function randomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}



// Food Form


function NewFoodSection( title, text, path ) {
  this.title = title;
  this.text = text;
  this.path = path;
}


NewFoodSection.all = [];

function runderFood() {



  const parentElement = document.getElementById( 'newFoodContent' );

  for ( let i = 0; i < NewFoodSection.all.length; i++ ) {
    const h4Element = document.createElement( 'p' );
    h4Element.setAttribute( 'id','tite' );
    parentElement.appendChild( h4Element );
    h4Element.textContent = `${NewFoodSection.all[i].title}`;
    console.log( NewFoodSection.all[i].title );

    const pElement = document.createElement( 'p' );
    pElement.setAttribute( 'class','text' );
    parentElement.appendChild( pElement );
    pElement.textContent = `${NewFoodSection.all[i].text}`;
    console.log( NewFoodSection.all[i].text );

    const ImgElement = document.createElement( 'img' );
    parentElement.appendChild( ImgElement );
    ImgElement.setAttribute( 'style', 'width: 430px; height:290px;' );
    ImgElement.src = `${NewFoodSection.all[i].path}`;
    console.log( NewFoodSection.all[i].path );

  }

}




function getData() {


  const dataFoood = localStorage.getItem( 'nNewFoodSection' );

  if ( dataFoood ) {
    const objDataFood = JSON.parse( dataFoood );

    NewFoodSection.all = objDataFood;
    runderFood();
    document.getElementById('hhhh').style.display='block';
  }
}

getData();

