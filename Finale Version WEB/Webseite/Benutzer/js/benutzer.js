// ***********************************************************************************************
// Benutzer Seite JavaScript
// ***********************************************************************************************
document.addEventListener('DOMContentLoaded', () => {
    console.log('Benutzer Seite-Skript geladen');

    // Beispielhafte Benutzerinformationen
    const userInfo = {
        username: 'benutzer123',
        firstname: 'Max',
        lastname: 'Mustermann',
        email: 'max.mustermann@wiss-schule.ch',
        password: 'password123',
        quizScore: 100,
        quizHistory: [
            { date: '2024-01-01', score: 80 },
            { date: '2024-01-15', score: 90 },
            { date: '2024-02-01', score: 100 }
        ]
    };

    // Benutzerinformationen anzeigen
    document.getElementById('header-title').textContent = `Willkommen! - ${userInfo.username}`;
    document.getElementById('username-header').textContent = `Benutzername: ${userInfo.username}`;
    document.getElementById('user-email').textContent = `E-Mail: ${userInfo.email}`;
    document.getElementById('quiz-score').textContent = `Dein aktueller Punktestand: ${userInfo.quizScore}`;

    const quizHistoryContainer = document.getElementById('quiz-history');
    userInfo.quizHistory.forEach(entry => {
        const historyItem = document.createElement('p');
        historyItem.textContent = `Datum: ${entry.date}, Punktestand: ${entry.score}`;
        quizHistoryContainer.appendChild(historyItem);
    });

    // Formular zum Speichern der Änderungen
    const userForm = document.getElementById('user-form');
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const updatedInfo = {
            username: document.getElementById('username').value,
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            newPassword: document.getElementById('new-password').value,
            confirmPassword: document.getElementById('confirm-password').value
        };

        if (updatedInfo.newPassword !== updatedInfo.confirmPassword) {
            alert('Das neue Passwort und die Bestätigung stimmen nicht überein.');
            return;
        }

        // Hier Benutzerinformationen aktualisieren (z.B. in der Datenbank speichern)
        console.log('Aktualisierte Benutzerinformationen:', updatedInfo);
        alert('Deine Änderungen wurden gespeichert.');
    });

    // Support Popup
    const supportPopup = document.getElementById('support-popup');

    window.openSupportPopup = () => {
        supportPopup.style.display = 'block';
    };

    window.closeSupportPopup = () => {
        supportPopup.style.display = 'none';
    };

    const supportForm = document.getElementById('support-form');
    supportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Hier die Support-Anfrage per Mail versenden
        alert('Support-Anfrage wurde gesendet.');
        supportPopup.style.display = 'none';
    });

    // Einstellungen Popup
    const settingsPopup = document.getElementById('settings-popup');

    window.openSettings = () => {
        settingsPopup.style.display = 'block';
        document.getElementById('username').value = userInfo.username;
        document.getElementById('firstname').value = userInfo.firstname;
        document.getElementById('lastname').value = userInfo.lastname;
        document.getElementById('email').value = userInfo.email;
    };

    window.closeSettingsPopup = () => {
        settingsPopup.style.display = 'none';
    };

    // Logout-Funktion
    window.logout = () => {
        window.location.href = '../html/login.html';
    };
});
