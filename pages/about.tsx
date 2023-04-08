import React from "react";
import HeaderImage from "@/components/HeaderImage/HeaderImage";
import Quote from "@/components/Quote";
import Paragraph from "@/components/Paragraph/Paragraph";

import about01 from "../assets/images/about01.png";
import about02 from "../assets/images/about02.png";
import GalleryGrid from "@/components/GalleryGrid";

function about() {
  return (
    <>
      {/* @ts-ignore */}
      <HeaderImage header="About us" image={about01} />

      <Paragraph
        header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua."
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
      ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
      magni dolores eos qui ratione voluptatem sequi nesciunt. "
        reverse={true}
        // @ts-ignore
        image={about02}
      />
      <Quote quote="Lorem ipsum dolor sit amet, consectetur adipiscing..." />
      <GalleryGrid
      image01="d"
      image02="d"/>
    </>
  );
}

export default about;
