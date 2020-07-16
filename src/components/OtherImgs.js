import React from "react";

export default function OtherImgs({pickImgFromCollection}){
    return(
        <div className = 'imgs-collection' >
            {pickImgFromCollection()}
        </div>
    )    
}