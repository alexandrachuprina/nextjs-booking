import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "antd";
import styles from "../../styles/components/Header.module.scss";
import button from "../../styles/buttons/BookingButton.module.scss";
import header from "../../assets/images/header.png";
import BookingButton from "../BookingButton";

function Header() {
  return (
    <Row justify={"center"}>
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
          <Col xs={22} sm={20} lg={17} xl={23} flex={"1600px"}>
            <div className={styles.header}>
              <p>Find peace in the Forest</p>
              <div className={styles.subheader}>
                <p>
                  Come and stay in out hut hotel near Mariager Fjord in Denmark
                </p>
              </div>
            </div>

            <div className={styles.button}>
              <Link href={"/booking/booking"}>
                <BookingButton
                text="Book now"
                price={3200}
                date="25.04.23"
                />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Row>
  );
}

export default Header;
