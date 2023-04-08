import React from 'react';
import { Row, Col } from 'antd';
import styles from '../../styles/components/GalleryGrid.module.scss';

interface Props {
  image01?: string,
  image02?: string,
  image03?: string,
  image04?: string,
}

function GalleryGrid(props: Props) {
  console.log("props")
  console.log(props)
  return (
    <Row justify={'center'}>
      <Col span={22}>
        <div className={styles.component}>

        </div>
      </Col>
    </Row>
  )
}

export default GalleryGrid