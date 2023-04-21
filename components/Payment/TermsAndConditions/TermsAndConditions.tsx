import React from "react";
import Link from "next/link";

import styles from "../../../styles/components/Payment/TermsAndConditions.module.scss";
import check from '../../../styles/checkbox/PanelCheckbox.module.scss';

function TermsAndConditions() {
  return (
    <div className={styles.component}>
      <div className={check.checkbox_wrapper_18}>
        <div className={check.round}>
          <input
            type="checkbox"
            id="checkbox_18"
          />
          <label htmlFor={"checkbox_18"}></label>
        </div>
      </div>
      <p>
        I have read and accept{" "}
        <Link href={"/conditions"}>Terms & Conditions</Link>
      </p>
    </div>
  );
}

export default TermsAndConditions;
