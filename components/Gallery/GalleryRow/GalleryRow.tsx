import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import styles from "../../../styles/components/Gallery/GalleryRow.module.scss";
import { StaticImageData } from "next/image";

interface Props {
  links: StaticImageData[];
}

function GalleryRow(props: Props) {
  return (
    <Row justify={"center"}>
<<<<<<< HEAD
      <Col xs={22} sm={20} lg={22} xl={23} xxl={23}>
=======
      <Col xs={22} sm={20} lg={22} xl={23} flex={'1600px'}>
>>>>>>> develop
        <div className={styles.component}>
          {props.links.map((elem: any, i: number) => (
            <div className={styles.image} key={i}>
              <Image
                src={elem}
                alt={`${i}`}
                fill={true}
                style={{
                  objectFit: "cover",
                  objectPosition: "60%",
                }}
              />
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default GalleryRow;
