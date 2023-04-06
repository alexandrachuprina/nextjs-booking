import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import styles from "../../styles/components/Contacts.module.scss";
import button from  '../../styles/components/buttons/BookingButton.module.scss';

import contacts01 from "../../assets/images/contacts01.png";
import contacts02 from "../../assets/images/contacts02.png";
import contacts03 from "../../assets/images/contacts03.png";
import inst from "../../assets/icons/social/inst.svg";
import facebook from "../../assets/icons/social/facebook.svg";
import twitter from "../../assets/icons/social/twitter.svg";

function Contacts() {
  return (
    <div className={styles.component}>
      <Row justify={"center"}>
        <Col span={24}>
          <div className={styles.photos}>
            <div className={styles.photo}>
              <Image src={contacts01} alt={"contacts"} fill={true} />
            </div>
            <div className={styles.photo}>
              <Image src={contacts02} alt={"contacts"} fill={true} />
            </div>
          </div>
        </Col>
        <Col span={22}>
          <div className={styles.contacts}>
            <div className={styles.text}>
              <h2>Stay in touch with us</h2>
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
            <div className={styles.button}>
              <div className={styles.image}>
                <Image
                  src={contacts03}
                  alt={"contacts"}
                  fill={true}
                  style={{
                    objectFit: "cover",
                    objectPosition: "60%",
                  }}
                />
              </div>
              <button className={button.long}>
                <p>Book now</p>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contacts;
