class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Jonathan Adolfo Pérez Isidro`;
  }
}
customElements.define("mi-footer", MiFooter);
