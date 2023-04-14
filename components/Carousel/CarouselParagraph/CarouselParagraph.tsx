import React from 'react';
import { Row, Col } from 'antd';
import styles from '../../../styles/components/Carousel/CarouselParagraph.module.scss';


interface children {
  children: JSX.Element[]
}
function CarouselParagraph(props: children) {
  return (
    <Row justify={'center'}>
      <Col xs={22} sm={20} lg={17}>
      <div className={styles.component}>
        {props.children}
      </div>
      </Col>
    </Row>
  )
}

export default CarouselParagraph;
