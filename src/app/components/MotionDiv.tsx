"use client";
import { easeIn, easeInOut, easeOut } from "motion/react";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("motion/react").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function MainImageContainer({ children }: any) {
  return (
    <MotionDiv
      initial={{ y: -100, x: 500, filter: "blur(10px)" }}
      animate={{ x: 150, filter: "blur(0px)" }}
      transition={{ duration: 0.4, ease:"easeOut" }}
      className="text-white absolute  w-screen h-screen flex items-end justify-center"
    >
      {children}
    </MotionDiv>
  );
}
