import React from "react";
import { BuyNowCard } from "../components/BuyNowCard";
import { WideCard } from "../components/WideCard";

export const Cards = () => {
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        width: "100vw",
        height: "100%",
      }}
    >
      <WideCard variant="jazzman" />
      <WideCard variant="jazzman" light={false} />
      <WideCard variant="girl" />
      <WideCard variant="girl" light={false} />
      <WideCard variant="watering" />
      <WideCard variant="watering" light={false} />
      <BuyNowCard/>
      <BuyNowCard extended/>
    </div>
  );
};
