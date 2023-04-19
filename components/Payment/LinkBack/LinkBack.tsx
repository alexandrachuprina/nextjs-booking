import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../../styles/components/Payment/LinkBack.module.scss";
import arrow from "../../../assets/icons/arrowLeft.svg";

function LinkBack() {
  return (
    <Link href={"/booking/booking"}>
      <div className={styles.component}>
        <div className={styles.image}>
          <Image src={arrow} alt={"arrow"} fill={true} />
        </div>
        <p>Confirm & Pay</p>
      </div>
    </Link>
  );
}

export default LinkBack;
