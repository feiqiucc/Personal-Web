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
    <main className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-10 flex flex-col min-h-fit">
        <Intro />
        <Project />
      </div>
      <Navbar />
    </main>
  );
}
