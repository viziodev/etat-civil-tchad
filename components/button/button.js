// component-button.js
class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['label'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'label') {
            this.render();
        }
    }

    render() {
        const label = this.getAttribute('label') || 'Default';
        const htmB = document.getElementById("element-button-template");
        this.shadowRoot.innerHTML = `
        <link href="../../assets/css/flowbite/flowbite.min.css" rel="stylesheet" />
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        ${label}
        </button>
        `;
    }
}

customElements.define('my-button', MyButton);



