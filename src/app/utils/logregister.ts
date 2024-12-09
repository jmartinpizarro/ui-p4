
import { logInPopUp } from "./logIn";
import { registerPopUp } from "./register";


export function logRegPopUp() {
  const popup = document.createElement("div");
  const possibleForms = document.getElementsByClassName("login-popup");
  
  if (possibleForms.length < 1) {
      // Crear el recuadro del popup
      popup.className = "login-popup";
      popup.innerHTML = `
          <div class="popUp-form">
              <p class="text-align-center text-darkgrey mb-6">Para acceder a esta función, primero debes iniciar sesión o registrarte.</p>
              <div class="flex justify-center gap-4">
                <button class="button register bg-red-500 text-white py-2 px-6 rounded-lg" id="login-button">Iniciar sesión</button>
                <button class="button register bg-green-500 text-white py-2 px-6 rounded-lg" id="register-button">Registrarse</button>
                <button type="submit" class="button login absolute top-2 right-2 text-gray-600 hover:text-black text-xl" id="close-popup">✖</button>
              </div>
          </div>
      `;
      

      // Estilos del popup
      popup.style.position = "fixed";
      popup.style.top = "50%";
      popup.style.left = "50%";
      popup.style.transform = "translate(-50%, -50%)";
      popup.style.borderRadius = "10px";
      popup.style.zIndex = "1000";

      document.body.appendChild(popup);

      // Event listener para cerrar el popup
      document.getElementById("close-popup")?.addEventListener("click", () => {
          popup.remove(); // Eliminar el popup
      });

      // Event listener para los botones
      document.getElementById("login-button")?.addEventListener("click", () => {
          console.log("Iniciar sesión");
          logInPopUp();
          // Lógica para mostrar el formulario de login o hacer lo que sea necesario
      });

      document.getElementById("register-button")?.addEventListener("click", () => {
          console.log("Registrarse");
          // Lógica para mostrar el formulario de registro o hacer lo que sea necesario
          registerPopUp();
      });
  }
}


