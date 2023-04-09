import React, { useState } from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import styles from "../../styles/components/Carousel.module.scss";
import { StaticImageData } from "next/image";

interface data {
  image: StaticImageData;
}

interface Props {
  data: data[];
}

function Carousel(props: Props) {
  const [index, setIndex] = useState<number>(0);

  function handleClickNext() {
    if (index != props.data.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleClickPrev() {
    if (index != 0) {
      setIndex(index - 1);
    } else {
      setIndex(props.data.length - 1);
    }
  }

  return (
    <Row justify={"center"}>
      <Col span={22}>
        <div className={styles.component}>
          <div className={styles.image}>
            <Image
              src={props.data[index].image}
              alt='image'
              fill={true}
            />
          </div>
          <button onClick={handleClickNext}>
            <p>Next</p>
          </button>
          <button onClick={handleClickPrev}>
            <p>Prev</p>
          </button>
          <p>
            {index + 1} of {props.data.length}
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Carousel;
