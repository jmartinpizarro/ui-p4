

interface VideoProps {
    route: string;   // Ruta del video
    width: string;   // Ancho del video
    height: string;  // Alto del video
    alternativeDesc: string;  // Descripción alternativa para el video (puede ser un mensaje en caso de que no se cargue)
}

const Video: React.FC<VideoProps> = ({ route, width, height, alternativeDesc }) => {
    return (
        <div className={`w-${width} h-${height} flex justify-center items-center`}>
            <video controls className="object-contain w-full h-full">
                <source src={route} type="video/mp4" />
                {alternativeDesc}
            </video>
        </div>
    );
}

export default Video;