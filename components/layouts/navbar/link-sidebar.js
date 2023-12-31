class LinkSidebar extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
  
      this.id = this.getAttribute('id') || '';
      this.href = this.getAttribute('href') || '#';
      this.icon = this.getAttribute('icon') || '';
      this.label = this.getAttribute('label') || '';
   
      this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link href="../../../assets/css/flowbite/flowbite.min.css" rel="stylesheet" />
        <link href="../../../assets/css/style.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
       
            <li id="${this.id}" >   
                <a href="${this.href}" class="flex lien-sidebar items-center secondary-bg-color p-2  text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span class="material-symbols-outlined">${this.icon}</span>
                    <span class="flex-1 ms-3 whitespace-nowrap">${this.label}</span>
                </a>
            </li>
        `;
    }
  
    
  }
  
  customElements.define('link-sidebar', LinkSidebar);
  