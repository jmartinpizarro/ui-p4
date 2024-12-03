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
            <section className="flex flex-col items-center justify-center  min-h-[80vh]">
                <div className="w-full  h-full flex justify-center items-center">
                    {/* Contenedor ajustado para el video */}
                    <video
                        controls
                        src="/videopapa.mp4"
                        style={{
                            width: "100%",  // El video ocupa todo el ancho del contenedor
                            height: "100%", // El video ocupa toda la altura del contenedor
                            objectFit: "contain",  // Mantener la proporción del video sin recortarlo
                        }}
                    />
                </div>
            </section>

            <Footer />
        </>
    );
}