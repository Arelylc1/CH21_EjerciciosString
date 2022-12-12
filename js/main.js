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
    "Laura Aline"
    //Salida 
    "enilA aruaL"
    let frase= "Arely"
 
    for (let index = frase.length ; index >= 0; index--) {;
        console.log(frase.charAt(index))
    }