import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        //this.menuContent.toggleClass("site-header-content--is-visible");
        console.log("temp.");
    }
}

export default MobileMenu;
