import React from "react";

import HeaderImage from "@/components/HeaderImage/HeaderImage";
import Quote from "@/components/Quote";
import Carousel from "@/components/Carousel/Carousel";

import area01 from "../assets/images/area01.png";
import map from "../assets/images/areaMap.png";
import area02 from "../assets/images/area02.png";
import area03 from "../assets/images/area03.png";
import area04 from "../assets/images/area04.png";
import CarouselText from "@/components/CarouselText";
import CarouselParagraph from "@/components/CarouselParagraph";
import Paragraph from "@/components/Paragraph";

function area() {
  return (
    <>
      {/* @ts-ignore */}
      <HeaderImage header="The area" image={area01} />
      <CarouselParagraph>
        <Carousel
          data={[{ image: area02 }, { image: area03 }, { image: area04 }]}
        />
        <Paragraph
          header="Vesterborg"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
      ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
      magni dolores eos qui ratione voluptatem sequi nesciunt. "
          reverse={true}
        />
      </CarouselParagraph>
      <Quote
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing..."
        /* @ts-ignore */
        image={map}
      />
      <Carousel
        data={[{ image: area02 }, { image: area03 }, { image: area04 }]}
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
    </>
  );
}

export default area;
