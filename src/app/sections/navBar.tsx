import Image from "../../components/Image"
import RedButton from "@/components/RedButton"
import WhiteButton from "@/components/WhiteButton"

import { useState } from "react"

const NavBar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="flex justify-between items-center h-24 w-full bg-palered px-10 relative">
            {/* Logo */}
            <Image route="/logo.png" height={'72'} width={'72'} alternativeDesc="Santa Claus Logo"></Image>

            {/* Hamburger Button */}
            <button
                className="lg:hidden flex items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    route={`${isOpen ? '/cross.png' : 'list.png'}`}
                    width="16"
                    height="16"
                    alternativeDesc="Toggle Menu"
                />
            </button>

            {/* Desktop Menu */}
            <div className="lg:flex items-center gap-5 justify-center flex-row hidden">
                <a className="text-background hover:underline" href="#intro">Papá Noel</a>
                <a className="text-background hover:underline" href="#map">El mapa</a>
                <a className="text-background hover:underline" href="#sendLetters">¡Envía tu carta!</a>
                <a className="text-background hover:underline" href="#activities">Experiencias navideñas</a>

                <WhiteButton text="Iniciar sesión" clicked={() => console.log('login')}></WhiteButton>
                <RedButton text="Registrarse" clicked={() => console.log('register')}></RedButton>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 bg-palered shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out lg:hidden`}
            >
                <button
                    className="absolute top-5 right-5"
                    onClick={() => setIsOpen(false)}
                >
                    <Image route="/cross.png" width="16" height="16" alternativeDesc="Close menu" />
                </button>
                <ul className="flex flex-col items-start gap-5 p-10">

                    <a className="text-background hover:underline" href="#intro" onClick={() => setIsOpen(false)}>
                        Papá Noel
                    </a>

                    <a className="text-background hover:underline" href="#map" onClick={() => setIsOpen(false)}>
                        El mapa
                    </a>

                    <a className="text-background hover:underline" href="#sendLetters" onClick={() => setIsOpen(false)}>
                        ¡Envía tu carta!
                    </a>

                    <a className="text-background hover:underline" href="#activities" onClick={() => setIsOpen(false)}>
                        Experiencias navideñas
                    </a>
                    <WhiteButton text="Iniciar sesión" clicked={() => { console.log('login'); setIsOpen(false); }}></WhiteButton>

                    <RedButton text="Registrarse" clicked={() => { console.log('register'); setIsOpen(false); }}></RedButton>

                </ul>
            </div>
        </nav>
    )
}

export default NavBar
