// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 var arr = Object.entries(objeto);
 return arr;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 var obj = {};
 for ( var i = 0; i < string.length; i++){
    if(obj.hasOwnProperty(string[i])){
      obj[string[i]] = obj[string[i]] + 1; 
    } else {
      obj[string[i]] = 1;
    }
 }
 return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var contMin = '';
  var contMay = '';
  for(var i = 0; i<s.length; i++){
    if(s[i] === s[i].toLowerCase()){
      contMin = contMin + (s[i])
    } else{
      contMay = contMay + (s[i])
    }
  }
  return contMay + contMin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var separar = str.split(' '); //convierte en array de palabra por palabra
  var newArray = separar.map(function(el) { //map permite iterar sobre cada elemento de la array
    return el.split('').reverse().join(''); //split toma un elemento del mapa y lo separa letra por letra, reverse invierte el orden y join une la palabra en una string
  })
  var newStr = newArray.join(' ') //esto uno en una string la frase que tenia en newArray y deja un espacio entre palabras
  return(newStr);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
//tengo que separar los digitos del numero 
//invertir el orden de los digitos
//decir si el orden invertido es igual al orden original
  var str = numero.toString();
  var separar = str.split('');
  var newArray = separar.reverse();
  var newNumero = parseInt(newArray.join(''));
  if(numero === newNumero){
    return 'Es capicua'
  } else {
    return 'No es capicua'
  };
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //dividir las letras de la cadena.
  //voy a tener un array. condicional para que borre abc en un mapa para que devuelva la array sin eso?
  //volver a unir para que se haga una string
  var separar = cadena.split('');
  var newArray = separar.filter((el) => el !== 'a' && el !== 'b' && el !== 'c');
  var newString = newArray.join('');
  return newString;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var nuevoArray = arr.sort(function (a, b) {
    return a.length - b.length
  })
  return nuevoArray;

}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  
   
  //Escribe tu código aquí  
  var union = [];
  for(var i = 0; i < arreglo1.length; i++){
    for(var j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        union.push(arreglo1[i]);
      }
    }
  }
  return union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

