// app/components/BackgroundImageContainer.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function BackgroundImageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative w-screen h-screen overflow-hidden "
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
    >
      {/* Background Image */}
      <Image
        src="/makima.jpg"
        fill
        alt="bg"
        className="absolute inset-0 -z-10 object-cover"
      />

      {/* Blur overlay with mouse hole */}
      <div
        className="absolute inset-0 backdrop-blur-md pointer-events-none z-0"
        style={{
          maskImage: `radial-gradient(circle 260px at ${mouse.x}px ${mouse.y}px, transparent 0%, black 100%)`,
          WebkitMaskImage: `radial-gradient(circle 260px at ${mouse.x}px ${mouse.y}px, transparent 0%, black 100%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
