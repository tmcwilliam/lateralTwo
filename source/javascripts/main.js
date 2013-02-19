var Lateral = (function() {
  var lateral = {
    orbit: function() {
      console.log("start orbit");
      $("#featured").orbit({
        timer: false,
        pauseOnHover: true,
        captions: true
      });
    }
  };

  return {
    setupOrbit: lateral.orbit
  }
})();

Lateral.setupOrbit();
