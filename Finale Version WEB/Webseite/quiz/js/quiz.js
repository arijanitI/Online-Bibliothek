document.addEventListener('DOMContentLoaded', () => {
    const modules = [
        { id: 106, title: "Datenbanken abfragen, bearbeiten und verwalten", category: "buecher" },
        { id: 164, title: "Datenbanken erstellen und Daten einfügen", category: "buecher" },
        { id: 293, title: "Webauftritt erstellen und veröffentlichen", category: "buecher" },
        { id: 319, title: "Applikationen entwerfen und implementieren", category: "buecher" },
        { id: 431, title: "Aufträge im eigenen Berufsumfeld selbstständig durchführen", category: "buecher" },
        { id: 107, title: "ICT-Lösungen mit Blockchain-Technologie umsetzen", category: "buecher" },
        { id: 109, title: "Dienste in der Public Cloud betreiben und überwachen", category: "buecher" },
        { id: 114, title: "Codierung, Kompression und Verschlüsselungsverfahren einsetzen", category: "buecher" },
        { id: 165, title: "NoSQL-Datenbanken einsetzen", category: "buecher" },
        { id: 190, title: "Virtualisierungsplattform aufbauen", category: "buecher" },
        { id: 210, title: "Public Cloud für Anwendungen nutzen", category: "buecher" },
        { id: 248, title: "ICT-Lösungen mit aktuellen Technologien realisieren", category: "buecher" },
        { id: 254, title: "Geschäftsprozesse im eigenen Berufsumfeld beschreiben", category: "buecher" },
        { id: 259, title: "ICT-Lösungen mit Machine Learning entwickeln", category: "buecher" },
        { id: 294, title: "Frontend einer interaktiven Webapplikation realisieren", category: "buecher" },
        { id: 295, title: "Backend für Applikationen realisieren", category: "buecher" },
        { id: 320, title: "Objektorientiert programmieren", category: "buecher" },
        { id: 322, title: "Benutzerschnittstellen entwerfen und implementieren", category: "buecher" },
        { id: 346, title: "Cloud Lösungen konzipieren und realisieren", category: "buecher" },
        { id: 347, title: "Dienst mit Container anwenden", category: "buecher" },
        { id: 426, title: "Software mit agilen Methoden entwickeln", category: "buecher" },
        { id: 110, title: "Daten mit Tools analysieren und darstellen", category: "buecher" },
        { id: 183, title: "Applikationssicherheit implementieren", category: "buecher" },
        { id: 185, title: "Sicherheitsmaßnahmen für KMU IT analysieren & implementieren", category: "buecher" },
        { id: 217, title: "Service für Internet of Everything konzipieren, planen und aufbauen", category: "buecher" },
        { id: 223, title: "Multi-User-Applikationen objektorientiert realisieren", category: "buecher" },
        { id: 306, title: "Kleinprojekte im eigenen Berufsfeld abwickeln", category: "buecher" },
        { id: 323, title: "Funktional Programmieren", category: "buecher" },
        { id: 335, title: "Mobile-Applikation realisieren", category: "buecher" },
        { id: 450, title: "Applikationen testen", category: "buecher" },
        { id: 241, title: "Innovative ICT-Lösungen initialisieren", category: "buecher" },
        { id: 245, title: "Innovative ICT-Lösungen umsetzen", category: "buecher" },
        { id: 321, title: "Verteilte Systeme programmieren", category: "buecher" },
        { id: 324, title: "DevOps-Prozesse mit Tools unterstützen", category: "buecher" }
    ];

    const uebungenContainer = document.getElementById('uebungen-container');
    const testsContainer = document.getElementById('tests-container');

    modules.forEach(module => {
        const uebungBtn = document.createElement('button');
        uebungBtn.classList.add('module-btn');
        uebungBtn.textContent = `Modul ${module.id}`;
        uebungBtn.addEventListener('click', () => openQuizPopup(module, 'Übung'));
        uebungenContainer.appendChild(uebungBtn);

        const testBtn = document.createElement('button');
        testBtn.classList.add('module-btn');
        testBtn.textContent = `Modul ${module.id}`;
        testBtn.addEventListener('click', () => openQuizPopup(module, 'Test'));
        testsContainer.appendChild(testBtn);
    });

    document.getElementById('search-input').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const searchResults = document.getElementById('search-results');
        searchResults.innerHTML = '';

        if (query) {
            const filteredModules = modules.filter(module => module.id.toString().includes(query));
            if (filteredModules.length > 0) {
                searchResults.style.display = 'block';
                const uebungCategory = document.createElement('div');
                uebungCategory.classList.add('search-result-category');
                uebungCategory.textContent = 'Übungen:';
                searchResults.appendChild(uebungCategory);

                filteredModules.forEach(module => {
                    const uebungResult = document.createElement('div');
                    uebungResult.classList.add('search-result-item');
                    uebungResult.textContent = `Modul ${module.id}: ${module.title}`;
                    uebungResult.addEventListener('click', () => openQuizPopup(module, 'Übung'));
                    searchResults.appendChild(uebungResult);
                });

                const testCategory = document.createElement('div');
                testCategory.classList.add('search-result-category');
                testCategory.textContent = 'Tests:';
                searchResults.appendChild(testCategory);

                filteredModules.forEach(module => {
                    const testResult = document.createElement('div');
                    testResult.classList.add('search-result-item');
                    testResult.textContent = `Modul ${module.id}: ${module.title}`;
                    testResult.addEventListener('click', () => openQuizPopup(module, 'Test'));
                    searchResults.appendChild(testResult);
                });
            } else {
                searchResults.style.display = 'none';
            }
        } else {
            searchResults.style.display = 'none';
        }
    });
});

function openQuizPopup(module, type) {
    const quizPopup = document.getElementById('quiz-popup');
    const moduleTitle = document.getElementById('module-title');
    const uebungBtn = document.getElementById('uebung-btn');
    const testBtn = document.getElementById('test-btn');
    const progressContainer = document.getElementById('progress-container');

    moduleTitle.textContent = `${module.title} - ${type}`;
    if (type === 'Übung') {
        uebungBtn.style.display = 'block';
        testBtn.style.display = 'none';
        progressContainer.style.display = 'block';
    } else {
        uebungBtn.style.display = 'none';
        testBtn.style.display = 'block';
        progressContainer.style.display = 'none';
    }

    quizPopup.style.display = 'block';
}

function closeQuizPopup() {
    const quizPopup = document.getElementById('quiz-popup');
    quizPopup.style.display = 'none';
}

function openSupportPopup() {
    const supportPopup = document.getElementById('support-popup');
    supportPopup.style.display = 'block';
}

function closeSupportPopup() {
    const supportPopup = document.getElementById('support-popup');
    supportPopup.style.display = 'none';
}

function startQuiz(type) {
    const actualQuizPopup = document.getElementById('actual-quiz-popup');
    actualQuizPopup.style.display = 'block';

    // Here you would initialize the quiz based on the type (Übung or Test) and the selected module
}

function closeActualQuizPopup() {
    const actualQuizPopup = document.getElementById('actual-quiz-popup');
    actualQuizPopup.style.display = 'none';
}
