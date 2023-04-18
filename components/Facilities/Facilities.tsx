import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import styles from "../../styles/components/Facilities.module.scss";

import fridge from "../../assets/icons/facilities/fridge.svg";
import kitchen from "../../assets/icons/facilities/kitchen.svg";
import coffee from "../../assets/icons/facilities/coffee.svg";
import catle from "../../assets/icons/facilities/catle.svg";
import parking from "../../assets/icons/facilities/park.svg";
import trees from "../../assets/icons/facilities/trees.svg";
import temperature from "../../assets/icons/facilities/temperature.svg";
import plug from "../../assets/icons/facilities/plug.svg";
import wifi from "../../assets/icons/facilities/wifi.svg";
import shower from "../../assets/icons/facilities/shower.svg";
import toilet from "../../assets/icons/facilities/toilet.svg";
import towels from "../../assets/icons/facilities/towels.svg";


function Facilities() {
  return (
    <div className={styles.component}>
      <Row justify={"center"}>
        <Col xs={22} sm={20} lg={20} xl={18}>
          <div className={styles.header}>
            <h2>Facilities</h2>
          </div>
          <div className={styles.facilities}>
            <div className={styles.facility}>
              <div className={styles.image}>
                <Image src={fridge} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className={styles.text}>
                <p>Mini fridge</p>
              </div>
            </div>
            <div className={styles.facility}>
              <div className={styles.image}>
                <Image src={kitchen} alt={"kitchen"} fill={true} />
              </div>
              <div className={styles.text}>
                <p>Kitchen</p>
              </div>
            </div>
            <div className={styles.facility}>
              <div className={styles.image}>
                <Image src={coffee} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className={styles.text}>
                <p>Coffee</p>
              </div>
            </div>
            <div className={styles.facility}>
              <div className={styles.image}>
                <Image src={catle} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className={styles.text}>
                <p>Catle</p>
              </div>
            </div>
            <div className={styles.facility}>
              <div className={styles.image}>
                <Image src={parking} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className={styles.text}>
                <p>Parking</p>
              </div>
            </div>
            <div className={styles.facility}>
              <div className={styles.image}>
                <Image src={trees} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className={styles.text}>
                <p>Trees</p>
              </div>
            </div>
            <div className={styles.facility}>
              <div className={styles.image}>
                <Image src={temperature} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className={styles.text}>
                <p>Temperature</p>
              </div>
            </div>
            <div className={styles.facility}>
              <div className={styles.image}>
                <Image src={plug} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className={styles.text}>
                <p>230V</p>
              </div>
            </div>
            <div className={styles.facility}>
              <div className={styles.image}>
                <Image src={wifi} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className={styles.text}>
                <p>wi-fi</p>
              </div>
            </div>
            <div className={styles.facility}>
              <div className={styles.image}>
                <Image src={shower} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className={styles.text}>
                <p>shower</p>
              </div>
            </div>
            <div className={styles.facility}>
              <div className={styles.image}>
                <Image src={toilet} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className={styles.text}>
                <p>toilet</p>
              </div>
            </div>
            <div className={styles.facility}>
              <div className={styles.image}>
                <Image src={towels} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className={styles.text}>
                <p>towels</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Facilities;
