"use client";
import React from "react";
import Hero from "./components/Hero";
import ImportantSection from "./components/ImportantSection";
import BottomSection from "./components/BottomSection";



export default function Home() {
  return (
    <>
      <Hero />
      <ImportantSection />
      <BottomSection />
    </>
  );
}
