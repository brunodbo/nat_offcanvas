(function($) {

  'use strict';

  $(function() {
    var tmd = $('#tmd'),
        tmdOpen = $('#tmd-open'),
        tmdClose = $('#tmd-close'),
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
        isHidden = 'is-hidden',
        isAnimated = 'animated';

    function openTmd(animated) {
      // Open TMD wrapper.
      if (tmd.hasClass(isClosed)) {
        $(this).removeClass(isClosed);
      }
      tmd.addClass(isOpen);
      if (animated === true) {
        tmd.addClass(isAnimated);
      }
      // Push full width elements.
      if (tmdPushFEl.hasClass(isPulled)) {
        $(this).removeClass(isPulled);
      }
      tmdPushFEl.addClass(isPushed);
      if (animated === true) {
        tmdPushFEl.addClass(isAnimated);
      }
      // Push inner elements.
      if (tmdPushInnerEl.hasClass(isPulled)) {
        $(this).removeClass(isPulled);
      }
      tmdPushInnerEl.addClass(isPushed);
      if (animated === true) {
        tmdPushInnerEl.addClass(isAnimated);
      }
      // Hide elements.
      if (tmdHideEl.hasClass(isVisible)) {
        $(this).removeClass(isVisible);
      }
      tmdHideEl.addClass(isHidden);
      if (animated === true) {
        tmdHideEl.addClass(isAnimated);
      }
    }

    function closeTmd(animated) {
      // Close TMD wrapper.
      if (tmd.hasClass(isOpen)) {
        tmd.removeClass(isOpen);
      }
      tmd.addClass(isClosed);
      if (animated === true) {
        tmd.addClass(isAnimated);
      }
      // Pull back full width elements.
      if (tmdPushFEl.hasClass(isPushed)) {
        tmdPushFEl.removeClass(isPushed);
      }
      tmdPushFEl.addClass(isPulled);
      if (animated === true) {
        tmdPushFEl.addClass(isAnimated);
      }
      // Pull back inner elements.
      if (tmdPushInnerEl.hasClass(isPushed)) {
        tmdPushInnerEl.removeClass(isPushed);
      }
      tmdPushInnerEl.addClass(isPulled);
      if (animated === true) {
        tmdPushInnerEl.addClass(isAnimated);
      }
      // Show elements.
      if (tmdHideEl.hasClass(isHidden)) {
        tmdHideEl.removeClass(isHidden);
      }
      tmdHideEl.addClass(isVisible);
      if (animated === true) {
        tmdHideEl.addClass(isAnimated);
      }
    }

    if ($.cookie('nat_tmr') === 'open') {
      openTmd();
      tmdOpen.hide();
    }
    tmdOpen.click(function() {
      // console.log($.cookie('nat_tmr'));
      // if ($.cookie('nat_tmr') === 'undefined' || $.cookie('nat_tmr') === 'closed') {
        openTmd(true);
        tmdOpen.hide();
        $.cookie('nat_tmr', 'open');
      // }
    });
    tmdClose.click(function() {
      // else if ($.cookie('nat_tmr') === 'open') {
        closeTmd(true);
        tmdOpen.show();
        $.cookie('nat_tmr', 'closed');
      // }
    });
  });
})(jQuery);