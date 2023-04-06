import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import styles from "../../styles/components/Quote.module.scss";

interface Props {
  quote: string;
  image?: string;
}

function Quote(props: Props) {
  return (
    <Row justify={"center"}>
      <Col span={22}>
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
      </Col>
    </Row>
  );
}

export default Quote;
