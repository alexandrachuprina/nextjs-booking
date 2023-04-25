import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "/styles/components/Paragraph.module.scss";

interface Props {
  header: string;
  longHeader?: string;
  description: string;
  link?: string;
  image?: StaticImageData;
  halfScreen?: boolean;
  reverse: boolean;
}

function Paragraph(props: Props) {
  return (
    <Row justify={"center"}>
      <Col span={24} flex={"1600px"}>
        <Row>
          {props.reverse ? (
            <>
              {props.image ? (
                <Col xs={24} sm={12} xl={12} flex={"800px"}>
                  <div className={styles.photo}>
                    <Image src={props.image} alt={props.header} fill={true} />
                  </div>
                </Col>
              ) : null}
              <Col xs={24} sm={12} xl={12} flex={"800px"}>
                <Row justify={"center"}>
                  <Col xs={24} sm={16}>
                    <div className={styles.component}>
                      <div className={styles.text}>
                        <h1>{props.longHeader}</h1>
                        <h2>{props.header}</h2>
                        <p>{props.description}</p>
                        <p>{props.link}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </>
          ) : (
            <>
              <Col xs={24} sm={12} xl={12} flex={"800px"}>
                <Row justify={"center"}>
                  <Col xs={22} sm={16}>
                    <div className={styles.component}>
                      <div className={styles.text}>
                        <h1>{props.longHeader}</h1>
                        <h2>{props.header}</h2>
                        <p>{props.description}</p>
                        <p className={styles.link}> {props.link}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              {props.image ? (
                <Col xs={24} sm={12} xl={12} flex={"800px"}>
                  <div className={styles.photo}>
                    <Image src={props.image} alt={props.header} fill={true} />
                  </div>
                </Col>
              ) : null}
            </>
          )}
        </Row>
      </Col>
    </Row>
  );
}

export default Paragraph;
