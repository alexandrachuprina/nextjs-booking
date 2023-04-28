import React from "react";
import Image from "next/image";

import styles from "../../../styles/components/AdditionalServices/Panel.module.scss";
import check from '../../../styles/checkbox/PanelCheckbox.module.scss';
import icon from '../../../assets/icons/collapseArow.svg';

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
          <div className={check.checkbox_wrapper_18}>
            <div className={check.round}>
              <input type="checkbox" id={`${props.id}`} onChange={() => props.handleCheckPanel(props.id)}/>
              <label htmlFor={`${props.id}`}></label>
            </div>
          </div>
          <div className={styles.header}>
            <h2>{props.header}</h2>
            <div className={styles.price}>
              <p>{props.price}</p>
              <p>kr</p>
            </div>
          </div>
        </div>

        <div className={styles.image} onClick={() => props.handleCollapsePanel(props.id)}>
          <Image src={icon} alt={'arrow'} fill={true}/>
        </div>

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
