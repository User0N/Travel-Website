import $ from 'jquery';

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = $(".feature-item");
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

}

export default RevealOnScroll;
