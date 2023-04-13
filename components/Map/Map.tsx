import React, { useMemo } from "react";
import { Row, Col } from "antd";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

import Paragraph from "../Paragraph/Paragraph";
import styles from "/styles/components/Map.module.scss";

interface Props {
  fullScreen: boolean;
}

function Map(props: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAnwpDzhrhg-Y_FNZo51MJ2TL3qkLTKZGQ",
  });
  // const key = "AIzaSyAnwpDzhrhg-Y_FNZo51MJ2TL3qkLTKZGQ";

  if (!isLoaded) {
    console.log("done!");
    return <p style={{ backgroundColor: "red" }}>Loading...</p>;
  }

  return (
  
      <div className={styles.component}>
        {props.fullScreen ? (
          <GoogleMap
            zoom={14}
            center={{ lat: 56.0905754, lng: 10.212895 }}
            options={{ disableDefaultUI: true }}
            mapContainerClassName={styles.mapfullscreen}
          />
        ) : (
          <GoogleMap
            zoom={14}
            center={{ lat: 56.0905754, lng: 10.212895 }}
            options={{ disableDefaultUI: true }}
            mapContainerClassName={styles.map}
          />
        )}
  
          <div className={styles.paragraph}>
            <Paragraph
              header="The Forest"
              description="Løvtags three exclusive and comfortable cabins, Et, Ro 
              and Ly, are designed by architect Sigurd Larsen. They all have an open 
              space with a double bed, a double sofa bed, kitchen, separate toilet and 
              an outdoor shower. On the roof, surrounded by treetops, there is a terrace, 
              which is about nine meters above ground. The cottages are built around tall, 
              old trees that go through the entire cottage from floor to ceiling."
              link="Read more"
              reverse={false}
            />
          </div>
       
      </div>
 
  );
}

export default Map;
