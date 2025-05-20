"use client";
import { useState } from "react";
import BlurInSpan from "./ui/Blurspan";

export function Heading() {
  const [Heading, setHeading] = useState("Hi, I am Eric");
  return (
    <h1 className="font-semibold sm:text-8xl text-5xl">
      <span
        onClick={() => {
          setHeading((prev) =>
            prev === "Hi, I am Eric" ? "Ciallo～(∠・ω< )⌒☆" : "Hi, I am Eric"
          );
        }}
      >
        <BlurInSpan>{Heading}</BlurInSpan>
      </span>
    </h1>
  );
}
