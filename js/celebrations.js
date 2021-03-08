'use strict';

function NewSection ( title, text , path ) {
  this.title = title;
  this.text = text;
  this.path = path;

}

NewSection.all=[];

function runder(){
  const parentElement = document.getElementById( 'celebration' );

  for ( let i =0; i < NewSection.all.length;i++ ){
    const h4Element = document.createElement( 'h4' );
    parentElement.appendChild( h4Element );
    h4Element.textContent=`${NewSection.all[i].text}`;
    console.log( NewSection.all[i].text );

    const pElement = document.createElement( 'p' );
    parentElement.appendChild( pElement );
    pElement.textContent=`${NewSection.all[i].title}`;
    console.log( NewSection.all[i].title );


    const ImgElement = document.createElement( 'img' );
    parentElement.appendChild( ImgElement );
    ImgElement.setAttribute( 'style', 'width: 280px; height:475px;' );
    ImgElement.src = `${NewSection.all[i].path}`;
    console.log( NewSection.all[i].path );


  }



}

const formElement = document.getElementById( 'addcelebration' );

formElement.addEventListener( 'submit', function( event ) {

  event.preventDefault();

  const nNewSectionTitle = event.target.Name.value;
  const nNewSectionText = event.target.description.value;
  const nNewSectionImg = event.target.img.value;

  const nNewSection = new NewSection( nNewSectionTitle, nNewSectionText , nNewSectionImg );

  NewSection.all.push( nNewSection );

  console.log( NewSection.all );

  formElement.reset();

  localStorage.setItem( 'celebrationSection', JSON.stringify( NewSection.all ) );

  document.getElementById( 'celebration' ).innerHTML = '';

  getData();

} );

function getData() {
  const data = localStorage.getItem( 'celebrationSection' );

  if ( data ) {
    const objData = JSON.parse( data );
    NewSection.all = objData;
    runder();
  }
}

getData();



