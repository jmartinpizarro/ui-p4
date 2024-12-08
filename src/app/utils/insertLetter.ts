import { errorPopUp } from "./children";

export function insertLetter(event: React.MouseEvent<HTMLButtonElement>) {
    if (event) {
        event.preventDefault();
    }

    // Obtener el formulario por su nombre
    const form = document.getElementsByName('letter')[0] as HTMLFormElement;

    // Obtener valores de los campos
    const formData = {
        name: (form.querySelector('#Nombre') as HTMLInputElement).value,
        email: (form.querySelector('#Correo\\ Electrónico') as HTMLInputElement).value,
        city: (form.querySelector('#Ciudad') as HTMLInputElement).value,
        country: (form.querySelector('#País') as HTMLInputElement).value,
        letter: (form.querySelector('#Carta\\ para\\ Papá\\ Noel') as HTMLInputElement).value,
    };

    const { name, email, city, country, letter } = formData;

    // Verificar si el usuario está logueado
    const isLogged = localStorage.getItem('userLogged');
    if (isLogged === 'null') {
        errorPopUp('¡Parece que no has iniciado sesión con ningún usuario!', true);
    } else {
        // Validar el formulario
        const validationError = validateForm(name, email, city, country, letter);
        if (validationError === '') {
            uploadData(name, email, city, country, letter);
            errorPopUp('¡Tu carta ha sido enviada con éxito!', false);
            form.reset(); // Limpiar el formulario
        } else {
            errorPopUp(validationError, true);
        }
    }
}

function validateForm(name: string, email: string, city: string, country: string, letter: string) {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (typeof name !== 'string' || name.length <= 0) {
        return 'Nombre de usuario inválido';
    }
    if (typeof email !== 'string' || email.length <= 0 || !emailRegEx.test(email)) {
        return 'Email de usuario inválido';
    } 

    if (typeof city !== 'string' || city.length <= 0) {
        return 'Ciudad del usuario inválida';
    }

    if (typeof country !== 'string' || country.length <= 0) {
        return 'País del usuario inválido';
    }

    if (typeof letter !== 'string' || letter.length <= 0) {
        return 'La carta del usuario no es válida';
    }

    return ''; // no error
}

function uploadData(name: string, email: string, city: string, country: string, letter: string){
    let jsonData = {
        "username": localStorage.getItem('userLogged'),
        "name": name,
        "email": email,
        "city": city,
        "country": country,
        "letter": letter
    }

    let jsonToAppend = JSON.stringify(jsonData); // Transform it into JSON

    let currentArray = localStorage.getItem('letters') 
        ? JSON.parse(localStorage.getItem('letters')!)
        : []; 

    currentArray.push(jsonToAppend); 
    localStorage.setItem('letters', JSON.stringify(currentArray));
    return true;
}