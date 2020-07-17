import React from "react";
import styled from 'styled-components'
const Styles = styled.div`
  .imgs-collection{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  h2{
      color: green;
      font-size: 2rem
  }
  img{
    height: 30rem;
    margin: 2rem 0;
  }

`
export default function OtherImgs({pickImgFromCollection}){
    return(
        <Styles>
            <h2>Mars Photos</h2>
            <div className = 'imgs-collection'>
                {pickImgFromCollection()}
            </div>
        </Styles>
    )    
}