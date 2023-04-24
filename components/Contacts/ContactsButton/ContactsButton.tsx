import React from 'react';
import Image from "next/image";
import styles from '../../../styles/buttons/ContactsButton.module.scss';
import button from "../../../styles/buttons/BookingButton.module.scss";
import contacts03 from '../../../assets/images/contacts03.png'

function ContactsButton() {
  return (
      <div className={styles.button}>
              <div className={styles.image}>
                <Image
                  src={contacts03}
                  alt={"contacts"}
                  fill={true}
                  style={{
                    objectFit: "cover",
                    objectPosition: "60%",
                  }}
                />
              </div>
              <button className={button.long}>
                <p>Book now</p>
              </button>
            </div>
  )
}

export default ContactsButton