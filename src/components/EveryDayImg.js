import React from "react";
import styled from 'styled-components'
const Styles = styled.div`
  height: 100vh;
  width: 100vw;

  img{
    background-size:cover;
  }
`

 export default function EveryDayImg({url, title}){
    
    return(
    <Styles>
        <div className='container-every-day-img'>
            <img src={url} alt={title} ></img>
        </div>
    </Styles>
    )
}