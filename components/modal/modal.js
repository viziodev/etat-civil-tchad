export default class CustomModal extends HTMLElement {
    constructor() {

        this.attachShadow({ mode : 'open' });

    };

    render = ()=> {
        this.shadowRoot.innerHTML = "";
       
    }
 
    
}