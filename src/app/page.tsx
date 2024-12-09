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
    if (!localStorage.getItem('userLogged')) { // if we can't find the field, create it
    localStorage.setItem('userLogged', JSON.stringify(null)); // by default, no user will be logged In
    }
    if (!localStorage.getItem('isKid')) {
    localStorage.setItem('isKid', JSON.stringify(null))
    }
    if (!localStorage.getItem('letters')) {
        localStorage.setItem('letters', JSON.stringify([]));
    }
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]))
    }

    const user = localStorage.getItem("userLogged")
        if (user !== "null"){
            const toRemove = document.querySelectorAll('.autenticator');
            const toDisplay = document.querySelectorAll('.isLogin');
            toRemove.forEach((element) => {
                if (element instanceof HTMLElement) {
                    element.style.display = 'none';
                } else {
                    console.error('Element is not an HTMLElement:', element);
                }
            });
            
            toDisplay.forEach((element) => {
                if (element instanceof HTMLElement) {
                    element.style.display = 'flex';
                } else {
                    console.error('Element is not an HTMLElement:', element);
                }
            });
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
