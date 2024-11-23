interface WhiteButtonProps {
    text: string;
    clicked: (() => void) | string; // clicked puede ser una función o una ruta (string)
  }
  
  const WhiteButton: React.FC<WhiteButtonProps> = ({ text, clicked }) => {
    const handleClick = () => {
      if (typeof clicked === 'function') {
        clicked(); // Si es una función, la ejecuta
      } else if (typeof clicked === 'string') {
        window.location.href = clicked; // Si es un string, redirige a la ruta
      }
    };
  
    return <button className="text-red px-5 py-1 rounded-xl text-base bg-background" onClick={handleClick}>{text}</button>;
  };
  
  export default WhiteButton;
  