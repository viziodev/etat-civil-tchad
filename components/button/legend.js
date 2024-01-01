class MyLegend extends HTMLElement {
    constructor() {
        super();

        // Créer un Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Récupérer le contenu et les classes passés comme attributs
        const span = this.getAttribute('span') || '';
        const text = this.getAttribute('text') || '';

        // Créer la structure HTML du composant
        this.shadowRoot.innerHTML = `
        <link href="assets/css/flowbite/flowbite.min.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        
          <div class="flex items-center text-gray-300 gap-1 justify-between text-sm p-2 ">
                <span class="material-symbols-outlined mt-1">
                    ${span}
                    </span>
                    <p>
                    ${text}
                    </p>
            </div>
        `;
    }
}


customElements.define('my-legend' , MyLegend);