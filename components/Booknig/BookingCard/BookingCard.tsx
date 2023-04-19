import React from "react";

import styles from "../../../styles/components/BookingCard.module.scss";
import button from "../../../styles/buttons/BookingButton.module.scss";
import input from '../../../styles/inputs/CouponInput.module.scss';

function BookingCard() {
  return (
    <div className={styles.component}>
      <div className={styles.price}>
        <h2>3200kr</h2>
        <p>/ night</p>
      </div>

      <div className={styles.choice_panel}>
        <div className={styles.check_in}>
          <p>Check-in</p>
          <p>4/29/2021</p>
        </div>
        <div className={styles.check_out}>
          <p>Check-out</p>
          <p>4/29/2021</p>
        </div>
        <div className={styles.quests}>
          <p>Quests</p>
          <p>- 1 +</p>
        </div>
      </div>
      <button className={button.booking_card}>
        <p>Book</p>
      </button>
      <div className={styles.services_list}>
        <ul>
          <li>
            <p>3.200kr x 2 nights</p>
            <p> 6.400kr</p>
          </li>
          <li>
            <p>3.200kr x 2 nights</p>
            <p> 6.400kr</p>
          </li>
          <li>
            <p>3.200kr x 2 nights</p>
            <p> 6.400kr</p>
          </li>
          <li className={styles.discount}>
            <p>10% discount</p>
            <p>-200kr</p>
          </li>
        </ul>
      </div>
      <div className={styles.line} />
      <div className={styles.total_price}>
        <h2>Total</h2>
        <h2>7.000kr</h2>
      </div>
      <div className={styles.coupon_code}>
        <input type="text" className={input.component} />
        <button className={button.coupon}>
          <p>Apply</p>
        </button>
      </div>
    </div>
  );
}

export default BookingCard;
