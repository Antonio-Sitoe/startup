import Modal from './module/modal.js';
import initTabNav from './module/initTab.js';
import menuMobile from './module/menuMobile.js';
import program from './module/program.js';

initTabNav();
menuMobile();
program()

const modal = new Modal('.modal-container');
modal.init();
