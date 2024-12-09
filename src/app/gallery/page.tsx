'use client'
import Image from "@/components/Image"
import Header from "@/components/Header"
import NavBar from "../sections/navBar"
import Footer from "../sections/footer"

import { useEffect } from "react"


export default function Gallery() {
    useEffect(() => {
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

    return(
        <>
        <NavBar />
        <Header text="Gallery" color="red"/>
        <div id="ImageGallery" className="flex flex-col items-center grid grid-cols-1 lg:grid-cols-2  md:grid-cols-3 lg:grid-cols-2 gap-6 items-center mt-4 mb-4 mx-4">
            <Image route="/gallery1.jpg" alternativeDesc="An image of Chad Santa Claus" width= "w-full" height= "h-auto"></Image>
            <Image route="/gallery2.jpg" alternativeDesc="An image of Elf and Santa Claus" width= "w-full" height= "h-auto"></Image>
            <Image route="/gallery3.jpg" alternativeDesc="An image of Santa Claus" width= "w-full" height= "h-auto"></Image>
            <Image route="/gallery4.jpg" alternativeDesc="An image of Santa Claus" width= "w-full" height= "h-auto"></Image>
            <Image route="/gallery5.jpg" alternativeDesc="An image of Santa Claus" width= "w-full" height= "h-auto"></Image>
            <Image route="/gallery6.jpg" alternativeDesc="An image of Santa Claus" width= "w-full" height= "h-auto"></Image>
            <Image route="/gallery7.jpg" alternativeDesc="An image of Santa Claus" width= "w-full" height= "h-auto"></Image>

        </div>
        
        <Footer />
        </>
    )
}
