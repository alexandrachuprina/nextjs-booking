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
  reverse: boolean;
}

function Paragraph(props: Props) {
  return (
    <Row justify={"center"}>
      <Col xs={22} sm={20} lg={17} xl={20} xxl={16}>
        <div className={styles.component}>
          {props.reverse ? (
            <>
              {props.image ? (
                <div className={styles.photo}>
                  <Image src={props.image} alt={props.header} fill={true} />
                </div>
              ) : null}
              <div className={styles.text}>
              <h1>{props.longHeader}</h1>
                <h2>{props.header}</h2>
                <p>{props.description}</p>
                <p>{props.link}</p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.text}>
                <h1>{props.longHeader}</h1>
                <h2>{props.header}</h2>
                <p>{props.description}</p>
                <p className={styles.link}> {props.link}</p>
              </div>
              {props.image ? (
                <div className={styles.photo}>
                  <Image src={props.image} alt={props.header} fill={true} />
                </div>
              ) : null}
            </>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default Paragraph;
