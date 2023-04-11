import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import logo from "../../../assets/icons/fromDenmark.svg";
import styles from "../../../styles/components/Contacts/ContactsLogo.module.scss";

function ContactsLogo() {
  return (
    <Row justify={"center"}>
      <Col span={22}>
        <div className={styles.component}>
          <div className={styles.image}>
            <Image src={logo} alt="logo" fill={true} />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ContactsLogo;
