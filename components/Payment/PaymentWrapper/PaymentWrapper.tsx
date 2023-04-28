import React, { ReactChild } from "react";
import { Row, Col } from "antd";

import styles from "../../../styles/components/Payment/PaymentWrapper.module.scss";
import { JsxElement } from "typescript";

interface Props {
  children: ReactChild[];
}

function PaymentWrapper(props: Props) {
  return (
    <Row justify={"center"}>
      <Col span={24} flex={'1600px'}>
        <Row justify={'center'}>
          <Col xs={22} sm={22} lg={20} xl={20}>
            <div className={styles.component}>{props.children}</div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default PaymentWrapper;
