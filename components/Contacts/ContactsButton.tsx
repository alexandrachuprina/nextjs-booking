import React from 'react';
import { Row, Col } from "antd";
import Image from "next/image";
import styles from '../../styles/components/buttons/ContactsButton.module.scss';
import button from "../../styles/components/buttons/BookingButton.module.scss";
import contacts03 from "../../assets/images/contacts03.png";

function ContactsButton() {
  return (
    <Row justify={'center'}>
      <Col span={22}>
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
      </Col>
    </Row>
  )
}

export default ContactsButton