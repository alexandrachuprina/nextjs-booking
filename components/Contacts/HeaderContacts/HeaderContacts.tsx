import React from "react";
import { Row, Col } from "antd";
import styles from "../../../styles/components/HeaderContacts.module.scss";

interface Props {
  header: string;
}

function HeaderContacts(props: Props) {
  return (
    <Row justify={"center"}>
      <Col xs={22} sm={20} lg={17} xl={20}>
        <div className={styles.component}>
          <h2>{props.header}</h2>
        </div>
      </Col>
    </Row>
  );
}

export default HeaderContacts;
