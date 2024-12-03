'use client'

import NavBar from "./sections/navBar";
import Intro from "./sections/intro";
import Map from "./sections/map";
import SendLetter from "./sections/sendLetters";
import Activities from "./sections/activities";
import Footer from "./sections/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    localStorage.setItem('userLogged', JSON.stringify(null)); // by default, no user will be logged In
    localStorage.setItem('isKid', JSON.stringify(null))
    if (!localStorage.getItem('letters')) { // if we can't find the field, create it
        localStorage.setItem('letters', JSON.stringify([]));
    }
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]))
    }
  }, [])

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

