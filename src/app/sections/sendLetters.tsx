import Form from "@/components/Form"
import Header from "@/components/Header"

const SendLetter: React.FC = () => {
    return(
        <section className="px-4 py-10 flex flex-col items-center justify-center gap-20 lg:w-standard w-auto mx-auto">
        <Header text="Envia tu carta" color="red"/>
        <Form buttonText="Enviar" inputs={['Nombre', 'Correo Electrónico', 'Ciudad', 'País', 'Carta para Papá Noel']}/>
        </section>
    )
}

export default SendLetter