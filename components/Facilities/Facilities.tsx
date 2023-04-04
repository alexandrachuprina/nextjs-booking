import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import "../../styles/components/Facilities.module.scss";

import fridge from "../../assets/icons/facilities/fridge.svg";
import kitchen from "../../assets/icons/facilities/kitchen.svg";
import coffee from "../../assets/icons/facilities/coffee.svg";
import catle from "../../assets/icons/facilities/catle.svg";

function Facilities() {
  return (
    <div className="component-facilities">
      <Row justify={"center"}>
        <Col span={22}>
          <div className="facilities">
            <div className="facility">
              <div className="image">
                <Image src={fridge} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className="text">
                <p>Mini fridge</p>
              </div>
            </div>

            <div className="facility">
              <div className="image">
                <Image src={kitchen} alt={"kitchen"} fill={true} />
              </div>
              <div className="text">
                <p>Kitchen</p>
              </div>
            </div>

            <div className="facility">
              <div className="image">
                <Image src={coffee} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className="text">
                <p>Coffee</p>
              </div>
            </div>

            <div className="facility">
              <div className="image">
                <Image src={catle} alt={"Mini-fridge"} fill={true} />
              </div>
              <div className="text">
                <p>Catle</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Facilities;
