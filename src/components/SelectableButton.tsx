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
                    ? "bg-green-700 text-white" /* Oscuro con texto blanco */
                    : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};


export default SelectableButton;
