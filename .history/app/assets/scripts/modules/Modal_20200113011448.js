import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
    }

    events() {
        this.openModalButton.click(this.openModal);
        this.closeModalButton.click(this.closeModal);
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
    }

    closeModal() {

    }
}

export default Modal;
