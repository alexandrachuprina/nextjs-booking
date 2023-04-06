import React, { useState } from "react";
import styles from "../../styles/components/TextSlider.module.scss";

const data = [
  {
    id: 0,
    header: "1",
    description: "a",
  },
  {
    id: 1,
    header: "2",
    description: "b",
  },
];

function TextSlider() {
  const [index, setIndex] = useState<number>(0);

  function handleClick(i: number) {
    setIndex(i);
    // console.log(i)
  }
  return (
    <div className={styles.component}>
      <div className={styles.headers}>
        {data.map((elem: any, i: number) => {
          if (elem.id === index) {
            return (
              <div className={styles.red} key={i}>
                <p onClick={() => handleClick(elem.id)}>{elem.header}</p>
              </div>
            );
          } else {
            return (
              <div className={styles.null} key={i}>
                <p onClick={() => handleClick(elem.id)}>{elem.header}</p>
              </div>
            );
          }
        })}
      </div>
      <div className={styles.description}>
        <p>{data[index].description}</p>
      </div>
    </div>
  );
}

export default TextSlider;
