export function generateChildrenForm(numChildren: number) {
    const childrenInfoDiv = document.getElementById("children-info");
    if (!childrenInfoDiv){
        console.error('childrenInfoDiv no eixiste')
        return
    }

    childrenInfoDiv.innerHTML = ""; // clear previous content

    for (let i = 0; i < numChildren; i++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("child-form");
        childDiv.innerHTML = `
            <h3>Hijo/a ${i + 1}</h3>
            <label>Nombre*:</label>
            <input type="text" minlength="3" name="name" required><br>
            <label>Edad*:</label>
            <input type="number" min="0" name="age" required><br>
            <label>Juguetes favoritos:</label>
            <input type="text" name="toys"><br>
        `;
        childrenInfoDiv.appendChild(childDiv);
    }
}

export function clearFormContent(form: HTMLFormElement){
    form.reset()
}

export function closePopUp(button: HTMLElement){
    const popup = button.closest('.register-popup, .login-popup, .popUp-form');
    if (popup) {
        popup.remove()
    }
}

export function gatherChildrenData() {
    const children: { name: string; age: number; favoriteToys: string }[] = [];
    const childForms = document.querySelectorAll(".child-form");

    childForms.forEach((childForm) => {
        const nameInput = childForm.querySelector('input[name="name"]') as HTMLInputElement | null;
        const ageInput = childForm.querySelector('input[name="age"]') as HTMLInputElement | null;
        const toysInput = childForm.querySelector('input[name="toys"]') as HTMLInputElement | null;

        if (nameInput && ageInput && toysInput) {
            const childName = nameInput.value.trim();
            const childAge = parseInt(ageInput.value, 10) || 0; // Por defecto, 0 si no es un número válido
            const childToys = toysInput.value.trim();

            children.push({
                name: childName,
                age: childAge,
                favoriteToys: childToys,
            });
        }
    });

    return children;
}

export function errorPopUp(message: string, error: boolean) {
    const popup = document.createElement("div");

    popup.className = "error-popup";

    popup.innerHTML = `<p>${message}</p>`;

    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.padding = "15px";
    if (error) {
        popup.style.backgroundColor = "red";
        popup.style.color = "white";
    }
    popup.style.backgroundColor = "white";
    popup.style.color = "green";
    popup.style.fontSize = "16px";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    popup.style.zIndex = "1000";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);
}