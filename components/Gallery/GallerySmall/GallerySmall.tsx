import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import { StaticImageData } from "next/image";
import styles from "../../styles/components/Gallery/GallerySmall.module.scss";

interface Props {
  links: StaticImageData[];
}

function GallerySmall(props: Props) {
  return (
    <Row justify={"center"}>
      <Col span={24}>
        <div className={styles.component}>
          {props.links.map((elem: any, i: number) => (
            <div className={styles.image} key={i}>
              <Image src={elem} alt={`${i}`} fill={true} />
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default GallerySmall;
