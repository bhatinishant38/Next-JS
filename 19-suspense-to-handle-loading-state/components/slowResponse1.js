import React from "react";

const SlowResponse1 = async () => {
  const slowResponse1 = await fetch("https://procodrr.vercel.app/?sleep=2000");
  const rawText = await slowResponse1.text();

  let data1;

  try {
    data1 = JSON.parse(rawText);
  } catch {
    data1 = rawText;
  }

  return <div>{typeof data1 === "string" ? data1 : JSON.stringify(data1)}</div>;
};

export default SlowResponse1;
