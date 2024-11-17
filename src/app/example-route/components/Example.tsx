import React from "react";
import { exampleType } from "../types/example.type";

export default function Example(props: exampleType) {
  return <div>Response : {props.name}</div>;
}
