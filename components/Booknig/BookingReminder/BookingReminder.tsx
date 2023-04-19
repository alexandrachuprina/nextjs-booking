import React from "react";

import styles from "../../../styles/components/BookingReminder.module.scss";
import { JsxElement } from "typescript";

interface Props {
  header: string;
  description?: string;
  list?: string[];
}

function BookingReminder(props: Props) {
  return (
    <div className={styles.component}>
      <h2>{props.header}</h2>
      <div className={styles.line} />
      {props.list ? (
        <ul>
          {props.list.map((elem: string, i: number) => (
            <li key={i}><p>{elem}</p></li>
          ))}
        </ul>
      ) : (
        <p>{props.description}</p>
      )}
    </div>
  );
}

export default BookingReminder;
