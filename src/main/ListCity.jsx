import React from "react";

const ListCity=(props)=>{
    return(
            <div className="city"><h4 className="main_color">{props.cityname}</h4><p>{props.citysf}</p></div>
    );
}

export default ListCity;