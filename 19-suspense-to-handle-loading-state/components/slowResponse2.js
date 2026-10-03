import React from "react";

const SlowResponse2 = async () => {
  const slowResponse2 = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const rawText = await slowResponse2.text();

  let data2;

  try {
    data2 = JSON.parse(rawText);
  } catch {
    data2 = rawText;
  }

  return <div>{typeof data2 === "string" ? data2 : JSON.stringify(data2)}</div>;
};

export default SlowResponse2;
