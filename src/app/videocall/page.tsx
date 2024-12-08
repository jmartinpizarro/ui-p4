'use client';
import Image from "@/components/Image";
import Header from "@/components/Header";
import NavBar from "../sections/navBar";
import Footer from "../sections/footer";

export default function VideoPage() {
    return (
        <>
            <NavBar />
            <Header text="Mensaje de Papá Noel" color="red" />

            {/* Contenedor principal para el video */}
            <section className="flex flex-col items-center justify-center min-h-[80vh] mt-10">
                <div className="w-full h-full flex justify-center items-center z-10 m-4">
                    {/* Contenedor ajustado para el video */}
                    <video
                        controls
                        src="/videopapa.mp4"
                        className="w-full h-full object-contain"
                        style={{
                            width: "100%",  // El video ocupa todo el ancho del contenedor
                            height: "100%", // Mantiene la altura proporcional
                            maxHeight: "100vh", // Limitar la altura para que no ocupe toda la pantalla
                        }}
                    />
                </div>
            </section>

            <Footer />
        </>
    );
}