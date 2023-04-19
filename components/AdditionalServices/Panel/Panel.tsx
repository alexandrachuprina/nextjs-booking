import React from "react";

import styles from "../../../styles/components/AdditionalServices/Panel.module.scss";
import input from "../../../styles/inputs/PanelInput.module.scss";

type handleCollapseFunction = (a: number) => void;
type handleCheckFunction = (a: number) => void;

interface service {
  id: number;
  header: string;
  price: number;
  description: string;
  isChecked: boolean;
  isCollapsed: boolean;
  handleCollapsePanel: handleCollapseFunction;
  handleCheckPanel: handleCheckFunction;
}

function Panel(props: service) {
  return (
    <div className={styles.component}>
      <div className={styles.panel}>
        <div className={styles.panel_info}>
          <input
            className={input.component}
            type="checkbox"
            checked={props.isChecked}
            onClick={() => props.handleCheckPanel(props.id)}
          />
          <div className={styles.header}>
            <h2>{props.header}</h2>
            <div className={styles.price}>
              <p>{props.price}</p>
              <p>kr</p>
            </div>
          </div>
        </div>

        <p
          className={styles.collapse_btn}
          onClick={() => props.handleCollapsePanel(props.id)}
        >
          Collapse me
        </p>
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
