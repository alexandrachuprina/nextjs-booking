import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import "../../styles/components/Main.module.scss";

import main01 from "../../assets/images/main01.png";
import main02 from "../../assets/images/main02.png";
import main03 from "../../assets/images/main03.png";
import main04 from "../../assets/images/main04.png";

// Format scss

function Main() {
  return (
    <div className="component-main">
      <Row justify={"center"}>
        <Col span={22}>
          <div className="main">
            <div className="paragraph">
              <div className="text">
                <h2>The Cabins</h2>
                <p>
                  Løvtags three exclusive and comfortable cabins, Et, Ro and Ly,
                  are designed by architect Sigurd Larsen. They all have an open
                  space with a double bed, a double sofa bed, kitchen, separate
                  toilet and an outdoor shower. On the roof, surrounded by
                  treetops, there is a terrace, which is about nine meters above
                  ground. The cottages are built around tall, old trees that go
                  through the entire cottage from floor to ceiling.
                </p>
                <a href="#">
                  <p>Read more</p>
                </a>
              </div>
              <div className="image-pharagraph">
                <Image
                  src={main01}
                  alt={"main01"}
                  fill={true}
                  priority
                  style={{
                    objectFit: "cover",
                    objectPosition: "60%",
                  }}
                />
              </div>
            </div>
            <div className="photos">
              <div className="image">
                <Image
                  src={main02}
                  alt={"main02"}
                  fill={true}
                  style={{
                    objectFit: "cover",
                    objectPosition: "60%",
                  }}
                />
              </div>
              <div className="image">
                <Image
                  src={main03}
                  alt={"main03"}
                  fill={true}
                  style={{
                    objectFit: "cover",
                    objectPosition: "60%",
                  }}
                />
              </div>
              <div className="image">
                <Image
                  src={main04}
                  alt={"main04"}
                  fill={true}
                  style={{
                    objectFit: "cover",
                    objectPosition: "60%",
                  }}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Main;
