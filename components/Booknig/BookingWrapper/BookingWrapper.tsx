import React from "react";
import { Row, Col } from "antd";

import styles from "../../../styles/components/BookingWrapper.module.scss";

interface children {
  children: JSX.Element[] | JSX.Element;
}

function BookingWrapper(props: children) {
  return (
    <Row justify={"center"}>
      <Col xs={22} sm={23} lg={20} xl={20}>
        <div className={styles.component}>{props.children}</div>
      </Col>
    </Row>
  );
}

export default BookingWrapper;
