function departamentos(){
  var boxes = ["MAQUINARIA",
  "CAPITAL HUMANO",
  "CONCESIONES",
  "CONTROL INTERNO",
  "OBRA CIVIL",
  "COMPRAS",
  "PLANTAS ASFALTOS",
  "TRITURADOS",
  "CONTABILIDAD",
  "INMOBILIARIA",
  "MERCADOTECNIA",
  "TECNOLOGIAS DE INFORMACION",
  "CEDEVI"];
  var contenido = "";

  for (var i = 0; i < boxes.length; i++){
    contenido += "<div class='cubes'>" + boxes[i] + "</div>";
  }
  document.getElementById('content').innerHTML = contenido;
}

function saludo(){
    document.getElementById('dialogo').innerHTML = "<h1> Hola! </h1>";
}
