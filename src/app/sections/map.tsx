import Header from "@/components/Header"
import Paragraph from "@/components/Paragraph"
import Image from "@/components/Image"

const Map: React.FC = () => {
    return (
        <section className="px-4 py-10 flex flex-col gap-20 lg:w-standard w-auto mx-auto">
            <Header text="Papanoelandia" color="red" />
            <article className="flex flex-col lg:flex-row gap-10">
                <Image route="/mapa.png" width="750" height="480" alternativeDesc="Mapa de la ciudad de Santa Claus"></Image>
                <div className="flex flex-col gap-10 items-start justify-center w-f lg:w-2/5">
                    <Paragraph text="La villa de Papá Noel se encuentra en el norte del planeta Tierra... ¿Dónde? Ah, eso es secreto." />
                    <Paragraph text="Ahí tiene a su ejército de elfos haciendo juguetes todos los días del año para los niños que se portan bien... A los que no, ¡pues carbón!" />
                    <Paragraph text="Eso sí, tenemos un pequeño mapa para que tú no te pierdas cuando vayas a Papanoelandia." />
                </div>
            </article>
        </section>
    )
}

export default Map




