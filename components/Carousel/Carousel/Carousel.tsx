import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import arrowLeft from '../../../assets/icons/arrowLeft.svg';
import arrowRight from '../../../assets/icons/arrowRight.svg';

import styles from '../../../styles/components/Carousel/Carousel.module.scss';

interface data {
  image: StaticImageData;
}

interface Props {
  data: data[];
}

function Carousel(props: Props) {
  const [index, setIndex] = useState<number>(0);

  function handleClickNext() {
    if (index != props.data.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleClickPrev() {
    if (index != 0) {
      setIndex(index - 1);
    } else {
      setIndex(props.data.length - 1);
    }
  }

  return (

        <div className={styles.component}>
          <div className={styles.image}>
            <Image src={props.data[index].image} alt="image" fill={true} style={{objectFit: 'cover'}}/>
          </div>
          <div className={styles.navigation}>

            <div className={styles.arrows}>
              <div className={styles.arrow} onClick={handleClickPrev}>
                 <Image src={arrowLeft} alt='arrow' fill={true}/>
              </div>
              <div className={styles.arrow} onClick={handleClickNext}>
              <Image src={arrowRight} alt='arrow' fill={true}/>
              </div>
            </div>

            <p>
              0{index + 1} —— 0{props.data.length}
            </p>


          </div>
        </div>
  );
}

export default Carousel;
