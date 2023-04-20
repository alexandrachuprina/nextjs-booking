import React from 'react';
import Link from 'next/link';

import styles from '../../../styles/components/Payment/TermsAndConditions.module.scss';

function TermsAndConditions() {
  return (
    <div className={styles.component}>
      <input type="checkbox" className={styles.checkbox} />
      <p>I have read and accept <Link href={'/conditions'}>Terms & Conditions</Link></p>
    </div>
  )
}

export default TermsAndConditions