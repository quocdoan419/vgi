/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

	$(function() { // Ready

    $('.menu-button').click(function() {
      $('.primary-navigation').toggleClass('open');
      return false;
    });

    // Label hiding
    var form_elements = $('.form-type-textfield, .webform-component-textfield, .webform-component-textfield, .webform-component-textarea, .form-email, .form-type-password, .webform-component-email');

    form_elements.find('input, textarea').change(function() {
      var elem = $(this);
      if(elem.val() != "")
        $('label[for="'+elem.attr('id')+'"]').hide();
    });

    form_elements.find('input, textarea').focus(function() {
      var elem = $(this);
      $('label[for="'+elem.attr('id')+'"]').hide();
    }).blur(function() {
      var elem = $(this);
      if(elem.val() == "")
        $('label[for="'+elem.attr('id')+'"]').show();
    });
    // End Label Hiding

    // Search/Filter
    $('.search-filter .search').click(function() {
      $(this).toggleClass('open');
      $('.dropdown-search').toggleClass('open');
      $('.search-filter .filter').removeClass('open');
      $('.dropdown-filter').removeClass('open');
    });

    $('.search-filter .filter').click(function() {
      $(this).toggleClass('open');
      $('.dropdown-filter').toggleClass('open');
      $('.search-filter .search').removeClass('open');
      $('.dropdown-search').removeClass('open');
      $('.dropdown-filter .title').removeClass('open').siblings('ul').removeClass('open');
    });

    $('.dropdown-filter .title').click(function() {
      $(this).toggleClass('open').siblings('ul').toggleClass('open');
      $('.dropdown-filter .title').not(this).removeClass('open').siblings('ul').removeClass('open');
    });
    // End Search/Filter

    // Accordions
    if ($('.view-id-engineered_systems_detail').length > 0) {
      var allPanels = $('.view-id-engineered_systems_detail .views-row > .content').hide();
      var allHeadings = $('.view-id-engineered_systems_detail .views-row > .heading');

      $('.view-id-engineered_systems_detail .views-row > .heading').click(function() {
        allHeadings.removeClass('active');
        allPanels.slideUp('fast');
        $(this).next().slideDown('fast');
        $(this).addClass('active');
        return false;
      });
    }
    // End Accordions

	}); // End Ready

})(jQuery, Drupal, this, this.document);
