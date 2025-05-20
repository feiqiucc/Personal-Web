"use client";
import { Navbar } from "@/components/navbar";
import { Intro } from "@/components/Intro";
import { useState } from "react";
import { Project } from "@/components/Project";

export default function Home() {
  const [isFirstImage, setIsFirstImage] = useState(true);
  const handleImageClick = () => {
    setIsFirstImage((prev) => !prev);
  };
  return (
    <main className="flex-col min-h-fit">
      <img
        src={isFirstImage ? "/motorpic.png" : "/motorpic2.png"}
        alt="sticker"
        className="absolute top-40 right-30 w-100 h-80 cursor-pointer"
        onClick={handleImageClick}
      />
      <Navbar />
      <Intro />
      <Project />
    </main>
  );
}
