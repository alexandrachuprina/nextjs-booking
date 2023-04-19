import React from 'react';

import styles from '../../../styles/components/Payment/PersonalForm.module.scss';
import input from '../../../styles/inputs/PaymentFormInput.module.scss';

function PersonalForm() {
  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <h2>Personal info</h2>
      </div>
      <div className={styles.line}/>
      <div className={styles.form}>
        <input type="text" className={input.component} placeholder='First Name'/>
        <input type="text" className={input.component} placeholder='Last Name'/>
        <input type="email" className={input.component} placeholder='Email'/>
        <input type="phone" className={input.component} placeholder='Phone'/>
        <input type="text" className={input.component} placeholder='Adress'/>
        <input type="text" className={input.component} placeholder='Postal Code'/>
        <input type="text" className={input.component} placeholder='City'/>
        <input type="text" className={input.component} placeholder='Country'/>
      </div>
    </div>
  )
}

export default PersonalForm