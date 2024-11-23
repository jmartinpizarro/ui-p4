interface RedButtonProps {
  text: string;
  clicked: (() => void) | string; // clicked puede ser una función o una ruta (string)
}

const RedButton: React.FC<RedButtonProps> = ({ text, clicked }) => {
  const handleClick = () => {
    if (typeof clicked === 'function') {
      clicked(); // Si es una función, la ejecuta
    } else if (typeof clicked === 'string') {
      window.location.href = clicked; // Si es un string, redirige a la ruta
    }
  };

  return <button className="bg-red px-5 py-1 rounded-xl text-base" onClick={handleClick}>{text}</button>;
};

export default RedButton;
