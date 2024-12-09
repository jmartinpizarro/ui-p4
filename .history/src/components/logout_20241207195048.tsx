import RedButton from "@/components/RedButton";

interface PopUpProps {
  isVisible: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ isVisible, onClose, onLogout }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-5 w-80 relative">
        <h2 className="text-xl font-bold text-center mb-4">Opciones</h2>
        <div className="flex flex-col gap-4">
          <RedButton text="Cerrar sesión" clicked={onLogout} />
          <button className="absolute top-2 right-2 text-gray-600 hover:text-black" onClick={onClose}>
            ✖
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;