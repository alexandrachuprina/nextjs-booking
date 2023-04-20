import React from "react";
import { Row, Col } from "antd";

import styles from '../styles/components/Conditions.module.scss';

function conditions() {
  return (
    <Row justify={"center"}>
      <Col xs={22}>
        <div className={styles.component}>
          <h2>
            This booking online agreement template is designed to be used in
            connection with an online booking facility for events, courses,
            workshops or similar, where the person or company operating the
            booking facility is the same person or company that will contract to
            arrange the event, course etc for the customer.
          </h2>
          <p>
            The template incorporates optional and flexible provisions providing
            for the variation of bookings by the organiser or a customer, and
            allowing for the cancellation of bookings by each party. This
            booking online agreement has been drafted to take account of UK
            consumer protection legislation, and is unsuitable for business
            customers (i.e. B2B transactions). The agreement should not be used
            (at least, without expert adaptation) in relation to services that
            are subject to special regulation - for example air transport or
            package holidays - or give rise to special risks.
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default conditions;
