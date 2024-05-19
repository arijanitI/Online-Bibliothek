// ***********************************************************************************************
//  Login-Formular JavaScript
//  ***********************************************************************************************

// Event Listener, um sicherzustellen, dass das Skript nach dem Laden des DOMs ausgeführt wird
document.addEventListener('DOMContentLoaded', () => {
    console.log('Login-Skript geladen');

    // Auswahl des Login-Formulars
    const loginForm = document.querySelector('.login-form');

    // Hinzufügen eines Submit-Event-Listeners zum Login-Formular
    loginForm.addEventListener('submit', (e) => {
        // Standardverhalten der Formularübermittlung verhindern
        e.preventDefault();

        // Platzhalter für die Login-Funktionalität (noch nicht implementiert)
        alert('Login-Funktionalität noch nicht implementiert');

        // Nach erfolgreichem Login auf die Startseite weiterleiten
        window.location.href = '../index.html';
    });
});
