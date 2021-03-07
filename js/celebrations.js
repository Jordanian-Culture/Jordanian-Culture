'use strict';

function NewSection ( title, text ) {
  this.title = title;
  this.text = text;
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
  }

}

const formElement = document.getElementById( 'addcelebration' );

formElement.addEventListener( 'submit', function( event ) {

  event.preventDefault();

  const nNewSectionTitle = event.target.Name.value;
  const nNewSectionText = event.target.description.value;

  const nNewSection = new NewSection( nNewSectionTitle, nNewSectionText );

  NewSection.all.push( nNewSection );

  console.log( NewSection.all );

  formElement.reset();

  localStorage.setItem( 'nNewSection', JSON.stringify( NewSection.all ) );

  document.getElementById( 'celebration' ).innerHTML = '';

  getData();

} );

function getData() {
  const data = localStorage.getItem( 'nNewSection' );

  if ( data ) {
    const objData = JSON.parse( data );
    NewSection.all = objData;
    runder();
  }
}

getData();



