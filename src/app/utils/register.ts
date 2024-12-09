import { generateChildrenForm, clearFormContent, closePopUp, gatherChildrenData } from "./children";

export function registerPopUp() {
    const popup = document.createElement("div");
    const possibleForms = document.getElementsByClassName("register-popup");

    if (possibleForms.length < 1) {
        // fdr not appending n elements for n clicks
        popup.className = "register-popup";
        // form declaration
        popup.innerHTML = `
            <h2 style="text-align: center; color:red;  margin-top:0.2rem;">Registro de Usuario</h2>
            <form id="register-form" class="popUp-form">
                <label>Nombre de usuario*:</label>
                <input type="text" id="username" minlength="3" required><br>
                
                <label>Contraseña*:</label>
                <input type="password" id="password" required><br>
                
                <label>Repetir contraseña*:</label>
                <input type="password" id="repeatPassword" required><br>
                
                <label>Correo electrónico*:</label>
                <input type="email" id="email" required><br>
                
                <label>Ciudad*:</label>
                <input type="text" id="city" minlength="3" required><br>
                
                <label>País*:</label>
                <input type="text" id="country" minlength="3" required><br>
                
                <label>Género:</label>
                <select id="gender">
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select><br>
                
                <label>¿Cuántos hijos / hijas tienes?</label>
                <input type="number" id="children-number" min="0" value="0"><br>
                
                <div id="children-info"></div>

                <div>
                    <button type="submit" class="button register" name="register">Registrar</button>
                    <button type="submit" class="button login" name="cancel">Cancelar</button>
                    <button type="submit" class="button register" name="clear">Limpiar</button>
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

    // event for generating fields for each children
    let container = document.getElementById("children-number")
    if (!container){
        return
    }

    container.addEventListener("input", function () {
        const numChildren = parseInt((this as HTMLInputElement).value);
        generateChildrenForm(numChildren);
    });

    // clear all fields of the register form
    document.getElementsByName('clear')[0].addEventListener('click', (event) => {
        event.preventDefault()
        const newPopup = document.createElement("div");
        newPopup.className = "confirmation";
        // form declaration
        newPopup.innerHTML = `
            <form class="popUp-form">
                <label>¿Estás seguro que quieres limpiar todo?</label>
                <div style="display: flex; gap: .75rem; flex-direction: row; margin-top: 1rem;">
                    <button type="submit" class="button register" name="confirm">Confirmar</button>
                    <button type="submit" class="button login" name="negate">Cancelar</button>
                </div>
            </form>
        `;
        // form styles
        newPopup.style.position = "fixed";
        newPopup.style.top = "50%";
        newPopup.style.left = "50%";
        newPopup.style.transform = "translate(-50%, -50%)";
        newPopup.style.borderRadius = "10px";
        newPopup.style.zIndex = "1000";

        document.body.appendChild(newPopup);

        newPopup.addEventListener("submit", function (event) {
            event.preventDefault();
            const buttonClicked = event.submitter;
            if (!buttonClicked){
                return
            }
            if ((buttonClicked as HTMLButtonElement).name === "confirm") {
                const registerForm = document.getElementById('register-form');

                if (registerForm instanceof HTMLFormElement) {
                    clearFormContent(registerForm);
                } else {
                    console.error("El formulario no se encontró o no es un elemento HTMLFormElement.");
                }
                closePopUp(buttonClicked)

            } else if ((buttonClicked as HTMLButtonElement).name === "negate") {
                if (event.target instanceof HTMLElement) {
                    closePopUp(event.target);
                } else {
                    console.error("El target no es un elemento HTMLButtonElement.");
                }
            }
        });
    })

    document.getElementsByName('cancel')[0].addEventListener('click', (event) => {
        event.preventDefault()
        const newPopup = document.createElement("div");
        newPopup.className = "confirmation";
        // form declaration
        newPopup.innerHTML = `
            <form class="popUp-form">
                <label>¿Estás seguro que quieres cancelar?</label>
                <div style="display: flex; gap: .75rem; flex-direction: row; margin-top: 1rem;">
                    <button type="submit" class="button register" name="confirm">Confirmar</button>
                    <button type="submit" class="button login" name="negate">Cancelar</button>
                </div>
            </form>
        `;

        // form styles
        newPopup.style.position = "fixed";
        newPopup.style.top = "50%";
        newPopup.style.left = "50%";
        newPopup.style.transform = "translate(-50%, -50%)";
        newPopup.style.borderRadius = "10px";
        newPopup.style.zIndex = "1000";

        document.body.appendChild(newPopup);

        newPopup.addEventListener("submit", function (event) {
            event.preventDefault();
            const buttonClicked = event.submitter;
            if (!buttonClicked){
                return
            }
            if ((buttonClicked as HTMLButtonElement).name === "confirm") {
                closePopUp(popup)
                if (event.target instanceof HTMLElement) {
                    closePopUp(event.target);
                } else {
                    console.error("El target no es un elemento HTMLButtonElement.");
                }
            } else if ((buttonClicked as HTMLButtonElement).name === "negate") {
                if (event.target instanceof HTMLElement) {
                    closePopUp(event.target);
                } else {
                    console.error("El target no es un elemento HTMLButtonElement.");
                }
            }
        });
    })

    // inner logic for localStorage dump
    let regForm = document.getElementById("register-form")
    if (!regForm){
        return
    }
    regForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const form = document.getElementById("register-form");
        if (!form){
            return
        }
        const { username, password, repeatPassword, email, city, country } = {
            username: (form as HTMLFormElement).username.value,
            password: (form as HTMLFormElement).password.value,
            repeatPassword: (form as HTMLFormElement).repeatPassword.value,
            email: (form as HTMLFormElement).email.value,
            city: (form as HTMLFormElement).city.value,
            country: (form as HTMLFormElement).country.value,
        };

        if (password !== repeatPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const children = gatherChildrenData()

        // Prepare data to store
        let jsonToAdd = {
            username: username,
            password: password,
            email: email,
            city: city,
            country: country,
            children: children,
        };

    let users: { username: string; password: string; email: string; city: string; country: string; children: { name: string; age: number; favoriteToys: string }[] }[] = [];

    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
        try {
            users = JSON.parse(storedUsers);
        } catch (error) {
            console.error("Error al parsear los usuarios desde localStorage", error);
            users = []; 
        }
    }
        users.push(jsonToAdd);
        localStorage.setItem("users", JSON.stringify(users));
        popup.remove(); // close the popUp
        window.location.reload()
    });
    
}
