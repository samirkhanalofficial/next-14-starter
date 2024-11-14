"use client";
import React from "react";
import { GetExampleById } from "../service/example.service";

export default function Example() {
  const { response } = GetExampleById("1");
  return <div>Response : {response?.name}</div>;
}
