import React from "react";

interface SelectableButtonProps {
    text: string;
    isSelected: boolean;
    onClick: () => void;
}

const SelectableButton: React.FC<SelectableButtonProps> = ({ text, isSelected, onClick }) => {
    return (
        <button
            className={`px-4 py-2 rounded font-semibold transition-colors duration-200 ${
                isSelected
                    ? "bg-green text-white" /* Verde con texto blanco cuando está seleccionado */
                    : "bg-gray-300 text-black hover:bg-gray-400" /* Gris por defecto */
            }`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default SelectableButton;
