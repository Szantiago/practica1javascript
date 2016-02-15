/*
*EP01 - practica 1
*Santiago Lozano
*Código:561212219
*
*Capicua
*Área de un Circulo
*Área de un cuadrado
*Área de un Triangulo
*Número de vocales
*Número de consonantes
*/
//---------------------Capicua------------------
var numero;
var numCambiado;
numero=prompt("Ingrese un numero del cual quiera saber si es capicua");
if(/^([0-9])*$/.test(numero))
{
  numCambiado=numero;
  numCambiado=numCambiado.split("").reverse().join("");
  j= numCambiado===numero ? numero +" es un capicua" : numero +" y "+numCambiado+" no es un capicua";
  console.log(j);
} else
  {
    console.log(numero +" no es un valor correcto")
  }
/*if(numero===numCambiado){
	console.log(numero + "es un capicua");
}
else
{
	console.log( numero + " no es un capicua");
}*/


//--------Área de un cuadrado----------------
var bh;
bh=prompt("Ingrese el lado del cuadrado");
var area =Math.pow(bh,2);
console.log("El area del cuadrado es: "+area);


//---------------Área de un Circulo----------------
var radio;
radio=prompt("Ingrese el radio del circulo");
var area= Math.PI* Math.pow(radio,2);
console.log(area);


//------------------Área de un Triangulo--------------------
var base;
var altura;
base=prompt("Ingrese la base del Triangulo");
altura=prompt("Ingrese la altura del Triangulo");
var area=(base * altura)/2;
console.log(area);


//---------------------------Contar vocales--------------------

var voc=[["a",0],["e",0],["i",0],["o",0],["u",0]];
var cont=0;
var palabra ;
palabra=prompt("");
if(!/^([0-9])*$/.test(palabra))
{
  palabra = palabra.toLowerCase();
  for(var i=0; i<voc.length; i++)
  {
    for(var x =0; x<palabra.length; x++)
    {
      if(palabra.charAt(x)===voc[i][0]){
        voc[i][1]++;
        cont=cont+voc[i][1];
      }
    }
  }
  str="Palabra: "+ palabra;
  if(cont!=0)
  {
    str= str+" tiene: ";
  }
  console.log(str);
  for(var k=0; k < voc.length; k++)
  {
    if(voc[k][1]!=0)
    {
      console.table(voc[k][0]+" = "+voc[k][1]);
    }
    else if( cont===0 )
      {
        console.log("La palabra " + palabra + " no tiene Vocales" );
      }
  }
}
  else
  {
    console.log("por favor ingrese una palabra valida");
  }



//-----------------------Contar consonantes------------------------
var cont=0;
var cons=[["b",0],["c",0],["d",0],["f",0],["g",0],
          ["h",0],["j",0],["k",0],["l",0],["m",0],["n",0],
          ["p",0],["q",0],["r",0],["s",0],["t",0],
          ["v",0],["w",0],["x",0],["y",0],["z",0]];
var palabra ;
palabra=prompt("");
if(!/^([0-9])*$/.test(palabra))
{
  palabra = palabra.toLowerCase();
  for(var i=0; i<cons.length; i++)
  {
    for(var x =0; x<palabra.length; x++)
    {
      if(palabra.charAt(x)===cons[i][0]){
        cons[i][1]++;
        cont=cont+cons[i][1];
      }
    }
  }
  str="Palabra: "+ palabra;
  if(cont!=0)
  {
    str= str+" tiene: ";
  }
  for(var k=0; k < cons.length; k++)
  {
    if(cons[k][1]!=0)
    {
      console.table(cons[k][0]+" = "+cons[k][1]);
    }
    else if( cont===0 )
      {
        console.log("La palabra " + palabra + " no tiene consonantes" );
      }
  }
}
  else
  {
    console.log("por favor ingrese una palabra valida");
  }
