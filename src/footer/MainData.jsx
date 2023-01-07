import React from "react";


const MainData=(props)=>{
    return(
            <div className="cont">
                <p>{props.topic}</p>
                <img src={props.imgsrc} alt="items"/>
                <p className="tagline">{props.tagline}</p>
            </div>    
    );
}

export default MainData;