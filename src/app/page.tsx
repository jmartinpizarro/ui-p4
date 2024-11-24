'use client'

import NavBar from "./sections/navBar";
import Intro from "./sections/intro";
import Map from "./sections/map";
import SendLetter from "./sections/sendLetters";
import Activities from "./sections/activities";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <Map />
      <SendLetter />
      <Activities />
      <Footer />
    </>

  );
}
