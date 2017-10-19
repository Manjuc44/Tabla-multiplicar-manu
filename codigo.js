
  var i=0
  var numero=parseInt(prompt('la tabla del:'));
  document.write("<table border='0'><tr><td></td><td></td><td></td></tr>");
  while((numero>100) || (numero<=0)){
    alert("ERROR");
    var numero=prompt('la talbla del:');
  }
  if(numero<=100){
  for(i=0; i<=10; i++){
  document.write("<tr><td>"+numero+" x " + i + "</td><td>" + numero * i + "</td></tr>");
  }


  document.write("</table>");
}
