import React from "react";
import "./footer.css";
import FooterData from "./FooterData";
import MainData from "./MainData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 683, min: 0 },
    items: 1
  }
};



const footerData=FooterData.map((val)=>{
    return(
        <MainData
            key={val.id}
            topic={val.topic}
            imgsrc={val.imgsrc}
            tagline={val.tagline}
        />
    )
});

const FootItem=()=>{
    return(
        <Carousel responsive={responsive} className="mainfoot">
            {footerData}
        </Carousel>
    );
}

export default FootItem;