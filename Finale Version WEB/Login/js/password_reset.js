// ***********************************************************************************************
//  Passwort-Reset-Formular JavaScript
//  ***********************************************************************************************

// Event Listener, um sicherzustellen, dass das Skript nach dem Laden des DOMs ausgeführt wird
document.addEventListener('DOMContentLoaded', () => {
    console.log('Passwort-Reset-Skript geladen');

    // Auswahl des Passwort-Reset-Formulars
    const passwordResetForm = document.querySelector('#password-reset-form');

    // Hinzufügen eines Submit-Event-Listeners zum Passwort-Reset-Formular
    passwordResetForm.addEventListener('submit', (e) => {
        // Standardverhalten der Formularübermittlung verhindern
        e.preventDefault();

        // Platzhalter für die Passwort-Reset-Funktionalität (noch nicht implementiert)
        alert('Passwort-Reset-Funktionalität noch nicht implementiert');
    });
});
