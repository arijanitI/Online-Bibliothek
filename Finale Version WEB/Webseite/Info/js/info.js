// ***********************************************************************************************
//  Info Seite JavaScript
//  ***********************************************************************************************

document.addEventListener('DOMContentLoaded', () => {
    console.log('Info Seite-Skript geladen');

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
});
