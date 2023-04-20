import React from 'react';

import styles from '../../../styles/components/Payment/AdditionalInfo.module.scss';

function AdditionalInfo() {
  return (
    <div className={styles.component}>
      <h2>Additional info</h2>
      <div className={styles.line}/>
      <textarea className={styles.message} rows={5} placeholder='Leave a message'/>
    </div>
  )
}

export default AdditionalInfo;