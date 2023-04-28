import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "antd";
import { StaticImageData } from "next/image";
import styles from "../../../styles/components/Gallery/GallerySmall.module.scss";

interface Props {
  links: StaticImageData[];
}

function GallerySmall(props: Props) {
  return (
    <Row justify={"center"}>
      <Col span={24} flex={"1600px"}>
        <div className={styles.round_button_parent}>
          <div className={styles.round_button_child }>
            <Link href={"/about"}>
              <p>More about us</p>
            </Link>
          </div>
        </div>
        <Row>
          {props.links.map((elem: any, i: number) => (
            <Col xs={24} sm={12} key={i}>
              <div className={styles.image}>
                <Image
                  src={elem}
                  alt={`${i}`}
                  fill={true}
                  style={{
                    objectFit: "cover",
                    objectPosition: "30%",
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default GallerySmall;
