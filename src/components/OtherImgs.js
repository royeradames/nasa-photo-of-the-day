import React from "react";

export default function OtherImgs({pickImgFromCollection}){
console.log(pickImgFromCollection())
    return(
        <div className = 'imgs-collection' >
            {pickImgFromCollection()}
        </div>
        
}