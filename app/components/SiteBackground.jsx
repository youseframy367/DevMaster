"use client";

import { usePathname } from "next/navigation";

const balls = [
  ["right", "250px"],
  ["left", "550px"],
  ["right", "850px"],
  ["left", "1150px"],
  ["right", "1450px"],
  ["left", "1750px"],
  ["right", "2150px"],
  ["left", "2550px"],
  ["right", "3050px"],
  ["left", "3350px"],
  ["right", "3650px"],
  ["left", "3950px"],
  ["right", "4250px"],
  ["left", "4550px"],
  ["right", "4750px"],
  ["left", "5150px"],
  ["right", "5550px"],
  ["left", "5750px"],
];

export default function SiteBackground() {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {balls.map(([side, top], index) => (
        <div
          key={`${side}-${top}`}
          className="absolute h-[287px] w-[200px] rounded-full bg-blue-900 opacity-50 blur-[100px] animate-float md:w-[640px]"
          style={{ [side]: "-35%", top, animationDelay: `${index * 0.6}s` }}
        />
      ))}
    </div>
  );
}
