import React, { useState } from "react";
import { Row, Col } from "antd";
import styles from "../../../styles/components/Carousel/CarouselText.module.scss";

interface data {
  id: number;
  header: string;
  link: string;
  description: string;
}

interface Props {
  data: data[];
}

function CarouselText(props: Props) {
  const [index, setIndex] = useState<number>(0);

  function handleClick(i: number) {
    setIndex(i);
  }

  return (
    <Row justify={"center"}>
      <Col span={22}>
        <div className={styles.component}>
          <h2>{props.data[0].header}</h2>
          <div className={styles.links}>
            {props.data.map((elem: any, i: number) => {
              if (elem.id === index) {
                return (
                  <div className={styles.underlined} key={i}>
                    <p onClick={() => handleClick(elem.id)}>{elem.link}</p>
                  </div>
                );
              } else {
                return (
                  <div key={i}>
                    <p onClick={() => handleClick(elem.id)}>{elem.link}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.description}>
            <p>{props.data[index].description}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default CarouselText;
