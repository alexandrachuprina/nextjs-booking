import React, { useMemo } from "react";
import { Row, Col } from "antd";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

import paragraph from "../../styles/components/Paragraph.module.scss";
import styles from "/styles/components/Map.module.scss";

interface Props {
  fullScreen: boolean;
}

function Map(props: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) {
    console.log("done!");
    return <p style={{ backgroundColor: "red" }}>Loading...</p>;
  }

  return (
    <>
      {props.fullScreen ? (
        <Row justify={"center"}>
          <Col span={24} flex={"1600px"}>
            <GoogleMap
              zoom={14}
              center={{ lat: 56.0905754, lng: 10.212895 }}
              options={{ disableDefaultUI: true }}
              mapContainerClassName={styles.mapfullscreen}
            />
          </Col>
        </Row>
      ) : (
        <Row justify={"center"}>
          <Col span={24} flex={"1600px"}>
            <div className={styles.component}>
              <Row>
                <Col xs={24} sm={12}>
                  <GoogleMap
                    zoom={14}
                    center={{ lat: 56.0905754, lng: 10.212895 }}
                    options={{ disableDefaultUI: true }}
                    mapContainerClassName={styles.map}
                  />
                </Col>

                <Col xs={24} sm={12}>
                  <Row justify={"center"}>
                    <Col xs={22} sm={16} lg={14}>
                      <div className={paragraph.component}>
                        <div className={paragraph.text}>
                          <h2>The Forest</h2>
                          <p>
                            Løvtags three exclusive and comfortable cabins, Et,
                            Ro and Ly, are designed by architect Sigurd Larsen.
                            They all have an open space with a double bed, a
                            double sofa bed, kitchen, separate toilet and an
                            outdoor shower. On the roof, surrounded by treetops,
                            there is a terrace, which is about nine meters above
                            ground. The cottages are built around tall, old
                            trees that go through the entire cottage from floor
                            to ceiling.
                          </p>
                          <p className={paragraph.link}>Read more</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
}

export default Map;
