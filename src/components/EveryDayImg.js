import React from "react";

 export default function EveryDayImg({url, title}){
    
    return(
        <div className='container-every-day-img'>
            <img src={url} alt={title} ></img>
        </div>
    )
}