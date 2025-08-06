"use client";

import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

type CarouselProps = {
  children: React.ReactNode;
  maxVisibility?: number;
  defaultActive?: number;
};

const Carousel = ({
  children,
  maxVisibility = 3,
  defaultActive = 1,
}: CarouselProps) => {
  const [active, setActive] = useState(defaultActive);
  const count = React.Children.count(children);

  return (
    <div className="relative flex justify-end mx-auto w-screen min-h-[calc(100vh-128px)] perspective-[1000px]">
      {active > 0 && (
        <button
          onClick={() => setActive((i) => i - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white text-5xl"
        >
          <p>Prev</p>
        </button>
      )}

      {React.Children.map(children, (child, i) => {
        const offset = (active - i) / 1.2;
        const direction = Math.sign(active - i);
        const absOffset = Math.abs(offset);

        if (absOffset > maxVisibility) return null;

        return (
          <div
            className="absolute w-full h-full transition-all duration-300"
            style={{
              transform: `
                rotateY(${offset * 50}deg)
                scaleY(${1 - absOffset * 0.1})
                translateZ(${-absOffset * 480}px)
                translateX(${-direction * 100}px)
              `,
              filter: `blur(${absOffset * 2}px)`,
              opacity: absOffset >= maxVisibility ? 0 : 1,
              pointerEvents: active === i ? "auto" : "none",
            }}
          >
            {child}
          </div>
        );
      })}

      {active < count - 1 && (
        <button
          onClick={() => setActive((i) => i + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white text-5xl"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Carousel;
