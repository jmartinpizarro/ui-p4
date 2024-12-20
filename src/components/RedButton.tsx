import { useRouter } from 'next/navigation';

interface RedButtonProps {
  text: string;
  clicked?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | string;
  type?: 'button' | 'submit' | 'reset';
  className?: string; // Nueva propiedad para clases adicionales
}

const RedButton: React.FC<RedButtonProps> = ({ text, clicked, type = 'button', className }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof clicked === 'function') {
      clicked(e);
    } else if (typeof clicked === 'string') {
      router.push(clicked);
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
