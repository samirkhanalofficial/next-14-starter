import React from "react";

export default function Example({ title }: { title: string }) {
  return (
    <div className="p-5 m-5 border-green-300 border-2 bg-white text-black dark:bg-black dark:text-white rounded-lg ">
      Example of type : {title}
    </div>
  );
}
