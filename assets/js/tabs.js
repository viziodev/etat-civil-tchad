function showTab(tabId) {
    // Masquer tous les onglets
    var tabs = document.querySelectorAll('[role-tabs="tabpanel"]');
    tabs.forEach(function (tab) {
        tab.classList.add('hidden');
    });

    // Afficher l'onglet actif
    var activeTab = document.getElementById(tabId);
    activeTab.classList.remove('hidden');
console.log("iciciiicic");

}
$(document).ready(function() {
    // jQuery code goes here
    console.log("je suis jquery");
    var activeTabId = localStorage.getItem('activeTab');

    document.addEventListener("click", function(event) {
        if (event.target.closest('[role-tabs="tab"]')) {
            // Handle tab button click
            console.log("je suis icic");
            var tabButtons = document.querySelectorAll('[role-tabs="tab"]');
            console.log("tabButtons " , tabButtons);
            tabButtons.forEach(function (button) {
                button.addEventListener('click', function () {
                    console.log("Button clicked!");
        
                    // Réinitialiser la classe de tous les boutons
                    tabButtons.forEach(function(tabButton) {
                        tabButton.classList.remove("current");
                        
                        
                        tabButton.querySelector('div').classList.remove("maron-bg-color");
                        tabButton.querySelector('div').classList.add("bg-gray-300");
                    });
        
                    // Add the "current" class to the clicked tab button
                    button.classList.add("current");
                    button.querySelector('div').classList.remove("bg-gray-300");
                    button.querySelector('div').classList.add("maron-bg-color");
                    // Afficher l'onglet correspondant
                    var tabId = button.getAttribute('aria-tabs-controls');
                    localStorage.setItem('activeTab', tabId);

                    showTab(tabId);
                });
            });
          
        }
    });


    // var tabButtons2 = document.querySelectorAll('[role-tabs="tab"]');
    
    // tabButtons2.forEach(function (button, index) {
        
    //     // Activer le premier onglet par défaut
    //     console.log("active tab ", activeTabId);
    //     if ((index === 0 && !activeTabId) || (activeTabId && activeTabId === button.getAttribute('aria-tabs-controls'))) {
    //         button.classList.add("current");
    //         var defaultTabId = button.getAttribute('aria-tabs-controls');
    //         showTab(defaultTabId);
    //     }
    // });
});

