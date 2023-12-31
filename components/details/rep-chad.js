class RepChad extends HTMLElement {
    constructor() {
        super();

        // Créer un Shadow DOM
        this.attachShadow({ mode: 'open' });

      
        this.shadowRoot.innerHTML = `
        <link href="../../../assets/css/flowbite/flowbite.min.css" rel="stylesheet" />
        <link href="../../../assets/css/style.css" rel="stylesheet" />
        <div class="flex items-center justify-start w-full gap-2">

        <img class="h-auto max-w-xs" src="../assets/images/chad.png" alt="image description">

        <div class="flex flex-col">
            <p class="extra-bold-14-noir">
                RÉPUBLIQUE DU TCHAD
            </p>
            <p class="medium-14-blue-secondary">
                Unité - Travail - Progrés
            </p>
            <p class="uppercase medium-14-blue-secondary">
                AGENCE NATIONALE DES TITRES SÉCURISÉS
            </p>
        </div>
    </div>
      
        `;
    }
}

customElements.define("rep-chad" , RepChad);