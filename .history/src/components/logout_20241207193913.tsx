import { useState } from 'react';
import { useRouter } from 'next/router';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Eliminar los datos del usuario en localStorage
    localStorage.removeItem('userLogged');
    localStorage.removeItem('isKid');
    // Redirigir a la página de inicio de sesión o a una página pública
    window.location.href = '/gallery'; // Redirige manualmente a la página deseada
   
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-3 rounded">
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;