// ***********************************************************************************************
//  Neues Passwort-Formular JavaScript
//  ***********************************************************************************************

// Event Listener, um sicherzustellen, dass das Skript nach dem Laden des DOMs ausgeführt wird
document.addEventListener('DOMContentLoaded', () => {
    console.log('Neues Passwort-Skript geladen');

    // Auswahl des Neues Passwort-Formulars
    const newPasswordForm = document.querySelector('#new-password-form');

    // Hinzufügen eines Submit-Event-Listeners zum Neues Passwort-Formular
    newPasswordForm.addEventListener('submit', (e) => {
        // Standardverhalten der Formularübermittlung verhindern
        e.preventDefault();

        // Passwortüberprüfung
        const newPassword = document.querySelector('#new_password').value;
        const confirmNewPassword = document.querySelector('#confirm_new_password').value;
        if (newPassword !== confirmNewPassword) {
            alert('Die neuen Passwörter stimmen nicht überein.');
            return;
        }

        // Platzhalter für die Passwort-Änderungsfunktionalität (noch nicht implementiert)
        alert('Passwort-Änderungs-Funktionalität noch nicht implementiert');
    });
});
