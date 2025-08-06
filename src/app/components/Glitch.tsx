'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const glitchFrames = [
  '/glitch/136.jpg',
  '/glitch/139.jpg',
  '/glitch/145.jpg',
  '/glitch/174.jpg',
];

const Glitch = () => {
  const [frameIndex, setFrameIndex] = useState(-1); // -1 means show main image

  useEffect(() => {
    const glitchInterval = setTimeout(() => {
      // Start glitch burst
      let i = 0;
      const glitchBurst = setInterval(() => {
        setFrameIndex((prev) => (prev + 1) % glitchFrames.length);
        i++;
        if (i > 6) {
          clearInterval(glitchBurst);
          setFrameIndex(-1); // Return to normal image
        }
      }, 50); // speed of frame change
    }, 1000); // time between glitch bursts

    return () => clearTimeout(glitchInterval);
  }, []);

  return (
    <div className="w-[300px] h-[300px] relative">
      <Image
        src={frameIndex === -1 ? '/main.png' : glitchFrames[frameIndex]}
        alt="Glitch Image"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Glitch;
