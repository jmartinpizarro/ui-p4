import Header from "@/components/Header"
import RedButton from "@/components/RedButton"

const Activities: React.FC = () => {
    return (
        <section className="px-4 py-10 flex flex-col items-center justify-center gap-10 min-h-[90vh]">
            <Header text="vive la navidad ahora" color="red"></Header>

            <article className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-2xl mx-auto my-5">
                <form className="flex flex-col gap-2 bg-grey rounded-2xl items-center justify-between py-10 px-5 w-full sm:w-[350px] h-[500px]">
                    <h3 className="text-darkgrey text-xl text-center">Viaja a Finlandia</h3>
                    <p className="text-darkgrey break-words text-center sm:text-left">
                        Vive la experiencia inolvidable en Finlandia. Disfruta de un encuentro único con Papá Noel, visita su aldea, conoce a los renos y explora la fábrica de regalos. <br />
                        Además, disfruta del hermoso paisaje nevado mientras te relajas en el cálido refugio. <br />
                        ¿A qué esperas para hacer realidad este sueño? ¡Apúntate hoy y comienza la aventura!
                    </p>
                    <RedButton text="¡Me apunto!" clicked={() => { console.log('popUp de reserva') }}></RedButton>
                </form>

                <form className="flex flex-col gap-2 bg-grey rounded-2xl items-center justify-between py-10 px-5 w-full sm:w-[350px] h-[500px]">
                    <h3 className="text-darkgrey text-xl text-center">Tu videollamada con <span className="text-red font-bold">Santa Claus</span></h3>
                    <p className="text-darkgrey text-center sm:text-left">
                        ¿Te gustaría tener una conversación con Papá Noel? Este mes tienes la oportunidad de hacerlo de forma virtual, con una videollamada exclusiva y personalizada. <br />
                        ¡Sí, es cierto! Solo este mes puedes tener una charla en vivo con el hombre más famoso de la Navidad. <br />
                        No pierdas esta oportunidad de hacerle todas tus preguntas y compartir tus deseos. <br />
                        Regístrate y asegúrate de reservar tu cita para este evento único. ¡Haz que este diciembre sea realmente mágico!
                    </p>
                    <RedButton text="¡Quiero ver a Papá Noel!" clicked={() => { console.log('video llamada si y solo si está registrado') }}></RedButton>
                </form>
            </article>
        </section>
    )
}

export default Activities
