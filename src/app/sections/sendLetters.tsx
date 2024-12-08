import Form from "@/components/Form"
import Header from "@/components/Header"

const SendLetter: React.FC = () => {
    return(
        <section id = "sendLetters" className="px-4 py-10 flex flex-col items-center justify-center gap-20 lg:w-standard w-auto mx-auto relative">
            <img className="absolute -z-50 top-0" src="/figure.svg" alt="" />
            <Header text="Envia tu carta" color="background"/>
            <Form buttonText="Enviar" inputs={['Nombre', 'Correo Electrónico', 'Ciudad', 'País', 'Carta para Papá Noel']}/>
        </section>
    )
}

export default SendLetter