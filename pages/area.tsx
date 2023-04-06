import React from "react";
import HeaderImage from "@/components/HeaderImage/HeaderImage";
import Quote from "@/components/Quote";

import area01 from "../assets/images/area01.png";
import map from "../assets/images/areaMap.png";

function area() {
  return (
    <>
      {/* @ts-ignore */}
      <HeaderImage header="The area" image={area01} />
      
      <Quote
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing..."
        /* @ts-ignore */
        image={map}
      />
    </>
  );
}

export default area;
