class Breadcrumb extends HTMLElement {
    constructor() {
      super();
  
      // Créer une shadow DOM pour isoler les styles du composant des styles de la page
      this.attachShadow({ mode: 'open' });
  

      const data = JSON.parse(this.getAttribute('data'));

      // Créer la structure HTML en utilisant les données
     
    
      this.shadowRoot.innerHTML = `
      <link href="../../../assets/css/flowbite/flowbite.min.css" rel="stylesheet" />
      <link href="../../../assets/css/style.css" rel="stylesheet" />
        <nav class="flex justify-between" aria-label="Breadcrumb">
          <ol class="inline-flex items-center mb-3 sm:mb-0">
            ${data.map(item => (
              item.url
                ? `<a class="text-sm text-gray-400" href="${item.url}">${item.label}</a>`
                : `<span class="text-sm ${item.class}">${item.label}</span>`
            )).join('<span class="mx-2 text-gray-400">/</span>')}
          </ol>
        </nav>
      `;
    
      const styleSheet = new CSSStyleSheet();
      
      this.shadowRoot.adoptedStyleSheets = [styleSheet, ...document.adoptedStyleSheets];
    }
  
    
  }
  
  // Enregistrez le nouveau composant personnalisé
  customElements.define('breadcrumb-element', Breadcrumb);
  