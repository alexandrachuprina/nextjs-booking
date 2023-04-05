import React from "react";
import HeaderImage from "@/components/HeaderImage/HeaderImage";

import hut01 from "../assets/images/hut01.png";

function hut() {
  return (
    // @ts-ignore
    <HeaderImage header="The Hut" image={hut01} />
  );
}

export default hut;
