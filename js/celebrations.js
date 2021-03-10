'use strict';


function NewCelebrationSection( title, text, path ) {
  this.title = title;
  this.text = text;
  this.path = path;
}

NewCelebrationSection.all = [];

function runderCelebration() {


  const parentElement = document.getElementById( 'newCelebrationContent' );

  for ( let i = 0; i < NewCelebrationSection.all.length; i++ ) {

    const ImgElement = document.createElement( 'img' );
    parentElement.appendChild( ImgElement );
    ImgElement.setAttribute( 'id','newCelebrationContent-video' );
    ImgElement.setAttribute( 'style', 'width: 350px; height:245px; border: 5px solid brown; ' );
    ImgElement.src = `${NewCelebrationSection.all[i].path}`;
    console.log( NewCelebrationSection.all[i].path );

    const h4Element = document.createElement( 'h4' );
    parentElement.appendChild( h4Element );
    h4Element.setAttribute( 'id','newCelebrationContent-h4' );
    h4Element.textContent = `${NewCelebrationSection.all[i].title}`;
    console.log( NewCelebrationSection.all[i].title );

    const pElement = document.createElement( 'p' );
    parentElement.appendChild( pElement );
    pElement.setAttribute( 'id','newCelebrationContent-text' );
    pElement.textContent = `${NewCelebrationSection.all[i].text}`;
    console.log( NewCelebrationSection.all[i].text );


  }

}



function getData() {
  const dataCelebration = localStorage.getItem( 'nNewCelebrationSection' );
  if ( dataCelebration ) {
    const objDataCelebration = JSON.parse( dataCelebration );
    NewCelebrationSection.all = objDataCelebration;
    runderCelebration();
    document.getElementById( 'new' ).style.display='block';
  }
}

getData();
