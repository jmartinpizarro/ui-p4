import React from "react";
import WhiteButton from "@/components/WhiteButton";
import RedButton from "@/components/RedButton";
import Router from "next/router";
interface PopUpProps {
  isVisible: boolean;
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleLogout = () => {
    // Eliminar los datos del usuario en localStorage
    localStorage.removeItem("userLogged");
    localStorage.removeItem("isKid");


    // Redirigir a la página de inicio de sesión o página pública
    
    window.location.href = "/#intro"; // Esto redirige al login
    onClose(); // Cerrar el popup
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-5 w-80 relative">
        <h2 className="text-xl font-bold text-center mb-4">Opciones</h2>
        <div className="flex flex-col gap-4">

          <RedButton
            text="Logout"
            clicked={handleLogout} 
          />
            <button className="absolute top-2 right-2 text-gray-600 hover:text-black" onClick={onClose}>✖</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
