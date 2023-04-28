import React from 'react';
import Image from "next/image";
import styles from '../../../styles/buttons/ContactsButton.module.scss';
import button from "../../../styles/buttons/BookingButton.module.scss";
<<<<<<< HEAD
import contacts03 from '../../../assets/images/contacts03.png'
=======
import contacts03 from "../../../assets/images/contacts03.png";
import BookingButton from '@/components/BookingButton';
>>>>>>> develop

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
              <BookingButton
              text='Book now'
              price={3200}
              date='25.04.23'
              />
            </div>
  )
}

export default ContactsButton