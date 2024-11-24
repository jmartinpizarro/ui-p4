'use client'

import NavBar from "./sections/navBar";
import Intro from "./sections/intro";
import Map from "./sections/map";
import SendLetter from "./sections/sendLetters";

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <Map />
      <SendLetter />
    </>

  );
}
