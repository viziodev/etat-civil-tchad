'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('accueil', 'accueil.html', true),            
            new Route('liste-acte', 'liste-acte.html'),
            new Route('liste-acte-deces', 'liste-acte-deces.html'),
            new Route('liste-acte-divorce', 'liste-acte-divorce.html'),
            new Route('liste-acte-mariage', 'liste-acte-mariage.html'),
            new Route('ajout-acte', 'ajout-acte.html'),
            new Route('details-acte', 'details-acte.html'),
            new Route('accueil-valideur', 'accueil-valideur.html'),
            new Route('rechercher-lieu', 'rechercher-lieu.html'),
        ]);
    }
    init();
}());
