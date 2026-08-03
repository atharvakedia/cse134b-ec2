customElements.define('profile-badge', class extends HTMLElement {});
customElements.define('hello-log', class extends HTMLElement {
  connectedCallback() {
    console.log('Hello World! (printed by <hello-log>)');
  }
});
