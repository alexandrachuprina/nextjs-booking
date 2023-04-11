import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import styles from "../../../styles/components/Contacts/Contacts.module.scss";
import inst from "../../../assets/icons/social/inst.svg";
import facebook from "../../../assets/icons/social/facebook.svg";
import twitter from "../../../assets/icons/social/twitter.svg";

function Contacts() {
  return (
    <Row justify={"center"}>
      <Col span={22}>
        <div className={styles.component}>
          <div className={styles.contacts}>
            <div className={styles.text}>
              <p>Vesterborg, Denmark</p>
              <p>+123 456 789 000</p>
              <p>info@theglasshuts.com</p>
              <div className={styles.logos}>
                <div className={styles.logo}>
                  <Image src={inst} alt={"contacts"} fill={true} />
                </div>
                <div className={styles.logo}>
                  <Image src={facebook} alt={"contacts"} fill={true} />
                </div>
                <div className={styles.logo}>
                  <Image src={twitter} alt={"contacts"} fill={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Contacts;
