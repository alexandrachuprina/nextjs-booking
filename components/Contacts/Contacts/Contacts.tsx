import React from "react";
import Image from "next/image";
import styles from "../../../styles/components/Contacts/Contacts.module.scss";
import inst from "../../../assets/icons/social/inst.svg";
import facebook from "../../../assets/icons/social/facebook.svg";
import twitter from "../../../assets/icons/social/twitter.svg";

function Contacts() {
  return (
    <div className={styles.component}>
      <div className={styles.contacts}>
        <div className={styles.text}>
          <p>Vesterborg, Denmark</p>
          <a href={`tel: ${+123456789000}`}>
            <p>+123 456 789 000</p>
          </a>
          <a href="#">
            <p>info@theglasshuts.com</p>
          </a>
          <div className={styles.logos}>
            <div className={styles.logo}>
              <Image src={inst} alt={"contacts"} fill={true} />
            </div>
            <div className={styles.logo}>
              <Image src={facebook} alt={"contacts"} fill={true} />
            </div>
            <div className={styles.logo}>
              <Image src={twitter} alt={"contacts"} fill={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
