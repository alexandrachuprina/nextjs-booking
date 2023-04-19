import React, { useState } from "react";

import Panel from "../Panel";
import { Services } from "@/assets/listofServices";
import { listOfServices } from "@/assets/listofServices";
import styles from "../../../styles/components/AdditionalServices/Services.module.scss";


function Services() {
  const [data, setData] = useState<Services>(listOfServices);

  function handleCollapsePanel(id: number) {
    const newData = data.data;
    const newInfo = [...newData];
    const checkedPanel: any = newInfo.find((elem) => elem.id === id);
    checkedPanel.isCollapsed = !checkedPanel.isCollapsed;
    setData({data: newInfo})
  }
  function handleCheckPanel(id: number) {
    const newData = data.data;
    const newInfo = [...newData];
    const checkedPanel: any = newInfo.find((elem) => elem.id === id);
    checkedPanel.isChecked = !checkedPanel.isChecked;
    setData({data: newInfo})
  }

  return (
    <div className={styles.component}>
      {data.data.map((elem: any, i: number) => (
        <Panel
          id={elem.id}
          key={i}
          header={elem.header}
          price={elem.price}
          description={elem.description}
          isChecked={elem.isChecked}
          isCollapsed={elem.isCollapsed}
          handleCollapsePanel={handleCollapsePanel}
          handleCheckPanel={handleCheckPanel}
        />
      ))}
    </div>
  );
}

export default Services;
