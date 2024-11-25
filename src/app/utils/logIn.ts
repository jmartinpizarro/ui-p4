import { closePopUp, checkLogIn } from "./children";

export function logInPopUp() {
    const popup = document.createElement("div");
    const possibleForms = document.getElementsByClassName("login-popup");
    if (possibleForms.length < 1) {
        // fdr not appending n elements for n clicks
        popup.className = "login-popup";
        // form declaration
        popup.innerHTML = `
            <form id="login-form" class="popUp-form">
                <label>Usuario*:</label>
                <input type="text" id="user" required><br>
                
                <label>Contraseña*:</label>
                <input type="password" id="password" required><br>

                <label for="ageGroup">¿Eres niño o adulto?*</label><br>
                <select id="ageGroup" name="ageGroup" required>
                    <option value="">Selecciona una opción</option>
                    <option value="adult">Adulto</option>
                    <option value="child">Niño</option>
                </select><br>

                <div>
                    <button type="submit" class="button register" name="login">LogIn</button>
                    <button type="submit" class="button login" name="cancel">Cancelar</button>
                </div>
            </form>
        `;

        // form styles
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.borderRadius = "10px";
        popup.style.zIndex = "1000";

        document.body.appendChild(popup);
    }

    document.getElementsByName('cancel')[0].addEventListener("click", (event) => {
        event.preventDefault();
        closePopUp((event.target as HTMLElement));

    })

    const loginForm = document.getElementById('login-form')
    if (!loginForm){
        return
    }
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const form = document.getElementById("login-form");
        const { user, password } = { user: (form as HTMLFormElement).user.value, password: (form as HTMLFormElement).password.value }
        if (checkLogIn(user, password)) {
            const isKid = (form as HTMLFormElement).ageGroup.value;
            localStorage.setItem('isKid', isKid)
            const toRemove = document.querySelectorAll('.autenticator');
            const toDisplay = document.querySelectorAll('.isLogin');
            popup.remove();
            toRemove.forEach((element) => {
                if (element instanceof HTMLElement) {
                    element.style.display = 'none';
                } else {
                    console.error('Element is not an HTMLElement:', element);
                }
            });
            
            toDisplay.forEach((element) => {
                if (element instanceof HTMLElement) {
                    element.style.display = 'flex';
                } else {
                    console.error('Element is not an HTMLElement:', element);
                }
            });
        } else {
            alert('Usuario/contraseña incorrecta')
        }
    })
}