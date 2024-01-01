class InfosDetails extends HTMLElement {
    constructor() {
        super();

        // Créer un Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Récupérer le contenu et les classes passés comme attributs
        const title = this.getAttribute('title') || '';
        const subtitle = this.getAttribute('subtitle') || '';

        // Créer la structure HTML du composant
        this.shadowRoot.innerHTML = `
        <link href="assets/css/flowbite/flowbite.min.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
        
        <div class="flex flex-col">
        <p  class="medium-14-gris">
        ${title}
        </p>
        <p class="regular-16-noir">
           ${subtitle}
        </p>
    </div>
        `;
    }
}

customElements.define("infos-details" , InfosDetails);