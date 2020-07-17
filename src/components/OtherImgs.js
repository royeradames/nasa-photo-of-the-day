import React from "react";
import styled from 'styled-components'
const Styles = styled.div`
  display: flex;
  flex-wrap: wrap;
  img{
    height: 2rem;
  }
`
export default function OtherImgs({pickImgFromCollection}){
    return(
        <Styles className = 'imgs-collection' >
            {pickImgFromCollection()}
        </Styles>
    )    
}