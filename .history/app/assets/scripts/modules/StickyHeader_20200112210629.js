import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero__title");
    }

    createHeaderWaypoint() {
        new Waypoint({
            element: this.headerTriggerElement,
            handler: function () {
                this.siteHeader.addClass("site-header--dark");
            }
        });
    }
}

export default StickyHeader;
