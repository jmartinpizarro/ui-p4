export function renderInfoPopUp() {
    const popup = document.createElement('div')
    popup.className = "login-popup";
    const userLogged = localStorage.getItem('userLogged')
    let users: User[] = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users")!)
    : []; // Si no existe, inicializamos como un array vacío

    let data: User | null = null

    interface Child {
        name: string;
        age: number;
        favoriteToys: string;
    }
    
    interface User {
        username: string;
        password: string;
        email: string;
        city: string;
        country: string;
        children: Child[];
    }
    if (!users){
        return
    }
    users.forEach((user : User) => {
        let toCompare = user
        if (toCompare.username === userLogged) {
            data = toCompare
        }
    });
    if (data) {
        popup.innerHTML = `
            <form id="myData" class="popUp-form">
                <h2>Mi cuenta</h2>
                <label>Nombre de usuario:</label>
                <input type="text" id="username" value="${(data as User).username}" required><br>
                
                <label>Contraseña:</label>
                <input type="password" id="password" value="${(data as User).password}" required><br>
                
                <label>Email:</label>
                <input type="email" id="email" value="${(data as User).email}" readonly><br>
                <small>Este email se usa para iniciar sesión</small><br>
                
                <label style="margin-top: .75rem">Ciudad:</label>
                <input type="text" id="city" value="${(data as User).city}"><br>
                
                <label>País:</label>
                <input type="text" id="country" value="${(data as User).country}"><br>
                
                <div>
                    <button class="button register" type="submit" name="save">Guardar cambios</button>
                    <button class="button login" type="submit" name="cancel">Cancelar</button>
                </div>
            </form>
        `;

        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.borderRadius = "10px";
        popup.style.zIndex = "1000";
        document.body.appendChild(popup);
    }
    document.getElementsByName('save')[0].addEventListener('click', (event) => {
        event.preventDefault()
        users.forEach((user: User, index: number) => { // for each user (string)
            console.log(user)
            let toCompare = user // convert it to json
            if (toCompare.username === userLogged) {
                let username = null;
                let password = null;
                let email = null;
                let city = null;
                let country = null;

                const form = document.querySelector<HTMLFormElement>('#myData');
                if (form) {
                    const usernameInput = form.querySelector<HTMLInputElement>('#username');

                    const passwordInput = form.querySelector<HTMLInputElement>('#password');

                    const emailInput = form.querySelector<HTMLInputElement>('#email');

                    const cityInput = form.querySelector<HTMLInputElement>('#city');

                    const countryInput = form.querySelector<HTMLInputElement>('#country');
                    if (usernameInput) {
                        username = usernameInput.value;  
                    }
                    if (passwordInput){
                        password = passwordInput.value
                    }
                    if (emailInput){
                        email = emailInput.value
                    }
                    if (cityInput){
                        city = cityInput.value
                    }
                    if (countryInput){
                        country = countryInput.value
                    }
                    
                }
                
                const children = toCompare.children

                users.splice(index, 1)


                let jsonToAdd: User = {
                    username: username || "", // Asigna un valor predeterminado si es null
                    password: password || "",
                    email: email || "",
                    city: city || "",
                    country: country || "",
                    children: children || [], // Asegúrate de que `children` sea un array válido
                };
                console.log(jsonToAdd)

                users.push(jsonToAdd);

                // Guardar el array completo como JSON en localStorage
                localStorage.setItem("users", JSON.stringify(users));

                if (username){
                    localStorage.setItem('userLogged', username)
                }
                popup.remove(); // close the popUp
            }
        }
        )
    }
    )
    document.getElementsByName('cancel')[0].addEventListener('click', (event) => {
        event.preventDefault()
        popup.remove()
    })
}
