import React from "react";

import styles from "../../../styles/components/AdditionalServices/Panel.module.scss";

const services = [
  {
    header: "",
    price: "",
    description: "",
    isChecked: false,
  },
  {
    header: "",
    price: "",
    description: "",
    isChecked: false,
  },
];

interface service {
  header: string;
  price: number;
  description: string;
  isChecked: boolean;
  isCollapsed: boolean;
  // handleCollapsePanel:
}

interface Services {
  data: service[];
}

function Panel(props: service) {
  return (
    <div className={styles.component}>
      <div className={styles.panel}>
        <div className={styles.price}></div>
        <h2>{props.header}</h2>
        <p>{props.price}</p>
      </div>
      {props.isCollapsed ? (
        <div className={styles.collapse}>
          <p>{props.description}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Panel;
