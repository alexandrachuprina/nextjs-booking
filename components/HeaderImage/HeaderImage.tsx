import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "../../styles/components/HeaderImage.module.scss";
import button from "../../styles/buttons/HeaderButton.module.scss";

interface Props {
  header: string;
  image: StaticImageData;
  text?: string;
  icon?: StaticImageData;
  button?: string[];
}

function HeaderImage(props: Props) {
  return (
    <Row justify={"center"}>
      <Col span={24} flex={"1600px"}>
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
                <div className={styles.text}>
                  {props.icon ? (
                    <div className={styles.icon}>
                      <Image src={props.icon} alt="icon" fill={true} />
                    </div>
                  ) : null}
                  <p>{props.text}</p>
                </div>
                {props.button ? (
                  <div className={styles.buttons}>
                    {props.button.map((elem: any, i: number) => (
                      <button className={button.component} key={i}>
                        <p>{elem}</p>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default HeaderImage;
