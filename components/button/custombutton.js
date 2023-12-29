class CustomButton extends HTMLElement {
    constructor() {
        super();

        // Créer un Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Récupérer le contenu et les classes passés comme attributs
        const content = this.getAttribute('content') || '';
        const classes = this.getAttribute('classes') || '';

        // Créer la structure HTML du composant
        this.shadowRoot.innerHTML = `
        <link href="../../../assets/css/flowbite/flowbite.min.css" rel="stylesheet" />
        <link href="../../../assets/css/style.css" rel="stylesheet" />
        
            <button type="button" class="py-2 flex items-center justify-center gap-1 w-full px-5 me-2 mb-2 text-sm font-medium ${classes}">
            <slot></slot>
            ${content ?? ''}

            </button>
        `;
    }
}

class CustomLinkButton extends HTMLElement {
    constructor() {
        super();

        // Créer un Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Récupérer le contenu et les classes passés comme attributs
        const content2 = this.getAttribute('content') || '';
        const classes2 = this.getAttribute('classes') || '';
        const link2 = this.getAttribute('link') || '#';

        // Créer la structure HTML du composant
        this.shadowRoot.innerHTML = `
        <link href="../../../assets/css/flowbite/flowbite.min.css" rel="stylesheet" />
        <link href="../../../assets/css/style.css" rel="stylesheet" />
            <a href="${link2}" type="button" class="py-2 flex items-center gap-1 w-full px-5 me-2 mb-2 text-sm font-medium ${classes2}">
            <slot></slot>
            ${content2}

            </a>
        `;
    }
    
}


// Déclarer le composant personnalisé
customElements.define('custom-button', CustomButton);
customElements.define('custom-link-button', CustomLinkButton);
