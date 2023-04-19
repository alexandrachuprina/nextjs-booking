import React, { useState } from "react";

import Panel from "../Panel";
import styles from "../../../styles/components/AdditionalServices/Services.module.scss";

interface service {
  header: string;
  price: number;
  description: string;
  isChecked: boolean;
}
[];

interface Services {
  data: service[];
}

const listOfServices: Services = {
  data: [
    {
      header: "",
      price: 200,
      description: "",
      isChecked: false,
    },
    {
      header: "",
      price: 300,
      description: "",
      isChecked: false,
    },
  ],
};

function Services() {
  const [data, setData] = useState<Services>(listOfServices);

  function handleCollapsePanel() {}
  function handleCheckPanel() {}

  return (
    <div className={styles.component}>
      {data.data.map((elem: any, i: number) => (
        <Panel
          key={i}
          header={elem.header}
          price={elem.price}
          description={elem.description}
          isChecked={elem.isChecked}
          isCollapsed={elem.isCollapsed}
          // handleCollapsePanel={handleCollapsePanel}
        />
      ))}
    </div>
  );
}

export default Services;
