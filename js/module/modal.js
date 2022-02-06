export default class Modal {
  constructor(selector) {
    this.selector = document.querySelector(selector);
    this.sign = document.querySelectorAll('[data-login]');
    this.close = document.querySelector('.modal span');
  }

  openModal(e) {
    e.preventDefault();
    this.selector.classList.add('ative');
    this.selector.addEventListener('click', (e) => this.closeModal(e));
  }

  closeModal(e) {
    e.preventDefault();

    if (this.selector === e.target || e.target === this.close) {
      this.selector.classList.remove('ative');
    }
    this.selector.removeEventListener('click', (e) => this.closeModal(e));
  }

  init() {
    this.sign.forEach((item) => {
      item.addEventListener('click', (e) => this.openModal(e));
    });

    this.close.addEventListener('click', (e) => this.closeModal(e));
  }
}
