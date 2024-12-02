interface RedButtonProps {
  text: string;
  clicked?: (() => void) | string;
  type?: 'button' | 'submit' | 'reset';
  className?: string; // Nueva propiedad para clases adicionales
}

const RedButton: React.FC<RedButtonProps> = ({ text, clicked, type = 'button', className }) => {
  const handleClick = () => {
      if (typeof clicked === 'function') {
          clicked();
      } else if (typeof clicked === 'string') {
          window.location.href = clicked;
      }
  };

  return (
      <button
          type={type}
          className={`bg-red px-5 py-1 rounded-xl text-background hover:bg-background hover:text-red transition ease-in duration-200 ${className}`}
          onClick={clicked ? handleClick : undefined}
      >
          {text}
      </button>
  );
};

export default RedButton;
