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
      <Col span={22}>
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
