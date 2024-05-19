// ***********************************************************************************************
//  Registrierungs-Formular JavaScript
//  ***********************************************************************************************

// Event Listener, um sicherzustellen, dass das Skript nach dem Laden des DOMs ausgeführt wird
document.addEventListener('DOMContentLoaded', () => {
    console.log('Registrierungs-Skript geladen');

    // Auswahl des Registrierungs-Formulars
    const registerForm = document.querySelector('#register-form');

    // Hinzufügen eines Submit-Event-Listeners zum Registrierungs-Formular
    registerForm.addEventListener('submit', (e) => {
        // Standardverhalten der Formularübermittlung verhindern
        e.preventDefault();

        // Überprüfung der WISS-E-Mail-Adresse
        const email = document.querySelector('#email').value;
        if (!email.endsWith('@wiss.ch')) {
            alert('Bitte geben Sie eine gültige WISS-E-Mail-Adresse ein.');
            return;
        }

        // Passwortüberprüfung
        const password = document.querySelector('#password').value;
        const confirmPassword = document.querySelector('#confirm_password').value;
        if (password !== confirmPassword) {
            alert('Die Passwörter stimmen nicht überein.');
            return;
        }

        // Platzhalter für die Registrierungsfunktionalität (noch nicht implementiert)
        alert('Registrierungs-Funktionalität noch nicht implementiert');
    });
});
