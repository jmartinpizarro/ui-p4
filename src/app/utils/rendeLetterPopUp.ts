export  function renderLetterPopUp() {
    const popup = document.createElement('div');

    const userLogged = localStorage.getItem('userLogged')
    let letters: [] = localStorage.getItem("letters")
        ? JSON.parse(localStorage.getItem("letters")!)
        : [];

    const renderLetters = () => {
        const lettersContainer = popup.querySelector('[name="letters-container"]');
        if (!lettersContainer){
            return
        }
        lettersContainer.innerHTML = ''; // Limpiar el contenedor antes de volver a renderizar
        if (lettersContainer instanceof HTMLElement) {
            lettersContainer.style.margin = '1rem';
        }

        let myLetters: Letter[] = []
        letters.forEach((letter) => {
            const myLetter = JSON.parse(letter)
            if (myLetter.username == userLogged) {
                myLetters.push(myLetter)
            }
        })

        interface Letter {
            name: string;
            letter: string;
            city: string;
            country: string;
        }

        myLetters.forEach((letter, index) => {
            const letterDiv = document.createElement('div');
            letterDiv.className = "letter-item";
            letterDiv.draggable = true;
            if (letterDiv instanceof HTMLElement) {
                letterDiv.dataset.index = index.toString(); // Convierte index a string
            }            
            letterDiv.style.display= 'flex'
            letterDiv.style.flexDirection = 'column'
            letterDiv.style.height = '300px'
            letterDiv.style.justifyContent = 'space-between'

            letterDiv.innerHTML = `
                <h3 class="common highlighted" style="margin: 0 auto;">${letter.name}</h3>
                <p class="common" style="margin: 0 auto; max-width: 200px">${letter.letter} from ${letter.city}, ${letter.country}</p>
                <button class="delete-letter register button" style="padding: .5rem .7rem; font-size: .8rem">Eliminar</button>
            `;

            const deleteButton = letterDiv.querySelector('.delete-letter');

            if (deleteButton) {
                deleteButton.addEventListener('click', () => {
                    if (confirm('¿Estás seguro de que quieres eliminar esta carta?')) {
                        letters.splice(index, 1);
                        localStorage.setItem("letters", JSON.stringify(letters));
                        renderLetters(); // Volver a renderizar las cartas después de eliminar
                    }
                });
            }

            lettersContainer.appendChild(letterDiv);
        });
    };

    popup.innerHTML = `
        <form id="myLetters" class="popUp-form">
            <h2>Mis cartas</h2>
            <div name='letters-container' style="display: flex; flex-direction: row; gap: 1rem; text-align: center; border: 1px solid white; border-radius: 10px;">
                <!-- Aquí se renderizan las cartas -->
            </div>
            
            <div>
                <button class="button login" type="submit" name="cancel">Salir</button>
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

    renderLetters();
    document.getElementsByName('cancel')[0].addEventListener('click', (event) => {
        event.preventDefault();
        popup.remove();
    });
}
