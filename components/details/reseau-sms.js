class ReseauSms extends HTMLElement {
    constructor() {
        super();

        // Créer un Shadow DOM
        this.attachShadow({ mode: 'open' });

       const icon = this.getAttribute("icon") ?? "";
       const classeIcon = this.getAttribute("classe-icon") ?? "";
       const textIcon = this.getAttribute("classe-text") ?? "";
       const text = this.getAttribute("text") ?? "";
       const bg = this.getAttribute("bg") ?? "";
       const classes = this.getAttribute("classes") ?? "";
       const id = this.getAttribute("mon-id") ?? "";
       const flb = UserUtility.linkFlowbite();
       const cssF = UserUtility.linkCss();
       // Créer la structure HTML du composant
       this.shadowRoot.innerHTML = `
       <link href="${flb}" rel="stylesheet" />
       <link href="${cssF}" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <button type="button" class="flex ${classes}  text-sm bg-${bg}-300 p-2 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="${id}" >
        <div class="flex justify-between">
         <span class="material-symbols-outlined ${classeIcon}  ">
           ${icon}
           </span>
           <p class="${textIcon}  font-bold">
             ${text}
           </p>
        </div>
       </button>
      
        `;
    }
}

customElements.define("reseau-sms" , ReseauSms);