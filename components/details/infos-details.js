class InfosDetails extends HTMLElement {
    constructor() {
        super();

        // Créer un Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Récupérer le contenu et les classes passés comme attributs
        const title = this.getAttribute('title') || '';
        const subtitle = this.getAttribute('subtitle') || '';
        const flb = UserUtility.linkFlowbite();
        const cssF = UserUtility.linkCss();
        // Créer la structure HTML du composant
        this.shadowRoot.innerHTML = `
        <link href="${flb}" rel="stylesheet" />
        <link href="${cssF}" rel="stylesheet" />
        
        <div class="flex flex-col ">
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