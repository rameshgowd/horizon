
import { useState } from 'react';

import './index.css' 

const translations = {

    home:{
        en:'Home',
        fr:"Accueil",
        de:"Zuhause",
        ru:"russia",
        es:"Inicio",
        zh:"zet",
    },

    movies:{
        en:"Movies",
        fr:"Films",
        de:"Filme",
        ru:"Rask",
        es:"Peliculas",
        zh:"Zono",
    },

    tvshows:{
        en:"TV Shows",
        fr:"Emissons de television",
        de:"Fernsehsendungen",
        ru:"Ten news",
        es: 'Programas de televisión',
        zh:"Zoho"
    },

    sports:{
        en: 'Sports',
        fr: 'Sports',
        de: 'Sportarten',
        ru: 'Rabbi',
        es: 'Deportes',
        zh: 'Zono',

    },

    live: {
        en: 'Live',
        fr: 'En direct',
        de: 'Live',
        ru: 'Rock',
        es: 'En vivo',
        zh: 'Zock',
      },


}

const menuImages = {
    home: 'images/home.jpg',
    movies: 'images/movies.jpg',
    tvshows: 'images/tvshows.jpg',
    sports: 'images/sports.jpg',
    live: 'images/live.jpg',
  };

  const Menu = ({ language }) => {
    const [currentImage, setCurrentImage] = useState(menuImages.home);
  
    const handleMenuClick = (menuItem) => {
      setCurrentImage(menuImages[menuItem]);
    };
  
    return (
      <div className="menu">
        <nav>
          <ul>
            {Object.keys(translations).map((key) => (
              <li key={key} onClick={() => handleMenuClick(key)}>
                {translations[key][language]}
              </li>
            ))}
          </ul>
        </nav>
        <div className="image-container">
          <div className="overlay"> </div>
          <img src={currentImage} alt="Menu" />
        </div>
       
      </div>
    );
  };
  
  export default Menu;

