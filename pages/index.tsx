import Header from "@/components/Header";
import Main from "@/components/Main";
import Map from "@/components/Map";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Facilities from "@/components/Facilities";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import HeaderContacts from "@/components/HeaderContacts";
import GallerySmall from "@/components/GallerySmall";

import contacts01 from "../assets/images/contacts01.png";
import contacts02 from "../assets/images/contacts02.png";

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
    </>
  );
}
