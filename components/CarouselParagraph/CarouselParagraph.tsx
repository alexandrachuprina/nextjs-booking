import React from 'react';
import { Row, Col } from 'antd';
import styles from '../../styles/components/CarouselParagraph.module.scss';


interface children {
  children: JSX.Element[]
}
function CarouselParagraph(props: children) {
  return (
    <Row>
      <Col>
      <div className={styles.component}>
        {props.children}
      </div>
      </Col>
    </Row>
  )
}

export default CarouselParagraph