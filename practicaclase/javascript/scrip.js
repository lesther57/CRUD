var nombres ="lesther javier";
var apellido ="velasquez";
var edad = 18;
var carrera ="Ingenieria en sistemas";
var anio ="segundo año";


var datanombre = document.getElementById("datanombres");
datanombre.innerHTML=`
Mi nombre es:${nombres} ${apellido}<br/> y tengo la edad de ${edad} anios<br/> estoy en la carrera ${carrera}<br/> y estoy en ${anio}
`;


//console.write(nombres, apellido, edad); 