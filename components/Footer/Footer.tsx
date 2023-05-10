import React from "react";
import Link from "next/link";
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
        <div className={styles.background}>
    <Row justify={"center"} style={{ marginTop: "auto" }}>
      <Col span={24} flex={"1600px"}>
          <Row justify={"center"}>
            <Col xs={22} sm={20} lg={17} xl={20}>
              <div className={styles.footer}>
                <div className={styles.newsletter}>
                  <h2>Newsletter</h2>
                  <input className={input.component} type="text" placeholder="Email Adress"/>
                  <p>
                    Sign up to our newsletter for special things and receive 10%
                    off your next order.
                  </p>
                </div>

                <div className={styles.text}>
                  <div className={styles.list}>
                    <Link href={"/faq"}>
                      <p>TERMS AND CONDITIONS</p>
                    </Link>
                    <Link href={"/faq"}>
                      <p>CENCELLATION POLICY</p>
                    </Link>
                    <Link href={"/faq"}>
                      <p>PRIVACY POLICY</p>
                    </Link>
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

                <div className={styles.copyright}>
                  <p>© 2023 The Glass Huts</p>
                </div>
              </div>
            </Col>
          </Row>
      </Col>
    </Row>
        </div>
  );
}

export default Footer;

