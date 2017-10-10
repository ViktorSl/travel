import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(element, offset) {
    this.itemsToReveal = $(element);
    this.hideInitially();
    this.createWayPoints(offset);
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWayPoints(off) {
    this.itemsToReveal.each(function(el) {
      let currentItem = this;
      new Waypoint({
        element:currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: off
      })
    });
  }
}

export default RevealOnScroll;