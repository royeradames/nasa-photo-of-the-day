import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
//components
import EveryDayImg from './components/EveryDayImg'
import OtherImgs from './components/OtherImgs'
import Footer from "./components/footer"
function App() {
  //dummy data
  const nasaEveryImgURL = 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss063e039001.jpg'

  // const imgsCollection = ['https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia23984-16.jpg', 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/50045549941_b8aa2c8417_o.png',  'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/iss063e034203.jpg']

  // const [nasaEveryImgURL,setNasaEveryImgURL] = useState()
  const [imgsCollection, setImgsCollection] = useState()
  const marsImgsLink = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=A1HU6rr2pWbHkkOh4HcfsgcVJpRB1Rwqkd3jd9vZ'

  useEffect(() => {
    axios.get(marsImgsLink)
      .then(resp => {
        console.log(resp.data.photos)
        // setImgsCollection(resp.data.photos)
      })
      .catch((err) => {
        debugger
      })
  })

 

  // function pickImgFromCollection() {
  //   return (
  //     //react knows how to unpack an array automatically 
  //     imgsCollection.map((photo) => {
  //       return <img src={photo.img_src} alt='Previos Nasa daily' key={photo.id}></img>
  //     })
  //   )
  // }

  return (
    <div className="App">
      <EveryDayImg url={nasaEveryImgURL} />
      {/* <OtherImgs pickImgFromCollection = {pickImgFromCollection} /> */}
      <Footer />
    </div>
  )
}

export default App;
