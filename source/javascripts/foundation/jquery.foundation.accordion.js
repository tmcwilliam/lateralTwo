;(function ($, window, undefined){
  'use strict';

  $.fn.foundationAccordion = function (options) {
    var $accordion = $('.accordion');

    if ($accordion.hasClass('hover') && !Modernizr.touch) {
      $('.accordion li', this).on({
        mouseenter : function () {
          var p = $(this).parent(),
            flyout = $(this).children('.content').first();

          $('.content', p).not(flyout).hide().parent('li').removeClass('active'); //changed this
          flyout.show(0, function () {
            flyout.parent('li').addClass('active');
          });
        }
      });
    } else {
      $('.accordion li', this).on('click.fndtn', function () {
        var li = $(this),
            p = $(this).parent(),
            flyout = $(this).children('.content').first();

        if (li.hasClass('active')) {
          li.find('.content').slideUp('fast', function() {
              li.removeClass('active');
          });
          // p.find('li').removeClass('active').end().find('.content').hide();
        } else {
          $('.content', p).not(flyout).slideUp('fast', function(){
            $(this).parent('li').removeClass('active'); //changed this
          }); //changed this
          flyout.slideDown('fast', function () {
            flyout.parent('li').addClass('active');
          });
        }
      });
    }

  };

})( jQuery, this );