import React from "react";

 export default function EveryDayImg({url}){

    return(
        <div className='container-every-day-img'>
            <img src={url} alt='Nasa every day' ></img>
        </div>
    )
}