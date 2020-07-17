import React from "react";
import styled from 'styled-components'
const Styles = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 191, 255, .3);
  img{
    height: 100%;
    background-size:cover;
  }
`

 export default function EveryDayImg({url, title}){
    
    return(
        <Styles className='container-every-day-img'>
            <img src={url} alt={title} ></img>
        </Styles>
    )
}