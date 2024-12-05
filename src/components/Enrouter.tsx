import React from "react";
import WhiteButton from "@/components/WhiteButton";
import RedButton from "@/components/RedButton";
import { renderInfoPopUp } from "../app/utils/renderInfoPopUp"



interface PopUpProps {
  isVisible: boolean;
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-5 w-80 relative">
        <h2 className="text-xl font-bold text-center mb-4">Opciones</h2>
        <div className="flex flex-col gap-4">
          <WhiteButton
            text="Mis datos"
            clicked={renderInfoPopUp}
          />
          <RedButton
            text="Opción 2"
            clicked={() => console.log("Opción 2 seleccionada")}
          />
            <button className="absolute top-2 right-2 text-gray-600 hover:text-black" onClick={onClose}>✖</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
