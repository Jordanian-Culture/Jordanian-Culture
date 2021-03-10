


'use strict';

/* ------------------------------------------------------------------------------------------ */
/* Main */

let places = [
  {
    id: 'petra',
    lastIndex: 0,
    images: [
      {
        src: 'https://image.freepik.com/free-photo/treasury-al-khazna_143092-974.jpg',
        width: '280',
        height: '200'
      },
      {
        src: 'https://www.10adventures.com/wp-content/uploads/2019/12/03-Things-to-do-in-Jordan-Treasury-of-Petra-in-Jordan.jpg',
        width: '320',
        height: '195'
      },
      {
        src: 'https://images.memphistours.com/large/184203755_Petra.jpg',
        width: '320',
        height: '195'
      },
      {
        src: 'https://images.memphistours.com/large/26356167a430cc8e72faca121a495a10.jpg',
        width: '350',
        height: '250'
      },
      {
        src: 'https://d3qvqlc701gzhm.cloudfront.net/full/dcef64aebfcb9608b41dd6b589f75e3ed4f54602bdcbcbf2e27bc4b62d7edb0c.jpg',
        width: '350',
        height: '250'
      },
      // {
      //   src: 'https://i0.wp.com/www.amazingplacesonearth.com/wp-content/uploads/2012/10/The_Monastery.jpg?ssl=1',
      //   width: '350',
      //   height: '250'
      // },

    ]
  },
  {
    id: 'wadiRum',
    lastIndex: 0,
    images: [
      {
        src: 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/2887f35aa2f7cacc7772a5e433bf34f4638e90e2/big-ccf03cc343ababea46f4c4e94d23fdd6.jpg',
        width: '280',
        height: '200'
      },
      {
        src: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/76/e2/bc.jpg',
        width: '320',
        height: '195'
      },
      {
        src: 'https://www.touristisrael.com/wp-content/uploads/scrnli_11_12_2019_5-12-05-PM.png',
        width: '320',
        height: '195'
      },
      {
        src: 'https://anba.com.br/wp-content/uploads/2020/01/20110623-071239.png',
        width: '350',
        height: '250'
      },
      {
        src: 'https://www.mostbeautifulspots.com/wp-content/uploads/2017/10/wadi-rum.jpg',
        width: '350',
        height: '250'
      },
      {
        src: 'https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/shutterstock_1319299538-(1)_5e32432c08d4e.jpg',
        width: '350',
        height: '250'
      },
    ]
  },
  {
    id: 'deadSea',
    lastIndex: 0,
    images: [
      {
        src: 'https://www.ayasshotel.com/medias/article/big/176/dead-sea.jpg',
        width: '280',
        height: '200'
      },
      {
        src: 'https://lostitalianos.com/wp-content/uploads/2020/04/DJI_0772-1024x640.jpg',
        width: '320',
        height: '195'
      },
      {
        src: 'https://cdn.theculturetrip.com/wp-content/uploads/2017/07/dead-sea-shutterstock-copy-650x434.jpg',
        width: '320',
        height: '195'
      },
      {
        src: 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/c328c8ad6c6dc840683320e15e440d07d3ef103a/big-ea2717f0429ba5633486bba3c46f137c.jpg',
        width: '350',
        height: '250'
      },
      // {
      //     src: 'https://lh3.googleusercontent.com/proxy/C3sfiDeBzb2jH6VmC83bNFvwdHnyWTVIUhMUR2K7yUjlquzQ5kOUO9KIXrUKVuJZTiNFFfBaKbb_0hIFenVWxqrIRxnAq9CK_OTvaewtSVVLuQj9iobGSYi55cL4eSWGLITFDAaWDEIb78w',
      //     width: '350',
      //     height: '250'
      // },
      {
        src: 'https://static.toiimg.com/thumb/msid-59265839,width=1200,height=900/59265839.jpg',
        width: '350',
        height: '250'
      },
    ]
  },
  {
    id: 'roman',
    lastIndex: 0,
    images: [
      {
        src: 'https://previews.123rf.com/images/elec/elec1608/elec160800185/62236268-view-on-roman-theater-in-amman-jordan.jpg',
        width: '280',
        height: '200'
      },
      {
        src: 'https://image.freepik.com/free-photo/roman-theatre-dusk-amman-jordan_29285-1953.jpg',
        width: '320',
        height: '195'
      },
      {
        src: 'https://jordan-travel.com/wp-content/uploads/2021/01/Roman-Amphitheater-Amman-Tours-and-Excursions-700x660.jpg',
        width: '320',
        height: '195'
      },
      {
        src: 'https://live.staticflickr.com/4838/45827107255_6b1dfa40a9_b.jpg',
        width: '350',
        height: '250'
      },
      {
        src: 'https://live.staticflickr.com/808/27097917438_ac8a2ea88a_b.jpg',
        width: '350',
        height: '250'
      },
      {
        src: 'https://image.freepik.com/free-photo/ruins-citadel-city-amman-roman-theater-jordan-spring-cloudy-day_272999-181.jpg',
        width: '350',
        height: '250'
      },
    ]
  },
  {
    id: 'citadel',
    lastIndex: 0,
    images: [
      {
        src: 'https://www.touristjordan.com/wp-content/uploads/2018/01/Amman-citadel.jpg',
        width: '280',
        height: '200'
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/1526/9513/products/amman-citadel_480x480.jpg?v=1606638946',
        width: '320',
        height: '195'
      },
      {
        src: 'https://img.locationscout.net/images/2018-04/citadel-amman-jordan-jordan_l.jpeg',
        width: '320',
        height: '195'
      },
      {
        src: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/96/78/90/amman-citadel.jpg',
        width: '350',
        height: '250'
      },
      {
        src: 'https://mediaim.expedia.com/destination/2/14bc7d87cd6164402857c3bc03234896.jpg',
        width: '350',
        height: '250'
      },
      {
        src: 'https://images.squarespace-cdn.com/content/v1/564eb270e4b05d63dee76e1a/1526384391603-HA7H6EUMMSWO97FFG5Z3/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/_35T9620.jpg?format=1000w',
        width: '350',
        height: '250'
      },
    ]
  },
];

