import React from "react";

interface Props {
  header: string;
  description: string;
  link: string;
}

function ParagraphSlider(props: Props) {
  return (
    <>
      <h2>{props.header}</h2>
      <p>{props.description}</p>
      <p>{props.link}</p>
    </>
  );
}

export default ParagraphSlider;
