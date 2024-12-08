import React from "react";
import WhiteButton from "@/components/WhiteButton";
import RedButton from "@/components/RedButton";

import { renderInfoPopUp } from "../app/utils/renderInfoPopUp"
import { renderLetterPopUp } from "@/app/utils/rendeLetterPopUp";

interface PopUpProps {
  isVisible: boolean;
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  function resetUserDataAndReload() {
    // Resetear valores en el localStorage
    localStorage.setItem("userLogged", "null");
    localStorage.setItem("isKid", "null");
  
    // Forzar la actualización de la página
    window.location.reload();
  }

  const isKid = localStorage.getItem("isKid");
  const toyCatalogue = isKid === "adult" ? "toycatalogueadult" : "toycataloguekids";


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-5 w-80 relative">
        <h2 className="text-xl font-bold text-center mb-4 text-darkgrey">Opciones</h2>
        <div className="flex flex-col gap-4">
          <RedButton
            text="Mis datos"
            clicked={renderInfoPopUp}
          />
          <RedButton
            text="Mis cartas"
            clicked={renderLetterPopUp}
          />
          <WhiteButton
            text="Galería"
            clicked={'/gallery'}
          />
          <WhiteButton
            text="Catálogo de regalos"
            clicked={toyCatalogue}
          />
          <WhiteButton
            text="Log Out"
            clicked={resetUserDataAndReload}
          />
            <button className="absolute top-2 right-2 text-gray-600 hover:text-black" onClick={onClose}>✖</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
