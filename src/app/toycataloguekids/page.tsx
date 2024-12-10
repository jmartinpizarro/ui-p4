'use client';
import NavBar from "../sections/navBar"; // Importar el NavBar
import Footer from "../sections/footer"; // Importar el Footer
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import Image from "@/components/Image";

import { useEffect } from "react";

export default function ToyCatalogue() {
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
    const toys = [
        { name: "Pop It", image: "toy1.png" },
        { name: "Comida de Madera", image: "toy2.png" },
        { name: "Bebé Comilón", image: "toy3.png" },
        { name: "Lego Star Wars", image: "toy4.png" },
        { name: "Nerf Mega", image: "toy5.png" },
        { name: "Cubo de Rubik", image: "toy6.png" },
        { name: "Mini Pizarra Mágica", image: "toy7.png" },
        { name: "Pizarra Grande", image: "toy8.png" },
    ];

    interface Toy {
        name: string;
        image: string;
    }

    return (
        <>
            {/* Navbar en la parte superior */}
            <NavBar />

            {/* Contenido principal del catálogo */}
            <section className="px-4 py-10 flex flex-col items-center justify-center gap-10 min-h-[90vh]">
                <Header text="Catálogo de Juguetes" color="red" />

                {/* Contenedor general con disposición vertical */}
                <article className="flex flex-col gap-10 w-full max-w-7xl mx-auto my-5">
                    {/* Texto introductorio */}
                    <div className="text-center">
                        <Paragraph text="Explora nuestro catálogo de juguetes cuidadosamente seleccionados para todos los niños. Desde muñecos y vehículos hasta juegos educativos y rompecabezas, cada juguete está diseñado para traer diversión y fomentar la imaginación." />
                    </div>

                    {/* Galería de juguetes */}
                    <div id="toy-gallery" className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        {toys.map((toy, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <Image
                                    route={toy.image}
                                    alternativeDesc={toy.name}
                                    width="200"
                                    height="200"
                                />
                                <p className="text-darkgrey text-center mt-2 font-semibold">{toy.name}</p>
                            </div>
                        ))}
                    </div>
                </article>
            </section>

            {/* Footer en la parte inferior */}
            <Footer />
        </>
    );
}
