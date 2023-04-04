import React from "react";
import "../../styles/components/Paragraph.module.scss";

interface Props {
  header: string;
  description: string;
  link: string;
}

function Paragraph(props: Props) {
  return (
      <>
      <h2>{props.header}</h2>
      <p>{props.description}</p>
      <a href="#">
        <p>{props.link}</p>
      </a>
  </>
  );
}

export default Paragraph;

