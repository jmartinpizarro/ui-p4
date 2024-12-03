import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import Image from "@/components/Image";
import RedButton from "@/components/RedButton";
import { registerPopUp } from "../utils/register";

import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';



const Intro: React.FC = () => {
    const [isKid, setIsKid] = useState<boolean | null>(null); // Estado para verificar si es niño
    const [userLogged, setUserLogged] = useState<string | null>(null); // Estado para verificar si hay usuario loggeado

    // useEffect para cargar el estado de localStorage
    useEffect(() => {
        // Obtener el nombre del usuario de localStorage (sin parsear)
        const storedUserLogged = localStorage.getItem('userLogged');
        const storedIsKid = localStorage.getItem('isKid');
        if (storedIsKid == "child"){
            setIsKid(true);
        } else {
            setIsKid(false);
        }

        // Establecer el estado con los valores obtenidos de localStorage
        setUserLogged(storedUserLogged);
    }, []);

    return (
        <section className="px-4 py-10 flex flex-col items-center justify-center gap-10 min-h-[90vh]">
            <Header text="¡Conoce a Papá Noel!" color="red" />
            <article className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-7xl mx-auto my-5">
                <div className="flex flex-col gap-5 lg:w-1/2 text-center lg:text-left">
                    <Paragraph text="Papá Noel, inspirado en San Nicolás de Bari, comenzó como un obispo generoso del siglo IV, famoso por regalar a los niños en secreto. Con el tiempo, esta figura evolucionó en Europa y, al llegar a Estados Unidos como 'Sinterklaas', se transformó en 'Santa Claus'. Durante el siglo XIX, su imagen se consolidó como un anciano de barba blanca y traje rojo, gracias a la influencia de poemas y anuncios." />
                    <Paragraph text="Hoy, Santa Claus es un ícono navideño global, repartiendo regalos en su trineo desde el Polo Norte, ayudado por elfos, y simbolizando la alegría y generosidad infantil." />

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <RedButton text="¡A la galería!" clicked={'/gallery'} />
                        <RedButton text="Regístrarte" clicked={registerPopUp} />
                        <RedButton
                            text="Catálogo de Juguetes"
                            clicked={isKid ? '/toycatalogueadult' : 'toycataloguekids'} />
                        {/* Botón condicional basado en el estado del usuario */}
                        {userLogged && isKid !== null && (
                            <RedButton
                                text={isKid ? "Test del Niño Bueno" : "Lista de la compra"}
                                clicked={isKid ? '/test' : '/listacompra'}
                            />
                        )}
                    </div>
                </div>

                <div id="gallery" className="flex flex-col gap-6 items-center lg:w-2/5 max-w-full">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Image route="/santa1.png" alternativeDesc="An image of Santa Claus" width="200" height="200" />
                        <Image route="/santa2.png" alternativeDesc="An image of Santa Claus" width="200" height="200" />
                    </div>
                    <Image route="/santa3.png" alternativeDesc="An image of Santa Claus" width="370" height="200" />
                </div>
            </article>
        </section>
    );
};


export default Intro;
