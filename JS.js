var Nombre = document.getElementById("form4Example1");
var Email = document.getElementById("form4Example2");
var Mensaje = document.getElementById("form4Example3");


var form = document.getElementById("formulario");
form.addEventListener("submit", function(evt){
    evt.preventDefault();
    if(Nombre.value === null || Nombre.value === ""){
        alert("Ingresa tu nombre completo");
    }
    else if(Email.value === null || Email.value === ""){
        alert("Ingresa tu Correo electronico");
    }
    else if(Mensaje.value === null || Mensaje.value === ""){
        alert("Ingresa tu Mensaje");
    }
    else{
        alert(Nombre.value + " Mensaje enviado con Exito . \n Hemos recibido tu mensaje. \n A la brevedad responderemos tu consulta. \n Muchas gracias!! IGLU");
        document.getElementById("formulario").reset();
    };
});