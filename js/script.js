(function($) {

  'use strict';

  $(function() {
    var tmd = $('#tmd'),
        tmdToggle = $('#tmd-toggle'),
        tmdPushFEl = $('.tmd-push-f'),
        tmdPushInnerEl = $('.tmd-push-inner'),
        tmdHideEl = $('.tmd-hide'),
        // Close / open
        isOpen = 'is-open',
        isClosed = 'is-closed',
        // Push / pull
        isPushed = 'is-pushed',
        isPulled = 'is-pulled',
        // Hide / show
        isVisible = 'is-visible',
        isHidden = 'is-hidden';

    function openTmd() {
      // Open TMD wrapper.
      if (tmd.hasClass(isClosed)) {
        tmd.removeClass(isClosed);
      }
      tmd.addClass(isOpen);
      // Push full width elements.
      if (tmdPushFEl.hasClass(isPulled)) {
        tmdPushFEl.removeClass(isPulled);
      }
      tmdPushFEl.addClass(isPushed);
      // Push inner elements.
      if (tmdPushInnerEl.hasClass(isPulled)) {
        tmdPushInnerEl.removeClass(isPulled);
      }
      tmdPushInnerEl.addClass(isPushed);
      // Hide elements.
      if (tmdHideEl.hasClass(isVisible)) {
        tmdHideEl.removeClass(isVisible);
      }
      tmdHideEl.addClass(isHidden);
    }

    function closeTmd() {
      // Close TMD wrapper.
      if (tmd.hasClass(isOpen)) {
        tmd.removeClass(isOpen);
      }
      tmd.addClass(isClosed);
      // Pull back full width elements.
      if (tmdPushFEl.hasClass(isPushed)) {
        tmdPushFEl.removeClass(isPushed);
      }
      tmdPushFEl.addClass(isPulled);
      // Pull back inner elements.
      if (tmdPushInnerEl.hasClass(isPushed)) {
        tmdPushInnerEl.removeClass(isPushed);
      }
      tmdPushInnerEl.addClass(isPulled);
      // Show elements.
      if (tmdHideEl.hasClass(isHidden)) {
        tmdHideEl.removeClass(isHidden);
      }
      tmdHideEl.addClass(isVisible);
    }

    if ($.cookie('nat_tmr') === 'open') {
      openTmd();
    }
    tmdToggle.click(function() {
      // console.log($.cookie('nat_tmr'));
      if ($.cookie('nat_tmr') === 'undefined' || $.cookie('nat_tmr') === 'closed') {
        openTmd();
        $.cookie('nat_tmr', 'open');
      }
      else if ($.cookie('nat_tmr') === 'open') {
        closeTmd();
        $.cookie('nat_tmr', 'closed');
      }
    });
  });
})(jQuery);