interface RedButtonProps {
    text: string;
    clicked: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
  }


const RedButton: React.FC<RedButtonProps> = ({ text, clicked, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (typeof clicked === 'function') {
          clicked(e);
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
