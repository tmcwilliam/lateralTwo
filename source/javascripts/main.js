var Lateral = (function() {
  var lateral = {

    aspectRatio: getAspectRatio(),

    init: function() {
      // jQuery.support.cors = true;
      lateral.orbit();
      $('#testAPIButton').click(function(ev){
        // lateral.testAPI();
        lateral.testWineAPI();
      });
    },

    orbit: function() {
      $("#featured").orbit({
        timer: true,
        pauseOnHover: true,
        startClockOnMouseOut: true,
        fluid: true,
        captions: true,
        bullets: true,
      });
    },

    testAPI: function() {
      var wsUrl = "https://api.mindbodyonline.com/0_5/SiteService.asmx";
      var soapRequest = '<soapenv:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
                        '<soapenv:Header/>' +
                        '<soapenv:Body>' +
                        '<GetClassDescriptions xmlns="http://clients.mindbodyonline.com/api/0_5">' +
                        '<Request>' +
                        '<SourceCredentials>' +
                          '<SourceName>LateralFitness</SourceName>' +
                          '<Password>Lateral41</Password>' +
                          '<SiteIDs>' +
                            '<int>33786</int>' +
                          '</SiteIDs>' +
                        '</SourceCredentials>' +
                        '<XMLDetail>Full</XMLDetail>' +
                        '<PageSize>10</PageSize>' +
                        '<CurrentPageIndex>0</CurrentPageIndex>' +
                        '<ProgramIDs>' +
                          '<int>71</int>' +
                        '</ProgramIDs>' +
                        '</Request>' +
                        '</GetClassDescriptions>' +
                        '</soapenv:Body>' +
                        '</soapenv:Envelope>';


      $.ajax({
        type: "POST",
        url: wsUrl,
        contentType: "text/xml",
        dataType: "xml",
        data: soapRequest,
        crossDomain: true,
        success: function(data, textStatus, xhr){
          console.log(data);
          console.log(textStatus);
          console.log(xhr);
        },
        error: function(xhr, textStatus, errorThrown) {
          console.log(xhr);
          console.log(textStatus);
          console.log(errorThrown);
        }
      });
    },

    testWineAPI: function() {
      $.ajax({
        type: "GET",
        url: "http://localhost:3000/wines",
        success: function(response) {
          console.log(response);
        },
        error: function(xhr, error) {
          console.log(xhr);
          console.log(error);
        }
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
