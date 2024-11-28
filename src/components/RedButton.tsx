interface RedButtonProps {
  text: string;
  clicked: (() => void) | string;
  className?: string; // Nueva propiedad para clases adicionales
}

const RedButton: React.FC<RedButtonProps> = ({ text, clicked, className }) => {
  const handleClick = () => {
      if (typeof clicked === 'function') {
          clicked();
      } else if (typeof clicked === 'string') {
          window.location.href = clicked;
      }
  };

  return (
      <button
          className={`bg-red px-5 py-1 rounded-xl text-background hover:bg-background hover:text-red transition ease-in duration-200 ${className}`}
          onClick={handleClick}
      >
          {text}
      </button>
  );
};

export default RedButton;
