import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import { StaticImageData } from "next/image";
import styles from "/styles/components/Quote.module.scss";

interface Props {
  quote: string;
  image?: StaticImageData;
}

function Quote(props: Props) {
  return (
    <Row justify={"center"}>
      <Col span={24} flex={"1600px"}>
        <Row justify={"center"}>
          <Col xs={22} sm={20} lg={17}>
            {props.image ? (
              <div className={styles.component}>
                <h1>{props.quote}</h1>

                {props.image ? (
                  <div className={styles.image}>
                    <Image
                      src={props.image}
                      alt={"image"}
                      fill={true}
                      style={{
                        objectFit: "cover",
                        objectPosition: "60%",
                      }}
                    />
                  </div>
                ) : null}
              </div>
            ) : (
              <div className={styles.text}>
                <h1>{props.quote}</h1>
              </div>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Quote;
