import React from "react";
import { Row, Col } from "antd";
import styles from "../../styles/components/CotactsForm.module.scss";
import input from '../../styles/components/inputs/ContactsFromInput.module.scss';

function ContactsForm() {
  return (
    <Row justify={"center"}>
      <Col span={22}>
        <div className={styles.component}>
          <div className={styles.fullname}>
            <input className={input.component} type="text" placeholder="First Name" />
            <input className={input.component} type="text" placeholder="Last Name" />
          </div>
          <input className={input.component} type="email" placeholder="Email" />
          <input className={input.component} type="text" placeholder="Subject" />
          <textarea className={styles.textarea} name="" id="01" placeholder="Message" />
        </div>
      </Col>
    </Row>
  );
}

export default ContactsForm;