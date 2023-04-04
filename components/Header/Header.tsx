import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import "../../styles/components/Header.module.scss";

import header from "../../assets/images/header.png";

import Navbar from "../Navbar";

// Font style, font weight
// Button

function Header() {
  return (
    <div className="component-header">
      <Image
        src={header}
        alt="header"
        quality="100"
        fill={true}
        priority
        style={{
          objectFit: "cover",
          objectPosition: "60%",
        }}
      />

      <Row justify={"center"} style={{height: '70vh'}}>
        <Col span={22}>
            <div className="header">
              <h2>Find peace in the Forest</h2>
              <div className="subheader">
                <p>
                  Come and stay in out hut hotel near Mariager Fjord in Denmark
                </p>
              </div>
            </div>

            <div className="button">
              <button className="bt-header">
                <p>Book now</p>
              </button>
            </div>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
