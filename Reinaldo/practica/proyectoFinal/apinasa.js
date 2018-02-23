<html>
<body>
// Tu solución	var contenido = "";
  function apiNasa (ciudad) {
      var xmlHttp = new XMLHttpRequest(),
      APIKey = '', // Puedes usar una cuenta gratuita -> http://openweathermap.org/price
      cURL = 'https://images-api.nasa.gov';

      xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
              var datos = (JSON.parse(xmlHttp.responseText));
              contenido += "<h1>"+datos.name+"</h1>"
              contenido += "<p>"+datos.weather[0].description+"</p>"
              document.body.innerHTML = contenido;
          } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
              datos = JSON.parse(xmlHttp.responseText);
              console.error("ERROR! 404");
              console.info(datos);
          }
      };

      xmlHttp.open( "GET", cURL, true );
      xmlHttp.send();
  }

apiNasa("Madrid");

</body>
</html>
