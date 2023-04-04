import React from "react";

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
      <p>{props.link}</p>
    </>
  );
}

export default Paragraph;
