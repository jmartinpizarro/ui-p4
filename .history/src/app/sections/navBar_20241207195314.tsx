import { useState } from "react";
import WhiteButton from "@/components/WhiteButton";
import RedButton from "@/components/RedButton";
import { logInPopUp } from "../utils/logIn";
import { registerPopUp } from "../utils/register";
import outPopUp from "/components"; // Asegúrate de tener un componente PopUp para el logout
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false); // Estado para controlar la visibilidad del popup

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60; // Ajusta este valor según la altura de tu navbar
      const y = element.getBoundingClientRect().top + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Función para manejar el logout
  const handleLogout = () => {
    localStorage.removeItem("userLogged");
    localStorage.removeItem("isKid");

    // Cierra el popup
    setIsPopUpVisible(false);

    // Redirige a la página de inicio
    window.location.href = "/"; // Ajusta esto según donde quieras redirigir
  };

  return (
    <nav className="flex justify-between items-center h-24 w-full bg-palered px-10 relative z-50">
      {/* Logo */}
      <div>Logo</div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 py-12 right-0 h-full w-3/4 bg-palered shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <button className="absolute top-8 right-8" onClick={() => setIsOpen(false)}>
          <div>Close</div>
        </button>
        <ul className="flex flex-col items-start gap-5 p-10">
          <Link href="/#intro" legacyBehavior>
            <a
              className="text-background hover:underline"
              onClick={() => {
                setIsOpen(false);
                handleScroll("intro");
              }}
            >
              Papá Noel
            </a>
          </Link>

          {/* Autenticación para Mobile */}
          <div className="autenticator flex flex-row gap-5">
            <WhiteButton text="Iniciar sesión" clicked={logInPopUp}></WhiteButton>
            <RedButton text="Registrarse" clicked={registerPopUp}></RedButton>
          </div>

          {/* Contenido para usuarios logueados (Mobile) */}
          <div className="isLogin flex flex-row gap-5">
            <WhiteButton text="👤" clicked={() => setIsPopUpVisible(true)}></WhiteButton>
          </div>
        </ul>
      </div>

      {/* Popup de Logout */}
      {isPopUpVisible && (
        <PopUp isVisible={isPopUpVisible} onClose={() => setIsPopUpVisible(false)} onLogout={handleLogout} />
      )}
    </nav>
  );
};

export default NavBar;