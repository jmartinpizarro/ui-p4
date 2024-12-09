import Image from "../../components/Image"
import RedButton from "@/components/RedButton"
import WhiteButton from "@/components/WhiteButton"
import PopUp from "@/components/Enrouter"
import { registerPopUp } from "../utils/register"
import { logInPopUp } from "../utils/logIn"
import { HashLink } from 'react-router-hash-link';
import { useState } from "react"
import Link from 'next/link'

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isPopUpVisible, setIsPopUpVisible] = useState(false)
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -60; // Ajusta este valor según la altura de tu navbar
            const y = element.getBoundingClientRect().top + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className="flex justify-between items-center h-24 w-full bg-palered px-10 relative z-50">
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
                <Link href="/#intro" legacyBehavior>
                    <a className="text-background hover:underline" onClick={() => handleScroll('intro')}>Papá Noel</a>
                </Link>
                <Link href="/#map" legacyBehavior>
                    <a className="text-background hover:underline" onClick={() => handleScroll('map')}>El mapa</a>
                </Link>
                <Link href="/#letters" legacyBehavior>
                    <a className="text-background hover:underline" onClick={() => handleScroll('sendLetters')}>¡Envía tu carta!</a>
                </Link>
                <Link href="/#activities" legacyBehavior>
                    <a className="text-background hover:underline" onClick={() => handleScroll('activities')}>Experiencias navideñas</a>
                </Link>

                {/* Autenticación para Desktop */}
                <div className="autenticator flex flex-row gap-5">
                    <WhiteButton text="Iniciar sesión" clicked={logInPopUp}></WhiteButton>
                    <RedButton text="Registrarse" clicked={registerPopUp}></RedButton>
                </div>

                {/* Contenido para usuarios logueados (Desktop) */}
                <div className="isLogin hidden">
                    <WhiteButton text="👤" clicked={() => setIsPopUpVisible(true)}></WhiteButton>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 py-12 right-0 h-full w-3/4 bg-palered shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out lg:hidden`}
            >
                <button
                    className="absolute top-8 right-8"
                    onClick={() => setIsOpen(false)}
                >
                    <Image route="/cross.png" width="12" height="12" alternativeDesc="Close menu" />
                </button>
                <ul className="flex flex-col items-start gap-5 p-10">

                <Link href="/#intro" legacyBehavior>
                        <a className="text-background hover:underline" onClick={() =>{ setIsOpen(false); handleScroll('intro');}}>Papá Noel</a>
                    </Link>
                    <Link href="/#map" legacyBehavior>
                        <a className="text-background hover:underline" onClick={() => { setIsOpen(false); handleScroll('map');}}>El mapa</a>
                    </Link>
                    <Link href="/#sendLetters" legacyBehavior>
                        <a className="text-background hover:underline" onClick={() => { setIsOpen(false); handleScroll('sendLetters');}}>¡Envía tu carta!</a>
                    </Link>
                    <Link href="/#activities" legacyBehavior>
                        <a className="text-background hover:underline" onClick={() => { setIsOpen(false); handleScroll('activities');}}>Experiencias navideñas</a>
                    </Link>

                    {/* Autenticación para Mobile */}
                    <div className="autenticator flex flex-row gap-5">
                        <RedButton text="Iniciar sesión" clicked={logInPopUp}></RedButton>
                        <RedButton text="Registrarse" clicked={registerPopUp}></RedButton>
                    </div>

                    {/* Contenido para usuarios logueados (Mobile) */}
                    <div className="isLogin hidden">
                        <WhiteButton text="👤" clicked={() => setIsPopUpVisible(true)}></WhiteButton>
                    </div>
                </ul>
            </div>

            <PopUp
                isVisible={isPopUpVisible}
                onClose={() => setIsPopUpVisible(false)}
            />
        </nav>
    )
}

export default NavBar
