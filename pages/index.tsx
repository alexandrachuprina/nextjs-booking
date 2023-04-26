import Header from "@/components/Header";
import Main from "@/components/Main";
import Map from "@/components/Map";
import Facilities from "@/components/Facilities";
import Contacts from "@/components/Contacts/Contacts";
import HeaderContacts from "@/components/Contacts/HeaderContacts";
import GallerySmall from "@/components/Gallery/GallerySmall";

import contacts01 from "../assets/images/contacts01.png";
import contacts02 from "../assets/images/contacts02.png";
import ContactsButton from "@/components/Contacts/ContactsButton";
import ContactsWrapper from "@/components/Contacts/ContactsWrapper";
import Margin from "@/components/Margin";

export default function Home() {
  return (
    <>
      <Header />
      <Margin/>
      <Main />
      <Margin/>
      <Map fullScreen={false} />
      <Facilities />
      <GallerySmall links={[contacts01, contacts02]} />
      <Margin/>
      <HeaderContacts header="Stay in touch with us" />
      <ContactsWrapper>
        <Contacts />
        <ContactsButton />
      </ContactsWrapper>
      <Margin/>
    </>
  );
}

