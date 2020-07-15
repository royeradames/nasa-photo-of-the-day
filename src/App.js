import React, {useState} from "react";
import "./App.css";

//components
import EveryDayImg from './components/EveryDayImg'
import OtherImgs from './components/OtherImgs'

function App() {
  const nasaEveryImgURL = 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss063e039001.jpg'
  const imgsCollection = ['https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia23984-16.jpg', 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/50045549941_b8aa2c8417_o.png',  'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/iss063e034203.jpg']

  function pickImgFromCollection (){
    return(
      <div className = 'imgs-collection' >
        {imgsCollection.map((imgUrl) => {
          return <img url={imgUrl} alt='Previos Nasa daily' ></img>
        })}
      </div>
    )
  }
  return (
    <div className="App">
      <EveryDayImg url={nasaEveryImgURL}/>
      <OtherImgs pickImgFromImgsCollection = {pickImgFromCollection} />

    </div>
  );
}

export default App;
