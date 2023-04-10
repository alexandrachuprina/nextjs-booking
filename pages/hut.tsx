import React from "react";
import HeaderImage from "@/components/HeaderImage/HeaderImage";
import Carousel from "@/components/Carousel/Carousel";
import CarouselParagraph from "@/components/CarouselParagraph";
import CarouselText from "@/components/CarouselText";

import hut01 from "../assets/images/hut01.png";
import hut02 from "../assets/images/hut02.png";
import hut03 from "../assets/images/hut03.png";
import hut04 from "../assets/images/hut04.png";


function hut() {
  return (
    <>
      <HeaderImage
        header="The Hut"
        // @ts-ignore
        image={hut01}
      />
      <CarouselParagraph>
        <Carousel
          data={[{ image: hut02 }, { image: hut03 }, { image: hut04 }]}
        />
        <CarouselText
          data={[
            {
              id: 0,
              header: "The outside",
              link: "Hot tube",
              description: `Løvtags three exclusive and comfortable cabins, Et, Ro and Ly, 
              are designed by architect Sigurd Larsen. They all have an open 
              space with a double bed, a double sofa bed, kitchen, separate 
              toilet and an outdoor shower. On the roof, surrounded by treetops, 
              there is a terrace, which is about nine meters above ground.`,
            },
            {
              id: 1,
              header: "The outside",
              link: "Electric car change",
              description: `Løvtags three exclusive and comfortable cabins, Et, Ro and Ly, 
              are designed by architect Sigurd Larsen. They all have an open 
              space with a double bed, a double sofa bed.`,
            },
          ]}
        />
      </CarouselParagraph>
      <CarouselParagraph>
        <Carousel
          data={[{ image: hut03 }, { image: hut03 }, { image: hut04 }]}
        />
        <CarouselText
          data={[
            {
              id: 0,
              header: "The outside",
              link: "Hot tube",
              description: `Løvtags three exclusive and comfortable cabins, Et, Ro and Ly, 
              are designed by architect Sigurd Larsen. They all have an open 
              space with a double bed, a double sofa bed, kitchen, separate 
              toilet and an outdoor shower. On the roof, surrounded by treetops, 
              there is a terrace, which is about nine meters above ground.`,
            },
            {
              id: 1,
              header: "The outside",
              link: "Electric car change",
              description: `Løvtags three exclusive and comfortable cabins, Et, Ro and Ly, 
              are designed by architect Sigurd Larsen. They all have an open 
              space with a double bed, a double sofa bed.`,
            },
          ]}
        />
      </CarouselParagraph>
      <CarouselParagraph>
        <Carousel
          data={[{ image: hut04 }, { image: hut03 }, { image: hut04 }]}
        />
        <CarouselText
          data={[
            {
              id: 0,
              header: "The outside",
              link: "Hot tube",
              description: `Løvtags three exclusive and comfortable cabins, Et, Ro and Ly, 
              are designed by architect Sigurd Larsen. They all have an open 
              space with a double bed, a double sofa bed, kitchen, separate 
              toilet and an outdoor shower. On the roof, surrounded by treetops, 
              there is a terrace, which is about nine meters above ground.`,
            },
            {
              id: 1,
              header: "The outside",
              link: "Electric car change",
              description: `Løvtags three exclusive and comfortable cabins, Et, Ro and Ly, 
              are designed by architect Sigurd Larsen. They all have an open 
              space with a double bed, a double sofa bed.`,
            },
          ]}
        />
      </CarouselParagraph>
    </>
  );
}

export default hut;
