let nombre= "Vanessa";
nombre= nombre.toUpperCase();
let letra= ""
let contFinal=0;



//function buscaRepetidos(cadena) {
    for (let index = 0; index < nombre.length; index++){
        console.log(nombre.charAt(index)); //Primero recorre mi cadena
        let contTemp=1;
        for (let cont = index+1; cont < nombre.length; cont++){
            if(nombre.charAt(index) == nombre.charAt(cont))
            contTemp++;
        }// for cont
        if (contTemp>contFinal){
            contFinal=contTemp;
            letra=nombre.charAt(index);
        }// contTemp>contFinal
    }// for index
    console.log(letra, contFinal);

    //Entrada
    //"Laura Aline"
    //Salida 
    //"enilA aruaL"

    
    // let frase= "Laura Aline"
 
    // for (let index = frase.length ; index >= 0; index--) {;
    //     console.log(frase.charAt(index))
    // }

    function reves(str) {
        let tmpStr=" ";
        for (letindice= str.length-1; indice>=0; indice--){
            tmpStr += str.charAt(indice);
        }//for indice
        return tmpStr;        
    }//reves


    /*Palíndromo:Palabra o expresión que es igual si se lee de izquierda a derecha, igual qeu derecha a iziquierdad
    Amma 
    Otto
    Anina
    Natan 
    Ana
    Siris
    Aziza
    Ramar
    Nayan 

    Radar
    Reconocer
    anita lava la tina*/
    
    function esPalindromo(str){
        str= str.toLoWerCase();
        str= str.replaceAll(" ", "")
        let res = false;
      
      if (reves(str)==str)
        return true;
    
    return false;
    } //esPalindromo