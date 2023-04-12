import React from "react";

import HeaderImage from "@/components/HeaderImage/HeaderImage";
import Quote from "@/components/Quote";
import Carousel from "@/components/Carousel/Carousel/Carousel";

import area01 from "../assets/images/area01.png";
import map from "../assets/images/areaMap.png";
import area02 from "../assets/images/area02.png";
import area03 from "../assets/images/area03.png";
import area04 from "../assets/images/area04.png";
import area05 from "../assets/images/area05.png";
import area06 from "../assets/images/area06.png";
import location from "../assets/icons/location.svg";
import CarouselText from "@/components/Carousel/CarouselText";
import CarouselParagraph from "@/components/Carousel/CarouselParagraph";
import Paragraph from "@/components/Paragraph";
import Map from "@/components/Map";

function area() {
  return (
    <>
      {/* @ts-ignore */}
      <HeaderImage
        header="The area"
        //@ts-ignore
        image={area01}
        text="Vesterborg, Denmark"
        icon={location}
        button={["get directions"]}
      />
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
      <CarouselParagraph>
        <Carousel
          data={[{ image: area03 }, { image: area02 }, { image: area04 }]}
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
          data={[{ image: area04 }, { image: area02 }, { image: area03 }]}
        />
        <CarouselText
          data={[
            {
              id: 0,
              header: "Experiences in nature",
              link: "Hot tube",
              description: `Løvtags three exclusive and comfortable cabins, Et, Ro and Ly, 
              are designed by architect Sigurd Larsen. They all have an open 
              space with a double bed, a double sofa bed, kitchen, separate 
              toilet and an outdoor shower. On the roof, surrounded by treetops, 
              there is a terrace, which is about nine meters above ground.`,
            },
            {
              id: 1,
              header: "Experiences in nature",
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
          data={[{ image: area05 }, { image: area02 }, { image: area03 }]}
        />
        <CarouselText
          data={[
            {
              id: 0,
              header: "Go for a drive",
              link: "Hot tube",
              description: `Løvtags three exclusive and comfortable cabins, Et, Ro and Ly, 
              are designed by architect Sigurd Larsen. They all have an open 
              space with a double bed, a double sofa bed, kitchen, separate 
              toilet and an outdoor shower. On the roof, surrounded by treetops, 
              there is a terrace, which is about nine meters above ground.`,
            },
            {
              id: 1,
              header: "Experiences in nature",
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
          data={[{ image: area06 }, { image: area02 }, { image: area03 }]}
        />
        <CarouselText
          data={[
            {
              id: 0,
              header: "Small-town charm",
              link: "Hot tube",
              description: `Løvtags three exclusive and comfortable cabins, Et, Ro and Ly, 
              are designed by architect Sigurd Larsen. They all have an open 
              space with a double bed, a double sofa bed, kitchen, separate 
              toilet and an outdoor shower. On the roof, surrounded by treetops, 
              there is a terrace, which is about nine meters above ground.`,
            },
            {
              id: 1,
              header: "Experiences in nature",
              link: "Electric car change",
              description: `Løvtags three exclusive and comfortable cabins, Et, Ro and Ly, 
              are designed by architect Sigurd Larsen. They all have an open 
              space with a double bed, a double sofa bed.`,
            },
          ]}
        />
      </CarouselParagraph>
      <Map fullScreen={true}/>
    </>
  );
}

export default area;
