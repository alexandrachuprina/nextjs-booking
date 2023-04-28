import React from "react";

import styles from "../../styles/buttons/BookingButton.module.scss";

interface Props {
  text: string;
  price: number;
  date: string;
}

function BookingButton(props: Props) {
  return (
    <div className={styles.header_button}>
      <button className={styles.header_button_book_now}>
        <p>{props.text}</p>
      </button>
      <div className={styles.header_button_price}>
        <div className={styles.text}>
          <p>from {props.date}</p>
          <p className={styles.price}>€{props.price}</p>
          <p>per night</p>
        </div>
      </div>
    </div>
  );
}

export default BookingButton;
