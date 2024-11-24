import Header from "@/components/Header"
import Paragraph from "@/components/Paragraph"
import Image from "@/components/Image"
import RedButton from "@/components/RedButton"

const Intro: React.FC = () => {
    return(
        <section className="px-10 py-5 flex flex-col items-center justify-center gap-3">
            <Header text="¡Conoce a Papá Noel!" color="red"></Header>
            <article className="my-10 flex flex-row items-center justify-center gap-14">
                <div className="flex flex-col gap-5 w-2/4">
                    <Paragraph text="Papá Noel, inspirado en San Nicolás de Bari, comenzó como un obispo generoso del siglo IV, famoso por regalar a los niños en secreto. Con el tiempo, esta figura evolucionó en Europa y, al llegar a Estados Unidos como 'Sinterklaas', se transformó en 'Santa Claus'. Durante el siglo XIX, su imagen se consolidó como un anciano de barba blanca y traje rojo, gracias a la influencia de poemas y anuncios."></Paragraph>

                    <Paragraph text="Hoy, Santa Claus es un ícono navideño global, repartiendo regalos en su trineo desde el Polo Norte, ayudado por elfos, y simbolizando la alegría y generosidad infantil."></Paragraph>

                    <div className="flex flex-row gap-5 my-3">
                        <RedButton text="¡A la galería!" clicked={'/galeria'}></RedButton>
                        <RedButton text="Regístrarte" clicked={() => {console.log('register')}}></RedButton>
                    </div>
                </div>

                <div id="gallery" className="flex flex-col gap-5 items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-5">
                        <Image route="/santa1.png" alternativeDesc="An image of santa" width="220" height="198"></Image>
                        <Image route="/santa2.png" alternativeDesc="An image of santa" width="220" height="198"></Image>
                    </div>

                    <Image route="/santa3.png" alternativeDesc="An image of santa" width="500" height="300"></Image>
                </div>
            </article>
        </section>
    )
}

export default Intro


