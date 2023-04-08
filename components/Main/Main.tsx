import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import styles from "../../styles/components/Main.module.scss";
import Paragraph from "../Paragraph/Paragraph";

import main01 from "../../assets/images/main01.png";
import main02 from "../../assets/images/main02.png";
import main03 from "../../assets/images/main03.png";
import main04 from "../../assets/images/main04.png";

// Format scss

function Main() {
  return (
    <>
      <Paragraph
        header="The Cabins"
        description="Løvtags three exclusive and comfortable cabins, Et, Ro 
              and Ly, are designed by architect Sigurd Larsen. They all have an open 
              space with a double bed, a double sofa bed, kitchen, separate toilet and 
              an outdoor shower. On the roof, surrounded by treetops, there is a terrace, 
              which is about nine meters above ground. The cottages are built around tall, 
              old trees that go through the entire cottage from floor to ceiling."
        link="Read more"
        reverse={false}
        // @ts-ignore
        image={main01}
      />
      {/* <div className={styles.photos}>
        <div className={styles.photo}>
          <Image
            src={main02}
            alt={"main02"}
            fill={true}
            style={{
              objectFit: "cover",
              objectPosition: "60%",
            }}
          />
        </div>
        <div className={styles.photo}>
          <Image
            src={main03}
            alt={"main03"}
            fill={true}
            style={{
              objectFit: "cover",
              objectPosition: "60%",
            }}
          />
        </div>
        <div className={styles.photo}>
          <Image
            src={main04}
            alt={"main04"}
            fill={true}
            style={{
              objectFit: "cover",
              objectPosition: "60%",
            }}
          />
        </div>
      </div> */}
    </>
  );
}

export default Main;
