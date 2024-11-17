"use server";
import React from "react";
import { exampleType } from "./types/example.type";
import { getExampleById } from "./service/example.service";
import Example from "./components/Example";

export default async function page() {
  const response: exampleType = await getExampleById("asdhf2ghafd");
  if (!response) return <div>Not found Component </div>;
  return (
    <>
      <Example {...response} />
      <Example {...response} />
      <Example {...response} />
    </>
  );
}