// loop through the image array of all places and display a random image for each place
for ( let i = 0; i < places.length; i++ ) {
  displayRandomImageForPlace( places[i] );
}

/* ------------------------------------------------------------------------------------------ */
/* Functions */

// display a random image for the given placeholder
function displayRandomImageForPlace( place ) {
  // get a random image index for images for the place
  let n = getRandomNo( 0, place.images.length - 1, place.lastIndex );
  // remember image index
  place.lastIndex = n;
  // get the place image element from its ID
  let image = document.getElementById( place.id );
  // replace the image with the random image URL
  image.src = place.images[n].src;
  // display another image after 3 seconds
  setTimeout( function () {
    displayRandomImageForPlace( place );
  }, 2000 );
}

// get a random number within a range
function getRandomNo( min, max, lastNo ) {
  let n = 0;
  do {
    n = Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  } while ( n === lastNo );
  return n;
}






// PLace Form


function NewPLaceSection( title, text, path ) {
  this.title = title;
  this.text = text;
  this.path = path;
}

NewPLaceSection.all = [];

function runderPLace() {


  const parentElement = document.getElementById( 'newPLaceContent' );

  for ( let i = 0; i < NewPLaceSection.all.length; i++ ) {
    const h4Element = document.createElement( 'h4' );
    h4Element.setAttribute( 'class', 'newH4' );
    parentElement.appendChild( h4Element );
    h4Element.textContent = `${NewPLaceSection.all[i].title}`;
    console.log( NewPLaceSection.all[i].title );

    const pElement = document.createElement( 'p' );
    pElement.setAttribute( 'class', 'newP' );
    parentElement.appendChild( pElement );
    pElement.textContent = `${NewPLaceSection.all[i].text}`;
    console.log( NewPLaceSection.all[i].text );

    const ImgElement = document.createElement( 'img' );
    parentElement.appendChild( ImgElement );
    ImgElement.setAttribute( 'style', 'width: 450px; height:300px;' );
    ImgElement.src = `${NewPLaceSection.all[i].path}`;
    console.log( NewPLaceSection.all[i].path );
  }

}

function getData() {

  const dataPlace = localStorage.getItem( 'nNewPLaceSection' );

  if ( dataPlace ) {
    const objDataPlace = JSON.parse( dataPlace );
    NewPLaceSection.all = objDataPlace;
    runderPLace();
  }
}

getData();
