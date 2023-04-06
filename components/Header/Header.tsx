import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import styles from "../../styles/components/Header.module.scss";
import button from  '../../styles/components/buttons/BookingButton.module.scss';
import header from "../../assets/images/header.png";

import Navbar from "../Navbar";

// Font style, font weight
// Button

function Header() {
  return (
      <div className={styles.component}>
        <Image
          src={header}
          alt="header"
          quality="100"
          fill={true}
          priority
          style={{
            objectFit: "cover",
            objectPosition: "60%",
          }}
        />

        <Row justify={"center"} style={{ height: "70vh" }}>
          <Col span={22}>
            <div className={styles.header}>
              <h2>Find peace in the Forest</h2>
              <div className={styles.subheader}>
                <p>
                  Come and stay in out hut hotel near Mariager Fjord in Denmark
                </p>
              </div>
            </div>

            <div className={styles.button}>
              <button className={button.component}>
                <p>Book now</p>
              </button>
            </div>
          </Col>
        </Row>
      </div>
  );
}

export default Header;
