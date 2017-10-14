var a;      //Declara uma variavel. Mas ela esta indefinida.
var b = 0;
console.log(b);    //0
console.log(a);    //undefined
console.log(a+b); //NaN
const area_code = '515';
var aNumber = 555;
var aFloat = 555.0;

var underterminedValue = "elephant";
if (isNaN(parseInt(underterminedValue,2)))
{
  console.log("Nao é um numero");
}
else {
  console.log("É um numero");
}