//Aquí se escribiran los ejercicios con String

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    let emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let exampleFormControlInput1 = document.getElementById ("exampleFormControlInput1");
    let eexampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let alertError= document.getElementById("alertError");
    exampleFormControlInput1.value =exampleFormControlInput1.value.trim();
    alertError.style.display="none";
    alertError.innerHTML="";
    // console.log(exampleFormControlTextarea1.value.lenght);
    // console.log("[" + 
    //     exampleFormControlTextarea1.value.replaceAll(" ", "")
    //     +"]"
    // );
    // console.log(exampleFormControlTextarea1.value.replaceAll(" ", "").lenght);

    if(exampleFormControlTextarea1.value.trim().replaceAll(" ", "").length < 20){
        alertError.innerHTML="El mensaje debe contener 20 caracteres o más";
        alertError.style.display="block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select();        
    }//if
    
    if (exampleFormControlInput1.value.match(emailRegex)==null){
        alertError.style.display="block";
        alertError.innerHTML += "<br/>El correo no es válido.";
    }//
})
