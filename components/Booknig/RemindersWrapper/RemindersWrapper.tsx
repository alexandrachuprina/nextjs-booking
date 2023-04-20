import React from "react";
import { JsxElement } from "typescript";
import { ReactChild } from "react";

interface Props {
  children: ReactChild[] | ReactChild;
}

function RemindersWrapper(props: Props) {
  return <div style={{display: 'flex', flexDirection: 'column'}}>{props.children}</div>;
}

export default RemindersWrapper;
