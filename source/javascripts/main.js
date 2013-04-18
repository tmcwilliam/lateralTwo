var Lateral = (function() {
  var lateral = {

    aspectRatio: getAspectRatio(),

    init: function() {
      lateral.orbit();
    },

    orbit: function() {
      $("#featured").orbit({
        timer: false,
        pauseOnHover: true,
        fluid: lateral.aspectRatio
      });
    }
  };

  function getWindowWidth() {
    return $(window).width();
  }

  function getAspectRatio() {
    return getWindowWidth() > 767 ? "16x5" : "16x20";
  }

  return {
    init: lateral.init
  }
})();

Lateral.init();
