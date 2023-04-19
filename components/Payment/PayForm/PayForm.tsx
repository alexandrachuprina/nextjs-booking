import React from "react";
import Image from "next/image";

import styles from "../../../styles/components/Payment/PayForm.module.scss";
import input from "../../../styles/inputs/PaymentFormInput.module.scss";

import paypal from "../../../assets/icons/socialDark/paypal.svg";
import mastercard from "../../../assets/icons/socialDark/mastercard.svg";
import visa from "../../../assets/icons/socialDark/visa.svg";
import bank from "../../../assets/icons/socialDark/bank.svg";

const logos = [paypal, mastercard, visa, bank];

function PayForm() {
  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <h2>Pay with</h2>
        <div className={styles.logos}>
          {logos.map((elem: any, i: number) => (
            <div className={styles.image} key={i}>
              <Image src={elem} alt={`${elem}`} fill={true} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.form}>
        <input
          type="text"
          className={input.component}
          placeholder="Credit or debit card"
        />
        <input
          type="number"
          className={input.component}
          placeholder="Card number"
        />
        <div className={styles.card_details}>
          <input
            type="text"
            className={input.component}
            placeholder="Expiration"
          />
          <input type="number" className={input.component} placeholder="CCV" />
        </div>
        <input type="text" className={input.component} placeholder="ZIP code" />
        <input type="text" className={input.component} placeholder="Country" />
      </div>
    </div>
  );
}

export default PayForm;

