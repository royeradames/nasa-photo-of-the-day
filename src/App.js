import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'
import "./App.css"

//components
import EveryDayImg from './components/EveryDayImg'
import OtherImgs from './components/OtherImgs'
import Footer from "./components/footer"

//backup data
import marsPhotos from './backup-data/mars-photos'
import BackupDailyImg from './backup-data/Daily-Pod-Img'

const Styles = styled.div`
  
`

function App() {
 
  const [imgsCollection, setImgsCollection] = useState([])
  const [dailyImg, setdailyImg] = useState({})

  const marsImgsLink = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=A1HU6rr2pWbHkkOh4HcfsgcVJpRB1Rwqkd3jd9vZ'
  const APODImgLink = 'https://api.nasa.gov/planetary/apod?api_key=A1HU6rr2pWbHkkOh4HcfsgcVJpRB1Rwqkd3jd9vZ'
  useEffect(() => {
    //Daily Img
    axios.get(APODImgLink)
    .then(resp => {
      setdailyImg(resp.data)
    })
    .catch(err => {
      //if no more get request use backup data
      setdailyImg(BackupDailyImg)
    })

    //Mars imgs
    axios.get(marsImgsLink)
      .then(resp => {
        setImgsCollection(resp.data.photos)
      })
      .catch(err => {
        //if no more get request use backup data
        setImgsCollection(marsPhotos)
      })

  }, [])


  function pickImgFromCollection() {
    return (
      //react knows how to unpack an array automatically 
      imgsCollection.map((photo) => {
        return <img src={photo.img_src} alt='Previos Nasa daily' key={photo.id}></img>
      })
    )
  }

  return (
    <Styles >
      <div className="App">
        {dailyImg ? <EveryDayImg url={dailyImg.url} title={dailyImg.title}/> : null}
        {imgsCollection && <OtherImgs pickImgFromCollection = {pickImgFromCollection} />}
        
        <Footer />
      </div>
    </Styles>
  )
}

export default App;
