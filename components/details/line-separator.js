class LineSeparator extends HTMLElement {
    constructor() {
        super();

        // Créer un Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Récupérer le contenu et les classes passés comme attributs
        const classes = this.getAttribute('classes') || '';

        // Créer la structure HTML du composant
        this.shadowRoot.innerHTML = `
        <link href="../../../assets/css/flowbite/flowbite.min.css" rel="stylesheet" />
        <link href="../../../assets/css/style.css" rel="stylesheet" />
        <hr class="h-px px-2 my-8  w-full bg-gray-200 border-0 dark:bg-gray-700">
        `;
    }
}

customElements.define("line-separator" , LineSeparator);