class CustomTable extends HTMLElement {
    constructor() {
        super();

        // Créer un Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Récupérer les colonnes passées comme attributs
        const columns = this.getAttribute('columns') || '';
        const classes = this.getAttribute('classes') || '';


        // Créer la structure HTML du composant
        this.shadowRoot.innerHTML = `
        <link href="../../../assets/css/flowbite/flowbite.min.css" rel="stylesheet" />
            <div class="relative overflow-x-auto  ${classes}">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    ${columns}
                    <tbody>
                        <slot></slot>
                    </tbody>
                </table>
            </div>
        `;
    }
}

customElements.define('custom-table', CustomTable);
