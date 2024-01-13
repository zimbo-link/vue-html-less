export class LessElement extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(document.createElement('template').content.cloneNode(true));
    } 

    html (html) {
        this.shadowRoot.innerHTML = html;
    }
}