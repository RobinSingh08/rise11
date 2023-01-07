import { PinDropSharp } from "@material-ui/icons";
import React from "react";

const CityOption=(props)=>{
    return(
        <option value={props.value}>{props.city}</option>
    );
}

export default CityOption;