class CustomCard extends HTMLElement {
    constructor() {
        super();

        // Créer un Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Récupérer le contenu et les classes passés comme attributs
        const content = this.getAttribute('content') || '';
        const classes = this.getAttribute('classes') || '';
        const link = this.getAttribute('link') || '#';
        const flb = UserUtility.linkFlowbite();
        const cssF = UserUtility.linkCss();
        // Créer la structure HTML du composant
        this.shadowRoot.innerHTML = `
        <link href="${flb}" rel="stylesheet" />
        <link href="${cssF}" rel="stylesheet" />
            <a href="${link}" class="block rounded-lg max-w-sm ${classes}">
                <div class="max-w-sm w-full flex flex-col items-center justify-start">
                    <div class="p-4 flex items-start justify-start">
                        <h5 class="text-sm  font-normal uppercase leading-none bleu-fonce-color ">
                            ${content}
                        </h5>
                    </div>
                    <!--  Chart -->
                    <hr class=" border-t border-gray-200 w-full">

                      <div class="pb-2">
                        <slot></slot>
                       </div>
                </div>
            </a>
        `;
    }
}

// Déclarer le composant personnalisé
customElements.define('custom-card', CustomCard);
