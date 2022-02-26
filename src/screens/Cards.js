import React from "react";
import { BuyNowCard } from "../components/BuyNowCard";
import { FoodOrderCard } from "../components/FoodOrderCard";
import { MoreCard } from "../components/MoreCard";
import { WideCard } from "../components/WideCard";

export const Cards = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightgray",
          width: "100vw",
          height: "100%",
          display: "grid",
          placeItems: "center",
          padding: "3rem"
        }}
      >
        <MoreCard colorVariant="1" />
        <MoreCard colorVariant="2" />
        <MoreCard colorVariant="3" />
        <WideCard variant="jazzman" text="Today listening to music" />
        <WideCard variant="jazzman" text="Today listening to music" light={false} />
        <WideCard variant="girl" text="Today shopping time" />
        <WideCard variant="girl" text="Today shopping time" light={false} />
        <WideCard variant="watering" text="Going through home stuff" />
        <WideCard variant="watering" light={false} />
        <BuyNowCard />
        <BuyNowCard extended />
        <FoodOrderCard />
      </div>
    </>
  );
};
