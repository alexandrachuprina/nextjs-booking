import React from "react";
import { Row, Col } from "antd";
import styles from "../../../styles/components/Contacts/ContactsWrapper.module.scss";

interface children {
  children: JSX.Element[] | JSX.Element;
}

function ContactsWrapper(props: children) {
  return (
    <Row justify={"center"}>
      <Col xs={22} sm={20} lg={17} xl={20}>
        <div className={styles.component}>{props.children}</div>
      </Col>
    </Row>
  );
}

export default ContactsWrapper;
