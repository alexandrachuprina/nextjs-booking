import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import styles from "../../styles/components/ParagraphSlider.module.scss";

interface Props {
  header: string;
  description: string;
  link: string;
  image: string;
  reverse: boolean;
}

function ParagraphSlider(props: Props) {
  return (
    <Row justify={"center"}>
      <Col span={22}>
        {props.reverse ? (
          <>
            <div className={styles.component}>
              <div className={styles.text}>
                <h2>{props.header}</h2>
                <p>{props.link}</p>
                <p>{props.description}</p>
              </div>
              <div className={styles.photos}>
                <div className={styles.photo}>
                  <Image src={props.image} alt={props.header} fill={true} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.component}>
              <div className={styles.photos}>
                <div className={styles.photo}>
                  <Image src={props.image} alt={props.header} fill={true} />
                </div>
              </div>
              <div className={styles.text}>
                <h2>{props.header}</h2>
                <p>{props.link}</p>
                <p>{props.description}</p>
              </div>
            </div>
          </>
        )}
      </Col>
    </Row>
  );
}

export default ParagraphSlider;
