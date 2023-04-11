import Header from "@/components/Header";
import Main from "@/components/Main";
import Map from "@/components/Map";
import Facilities from "@/components/Facilities";
import Contacts from "@/components/0";
import HeaderContacts from "@/components/HeaderContacts";
import GallerySmall from "@/components/GallerySmall";

import contacts01 from "../assets/images/contacts01.png";
import contacts02 from "../assets/images/contacts02.png";
import ContactsButton from "@/components/0/ContactsButton";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Map />
      <Facilities />
      <GallerySmall links={[contacts01, contacts02]} />
      <HeaderContacts header="Stay in touch with us" />
      <Contacts />
      <ContactsButton />
    </>
  );
}
