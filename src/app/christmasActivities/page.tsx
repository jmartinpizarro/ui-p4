'use client';
import Header from "@/components/Header";
import RedButton from "@/components/RedButton";
import Link from 'next/link';
import NavBar from "../sections/navBar";
import Footer from "../sections/footer";

import { useEffect } from "react";

const Activities: React.FC = () => {
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
    return (
        
        <>
            <NavBar />
            <section className="px-4 py-10 flex flex-col items-center justify-center gap-10 min-h-[90vh] bg-gray-50">
                <Header text="Actividades Navideñas" color="red" />

                {/* Recuadro rojo con el contenido */}
                <div className="bg-red text-white p-8 sm:p-10 rounded-xl shadow-xl w-full max-w-4xl mx-auto mt-10">
                    <p className="text-lg sm:text-xl text-center mb-6">
                        ¡La Navidad está a la vuelta de la esquina! Es la época del año en la que los hogares se llenan de alegría,
                        luces brillantes y aromas deliciosos. Pero lo mejor de todo es el tiempo que pasamos con nuestros seres queridos.
                        Si estás buscando maneras divertidas y especiales de celebrar estas fiestas, aquí te traigo 5 actividades navideñas
                        que no solo harán que tu hogar se sienta más festivo, sino que también fortalecerán los lazos familiares. ¡Sigue leyendo
                        y prepárate para disfrutar de unas vacaciones inolvidables!
                    </p>

                    <ol className="list-decimal pl-6 space-y-4 text-lg sm:text-xl">
                        <li>
                            <strong>Decorar el Árbol de Navidad Juntos</strong>
                            <p className="mt-2">Si tienes niños pequeños, puedes hacer una versión de adornos con materiales seguros,
                                como piñas pintadas o figuras de cartón que ellos mismos decoren.</p>
                        </li>
                        <li>
                            <strong>Cocinar Galletas Navideñas</strong>
                            <p className="mt-2">Si te apetece, puedes envolver las galletas en bolsitas de celofán
                                y regalarlas a familiares y amigos. ¡Un detalle casero que siempre se agradece!</p>
                        </li>
                        <li>
                            <strong>Maratón de Películas Navideñas</strong>
                            <p className="mt-2">Algunos clásicos que no pueden faltar son Mi Pobre Angelito,
                                El Grinch o El Expreso Polar. Si quieres algo más reciente,
                                Klaus o La Navidad de los Muppets son perfectas para disfrutar en familia.</p>
                        </li>
                        <li>
                            <strong>Hacer Tarjetas de Navidad Personalizadas</strong>
                            <p className="mt-2">Si tienes niños pequeños, ¡haz que se conviertan en pequeños artistas!
                                Puedes hacer huellas de manos o pies para decorar las tarjetas y hacerlas aún más personales.</p>
                        </li>
                        <li>
                            <strong>Búsqueda del Tesoro Navideña</strong>
                            <p className="mt-2">Si buscas una actividad que combine diversión,
                                movimiento y sorpresas, ¡una búsqueda del tesoro navideña es perfecta!
                                Crea pistas que conduzcan a un "tesoro" escondido, como un regalo o una dulce navideña.</p>
                        </li>
                    </ol>

                    <p className="text-lg sm:text-xl text-center mt-6">
                        ¡No dejes que esta Navidad pase sin aprovechar cada momento!
                        Con estas actividades, puedes asegurarte de que todos, grandes y pequeños,
                        disfruten de la magia de las fiestas. La Navidad es mucho más que regalos,
                        es el tiempo de crear recuerdos juntos, compartir sonrisas
                        y disfrutar de la compañía de los que más quieres. ¿Cuál de estas actividades harás primero?
                    </p>
                </div>

                {/* Botón de llamada a la acción */}
                <div className="flex justify-center mt-8">
                    <Link href="/gallery">
                        <RedButton text="¡Ver Galería!" clicked={() => { console.log() }} />
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Activities;