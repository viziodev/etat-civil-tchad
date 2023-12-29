class PaginationComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._currentPage = 1;
        this._totalPages = 1;
        this.render();
    }

    connectedCallback() {
        this.addEventListener('click', this.handleButtonClick.bind(this));
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.handleButtonClick);
    }

    static get observedAttributes() {
        return ['current-page', 'total-pages'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'current-page') {
            this._currentPage = parseInt(newValue, 10) || 1;
        } else if (name === 'total-pages') {
            this._totalPages = parseInt(newValue, 10) || 1;
        }

        this.render();
    }

    get currentPage() {
        return this._currentPage;
    }

    set currentPage(value) {
        this.setAttribute('current-page', value);
    }

    get totalPages() {
        return this._totalPages;
    }

    set totalPages(value) {
        this.setAttribute('total-pages', value);
    }

    handleButtonClick(event) {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('pagination-button')) {
            const pageNumber = target.dataset.pageNumber;

            if (pageNumber === 'Previous') {
                // Gérer le clic sur le bouton "Précédent"
                console.log('Go to Previous Page');
            } else if (pageNumber === 'Next') {
                // Gérer le clic sur le bouton "Suivant"
                console.log('Go to Next Page');
            } else {
                // Gérer le clic sur un numéro de page
                console.log(`Go to Page ${pageNumber}`);
            }
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link href="../../../assets/css/flowbite/flowbite.min.css" rel="stylesheet" />
        <link href="../../../assets/css/style.css" rel="stylesheet" />
               
            <nav aria-label="Page navigation example">
                <ul class="pagination inline-flex -space-x-px text-sm">
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8  ms-0 mr-2  text-gray-500 bg-white border  border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" data-page-number="Previous">
                            <span class="sr-only">Previous</span>
                            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                        </a>
                    </li>
                    ${Array.from({ length: this._totalPages }, (_, index) =>
                        `<li><a href="#" class=" flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${index + 1 === this._currentPage ? 'pagination active' : ''}" data-page-number="${index + 1}">${index + 1}</a></li>`
                    ).join('')}
                    <li>
                        <a href="#" class="flex items-center justify-center ml-2 px-3 h-8  text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" data-page-number="Next">
                            <span class="sr-only">Next</span>
                            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('pagination-component', PaginationComponent);
