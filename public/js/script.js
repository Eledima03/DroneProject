// Array di immagini dei droni per la prima cover
const droneImages1 = [
    'images/drone1.jpg',
    'images/drone2.jpg',
    'images/drone3.jpg',
    'images/drone4.jpg',
    'images/drone5.jpg'
];

// Array di immagini per la seconda cover
const peoples = [
    'images/persona1.jpg',
    'images/persona2.jpeg',
    'images/persona3.jpeg'
];

let currentIndex1 = 0;
let currentIndex2 = 0;

// Funzione per cambiare immagine con effetto di dissolvenza
function changeImage(coverElement, imagesArray, currentIndex) {
    let newIndex;

    // Garantire che la nuova immagine sia diversa dall'attuale
    do {
        newIndex = Math.floor(Math.random() * imagesArray.length);
    } while (newIndex === currentIndex);

    // Aggiorna lo stile dell'elemento con una nuova immagine di sfondo e dissolvenza
    coverElement.style.opacity = 0; // Opacità a 0
    setTimeout(() => {
        coverElement.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url('${imagesArray[newIndex]}')`;
        coverElement.style.opacity = 5; // Opacità a 1 dopo il cambio
    }, 0); // Tempo di attesa pari alla durata della transizione (1000 millisecondi = 1 secondo)

    return newIndex; // Restituisce il nuovo indice
}

// Funzioni di aggiornamento per entrambe le cover
function updateCover1() {
    currentIndex1 = changeImage(document.getElementById('cover'), droneImages1, currentIndex1);
}

function updateCover2() {
    currentIndex2 = changeImage(document.getElementById('us'), peoples, currentIndex2);
}

// Cambia immagine ogni 12 secondi per entrambe le cover
setInterval(updateCover1, 12000);
setInterval(updateCover2, 12000);

// Cambia l'immagine inizialmente per entrambe le cover
updateCover1();
updateCover2();

// Con questo codice sottostante, quando l'utente fa clic sul link di login,
// verrà simulato un processo di login.
// Se l'utente è loggato, il testo del link di login verrà modificato in "Logout"
// (puoi aggiungere la funzionalità di logout se necessario) e il bottone "Test" all'interno
// della cover verrà mostrato con il testo "Assemble".
// Assicurati di personalizzare l'URL del link di login e del bottone "Test" in base alle tue esigenze.

// Aggiunta del codice per la gestione del login
const loginLink = document.getElementById('loginLink');

loginLink.addEventListener('click', function(event) {
    event.preventDefault();

    const userLoggedIn = true;

    if (userLoggedIn) {
        loginLink.textContent = 'Logout';
        loginLink.href = '#logout';

        const testButton = document.querySelector('.cover__content .button');
        testButton.textContent = 'Assemble';
        testButton.href = '#assemble';
        testButton.style.display = 'inline-block';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const assembleButton = document.getElementById('assembleButton');

    // Funzione per mostrare un messaggio quando il bottone è disabilitato
    function showDisabledMessage(event) {
        event.preventDefault(); // Previene l'azione predefinita del link
        alert('You must be logged in to access this feature.');
    }

    // Aggiungi un listener per il click sul bottone disabilitato
    assembleButton.addEventListener('click', showDisabledMessage);

    // Simula il login con successo (questo dovrebbe essere il tuo evento reale di login)
    document.addEventListener('loginSuccess', function() {
        assembleButton.removeAttribute('disabled'); // Rimuove l'attributo 'disabled'
        assembleButton.removeEventListener('click', showDisabledMessage); // Rimuove il listener del messaggio
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".slider-change");
    const reviewContainer = document.querySelector(".review-container");
    
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSlide = document.getElementById(targetId);
            const slideIndex = Array.from(targetSlide.parentNode.children).indexOf(targetSlide);
            reviewContainer.style.transform = `translateX(-${slideIndex * 100 / 3}%)`;
        });
    });
});
