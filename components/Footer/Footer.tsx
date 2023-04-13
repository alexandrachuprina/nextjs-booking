import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import styles from "../../styles/components/Footer.module.scss";
import input from "../../styles/inputs/FooterInput.module.scss";

import paypal from "../../assets/icons/social/paypal.svg";
import mastercard from "../../assets/icons/social/mastercard.svg";
import visa from "../../assets/icons/social/visa.svg";
import bank from "../../assets/icons/social/bank.svg";

function Footer() {
  return (
    <div className={styles.component}>
      <Row justify={"center"}>
        <Col span={22}>
          <div className={styles.footer}>
            <div className={styles.newsletter}>
              <h2>Newsletter</h2>
              <input className={input.component} type="text" />
              <p>
                Sign up to our newsletter for special things and receive 10% off
                your next order.
              </p>
            </div>
            <div className={styles.text}>
              <div className={styles.docs}>
                <div className={styles.list}>
                  <p>TERMS AND CONDITIONS</p>
                  <p>CENCELLATION POLICY</p>
                  <p>PRIVACY POLICY</p>
                </div>

                <div className={styles.logos}>
                  <div className={styles.logo}>
                    <Image src={paypal} alt={"contacts"} fill={true} />
                  </div>
                  <div className={styles.logo}>
                    <Image src={mastercard} alt={"contacts"} fill={true} />
                  </div>
                  <div className={styles.logo}>
                    <Image src={visa} alt={"contacts"} fill={true} />
                  </div>
                  <div className={styles.logo}>
                    <Image src={bank} alt={"contacts"} fill={true} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.copyright}>
                <p>© 2023 The Glass Huts</p>
              </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
