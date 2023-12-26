'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('accueil', 'accueil.html', true),            
            new Route('login', 'login.html'),
            new Route('liste-acte', 'liste-acte.html'),
        ]);
    }
    init();
}());
