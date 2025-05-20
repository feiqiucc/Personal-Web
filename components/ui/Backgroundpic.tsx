"use client";
import { useEffect, useState, ReactNode } from "react";

interface ParallaxBackgroundProps {
  children: ReactNode;
}

export default function ParallaxBackground({
  children,
}: ParallaxBackgroundProps) {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/Japan2.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: `center ${offsetY * 0.5}px`,
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
