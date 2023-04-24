import React from "react";
import HeaderImage from "@/components/HeaderImage/HeaderImage";
import Quote from "@/components/Quote";
import Paragraph from "@/components/Paragraph/Paragraph";
import GalleryGrid from "@/components/GalleryGrid";

import about01 from "../assets/images/about01.png";
import about02 from "../assets/images/about02.png";
import about03 from "../assets/images/about03.png";
import about04 from "../assets/images/about04.png";
import about05 from "../assets/images/about05.png";
import about06 from "../assets/images/about06.png";
import HeaderContacts from "@/components/Contacts/HeaderContacts";
import Contacts from "@/components/Contacts/Contacts";
import ContactsForm from "@/components/Contacts/ContactsForm";
import ContactsLogo from "@/components/Contacts/ContactsLogo";
import ContactsWrapper from "@/components/Contacts/ContactsWrapper";

function about() {
  return (
    <>
      <HeaderImage
        header="About us"
        image={about01}
        button={["contact us", "read faq"]}
      />
      <Paragraph
        header=""
        longHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua."
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
      ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
      magni dolores eos qui ratione voluptatem sequi nesciunt. "
        reverse={true}
        image={about02}
      />
      <Quote quote="Lorem ipsum dolor sit amet, consectetur adipiscing..." />
      <GalleryGrid
        image01={about03}
        image02={about04}
        image03={about05}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image05={about06}
      />
      <HeaderContacts header="Stay in touch with us" />
      <ContactsWrapper>
        <Contacts />
        <ContactsForm />
      </ContactsWrapper>
      <ContactsLogo />
    </>
  );
}

export default about;
