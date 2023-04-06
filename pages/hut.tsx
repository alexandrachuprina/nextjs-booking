import React from "react";
import HeaderImage from "@/components/HeaderImage/HeaderImage";
import ParagraphSlider from "@/components/ParagraphSlider/ParagraphSlider";

import Slider from "@/components/ParagraphSlider/Slider";

import hut01 from "../assets/images/hut01.png";
import hut02 from "../assets/images/hut02.png";
import hut03 from "../assets/images/hut03.png";
import hut04 from "../assets/images/hut04.png";

// To create slider component
// and for text

function hut() {
  return (
    <>
      <HeaderImage
        header="The Hut"
        // @ts-ignore
        image={hut01}
      />
      <Slider/>
      <ParagraphSlider
        header="The Outside"
        description="Løvtag’s three exclusive and comfortable cabins, Et, 
        Ro and Ly, are designed by architect Sigurd Larsen. They all have an 
        open space with a double bed, a double sofa bed, kitchen, separate 
        toilet and an outdoor shower. On the roof, surrounded by treetops, t
        here is a terrace, which is about nine meters above ground. "
        link="Hot tube"
        // @ts-ignore
        image={hut02}
        reverse={false}
      />
      <ParagraphSlider
        header="The Inside"
        description="Løvtag’s three exclusive and comfortable cabins, Et, 
        Ro and Ly, are designed by architect Sigurd Larsen. They all have an 
        open space with a double bed, a double sofa bed, kitchen, separate 
        toilet and an outdoor shower. On the roof, surrounded by treetops, t
        here is a terrace, which is about nine meters above ground. "
        link="Hot tube"
        // @ts-ignore
        image={hut03}
        reverse={1 < 0 ? true : false}
      />
      <ParagraphSlider
        header="Practicalities"
        description="Løvtag’s three exclusive and comfortable cabins, Et, 
        Ro and Ly, are designed by architect Sigurd Larsen. They all have an 
        open space with a double bed, a double sofa bed, kitchen, separate 
        toilet and an outdoor shower. On the roof, surrounded by treetops, t
        here is a terrace, which is about nine meters above ground. "
        link="Hot tube"
        // @ts-ignore
        image={hut04}
        reverse={false}
      />
    </>
  );
}

export default hut;
