import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero__title");
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement,
            handler: function () {
                that.siteHeader.addClass("site-header--dark");
            }
        });
    }
}

export default StickyHeader;
