import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/components/Slider.module.scss";

import hut01 from "../../assets/images/hut01.png";
import hut02 from "../../assets/images/hut02.png";
import hut03 from "../../assets/images/hut03.png";
import hut04 from "../../assets/images/hut04.png";

// Type vs Interface?

// type photo = {
//   name: string,
//   link: string,
// }

const photos = [
  {
    name: "image1",
    link: hut01,
  },
  {
    name: "image2",
    link: hut02,
  },
  {
    name: "image3",
    link: hut03,
  },
  {
    name: "image4",
    link: hut04,
  },
];

// interface Photos {name: string, link: string}[] 

function Slider() {
  const [index, setIndex] = useState<number>(0);

  function handleClick() {
    if (index != (photos.length - 1)) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div className={styles.component}>
      <div className={styles.image}>
        {/* @ts-ignore */}
        <Image src={photos[index].link} alt={photos[index].name} fill={true} />
      </div>
      {/* @ts-ignore */}
      <p>{photos[index].name} </p>
      <p>{index + 1} of {photos.length}</p>
      <button onClick={handleClick}>
        <p>Next</p>
      </button>
    </div>
  );
}

export default Slider;
