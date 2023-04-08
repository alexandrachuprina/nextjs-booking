import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import styles from "../../styles/components/HeaderImage.module.scss";

interface Props {
  header: string;
  image: string;
}

function HeaderImage(props: Props) {
  return (
    <div className={styles.component}>
      <Image
        src={props.image}
        alt={props.header}
        fill={true}
        style={{
          objectFit: "cover",
          objectPosition: "60%",
        }}
      />
      <Row justify={"center"}>
        <Col span={22}>
          <div className={styles.header}>
            <h2>{props.header}</h2>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderImage;
