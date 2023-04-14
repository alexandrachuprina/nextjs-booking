import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Row, Col } from "antd";
import styles from "../../../styles/components/Gallery/GalleryGrid.module.scss";

interface Props {
  image01: StaticImageData;
  image02: StaticImageData;
  image03: StaticImageData;
  text: string;
  image05: StaticImageData;
}

function GalleryGrid(props: Props) {
  return (
    <Row justify={"center"}>
      <Col xs={22} sm={20} lg={17}>
        <div className={styles.component}>
          <div className={styles.image01} style={{gridArea: 'img1'}}>
            <Image src={props.image01} alt={`image`} fill={true}/>
          </div>
          <div className={styles.image02} style={{gridArea: 'img2'}}>
            <Image src={props.image02} alt={`image`} fill={true}/>
          </div>
          <div className={styles.image03} style={{gridArea: 'img3'}}>
            <Image src={props.image03} alt={`image`} fill={true}/>
          </div>
            <p className={styles.image04} style={{gridArea: 'text'}}>{props.text}</p>
          <div className={styles.image05} style={{gridArea: 'img5'}}>
            <Image src={props.image05} alt={`image`} fill={true}/>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default GalleryGrid;
