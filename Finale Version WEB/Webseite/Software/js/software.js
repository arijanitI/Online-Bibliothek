// ***********************************************************************************************
//  Software Seite JavaScript
//  ***********************************************************************************************

document.addEventListener('DOMContentLoaded', () => {
    console.log('Software Seite-Skript geladen');

    // Suchfunktion
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    const modules = [
        { id: 106, title: "Datenbanken abfragen, bearbeiten und verwalten", category: "software" },
        { id: 107, title: "ICT-Lösungen mit Blockchain-Technologie umsetzen", category: "software" },
        { id: 109, title: "Dienste in der Public Cloud betreiben und überwachen", category: "software" },
        { id: 110, title: "Daten mit Tools analysieren und darstellen", category: "software" },
        { id: 114, title: "Codierung, Kompression und Verschlüsselungsverfahren einsetzen", category: "software" },
        { id: 164, title: "Datenbanken erstellen und Daten einfügen", category: "software" },
        { id: 165, title: "NoSQL-Datenbanken einsetzen", category: "software" },
        { id: 183, title: "Applikationssicherheit implementieren", category: "software" },
        { id: 185, title: "Sicherheitsmaßnahmen für KMU IT analysieren & implementieren", category: "software" },
        { id: 190, title: "Virtualisierungsplattform aufbauen", category: "software" },
        { id: 210, title: "Public Cloud für Anwendungen nutzen", category: "software" },
        { id: 217, title: "Service für Internet of Everything konzipieren, planen und aufbauen", category: "software" },
        { id: 223, title: "Multi-User-Applikationen objektorientiert realisieren", category: "software" },
        { id: 248, title: "ICT-Lösungen mit aktuellen Technologien realisieren", category: "software" },
        { id: 254, title: "Geschäftsprozesse im eigenen Berufsumfeld beschreiben", category: "software" },
        { id: 259, title: "ICT-Lösungen mit Machine Learning entwickeln", category: "software" },
        { id: 294, title: "Frontend einer interaktiven Webapplikation realisieren", category: "software" },
        { id: 295, title: "Backend für Applikationen realisieren", category: "software" },
        { id: 306, title: "Kleinprojekte im eigenen Berufsfeld abwickeln", category: "software" },
        { id: 319, title: "Applikationen entwerfen und implementieren", category: "software" },
        { id: 320, title: "Objektorientiert programmieren", category: "software" },
        { id: 321, title: "Verteilte Systeme programmieren", category: "software" },
        { id: 322, title: "Benutzerschnittstellen entwerfen und implementieren", category: "software" },
        { id: 323, title: "Funktional Programmieren", category: "software" },
        { id: 324, title: "DevOps-Prozesse mit Tools unterstützen", category: "software" },
        { id: 335, title: "Mobile-Applikation realisieren", category: "software" },
        { id: 346, title: "Cloud Lösungen konzipieren und realisieren", category: "software" },
        { id: 347, title: "Dienst mit Container anwenden", category: "software" },
        { id: 426, title: "Software mit agilen Methoden entwickeln", category: "software" },
        { id: 431, title: "Aufträge im eigenen Berufsumfeld selbstständig durchführen", category: "software" },
        { id: 450, title: "Applikationen testen", category: "software" },
        { id: 241, title: "Innovative ICT-Lösungen initialisieren", category: "software" },
        { id: 245, title: "Innovative ICT-Lösungen umsetzen", category: "software" }
    ];

    // Alle Module in der Übersicht anzeigen
    const moduleContainer = document.getElementById('module-container');
    modules.forEach(module => {
        const moduleItem = document.createElement('div');
        moduleItem.classList.add('module-item');
        moduleItem.innerHTML = `<i class="fa fa-folder" aria-hidden="true"></i><p>Modul ${module.id}</p>`;
        moduleItem.addEventListener('click', () => {
            openModule(module.id);
        });
        moduleContainer.appendChild(moduleItem);
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';
        if (query.length > 0) {
            const filteredModules = modules.filter(module => module.id.toString().includes(query) || module.title.toLowerCase().includes(query));

            if (filteredModules.length > 0) {
                const softwareModules = filteredModules.filter(mod => mod.category === 'software');
                const buecherModules = filteredModules.filter(mod => mod.category === 'buecher');

                if (softwareModules.length > 0) {
                    const softwareCategory = document.createElement('div');
                    softwareCategory.classList.add('search-result-category');
                    softwareCategory.textContent = 'Software:';
                    searchResults.appendChild(softwareCategory);

                    softwareModules.forEach(module => {
                        const resultItem = document.createElement('div');
                        resultItem.classList.add('search-result-item');
                        resultItem.textContent = `Modul ${module.id}: ${module.title}`;
                        resultItem.addEventListener('click', () => {
                            openModule(module.id);
                        });
                        searchResults.appendChild(resultItem);
                    });
                }

                if (buecherModules.length > 0) {
                    const buecherCategory = document.createElement('div');
                    buecherCategory.classList.add('search-result-category');
                    buecherCategory.textContent = 'Bücher:';
                    searchResults.appendChild(buecherCategory);

                    buecherModules.forEach(module => {
                        const resultItem = document.createElement('div');
                        resultItem.classList.add('search-result-item');
                        resultItem.textContent = `Modul ${module.id}: ${module.title}`;
                        resultItem.addEventListener('click', () => {
                            openModule(module.id);
                        });
                        searchResults.appendChild(resultItem);
                    });
                }
                searchResults.style.display = 'block';
            } else {
                searchResults.style.display = 'none';
            }
        } else {
            searchResults.style.display = 'none';
        }
    });

    // Funktion zum Öffnen eines Moduls
    window.openModule = (moduleId) => {
        const module = modules.find(mod => mod.id === moduleId);
        if (module) {
            document.getElementById('module-title').textContent = `Modul ${module.id}: ${module.title}`;
            document.getElementById('module-description').textContent = `Details und Inhalte für Modul ${module.id} werden hier angezeigt.`;
            // Hier Software für das Modul laden und in #book-list anzeigen
            document.getElementById('module-content').style.display = 'block';
            document.getElementById('module-container').style.display = 'none';
        }
    };

    // Funktion zum Schließen des Modul Inhalts
    window.closeModule = () => {
        document.getElementById('module-content').style.display = 'none';
        document.getElementById('module-container').style.display = 'flex';
    };

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
