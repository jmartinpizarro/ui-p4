'use client'
import Image from "@/components/Image"
import Header from "@/components/Header"
import NavBar from "../sections/navBar"
import Footer from "../sections/footer"
import { checkLogIn } from "@/app/utils/children"; // Asegúrate de ajustar la ruta según tu estructura de archivos
import Video from "@/components/Video";

export default function VideoPage() {
    return (
        <>
            <NavBar />
            <Header text="Tu videollamada con Papá Noel" color="red" />
            
            <div className="flex justify-center items-center mt-4 mb-4 mx-4">
                {/* Usamos el componente Video */}
                <Video 
                    route="/videocall.mp4"  // Ruta del video
                    width="full"            // El video ocupará todo el ancho disponible
                    height="full"           // El video ocupará todo el alto disponible
                    alternativeDesc="Tu navegador no soporta el video"  // Mensaje alternativo
                />
            </div>

            <Footer />
        </>
    );
}


