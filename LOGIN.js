function loginUsuario(){
    let usu= document.getElementById('usu').value;
    let passw= document.querySelector('#passw').value;

    const usuario ="Blue";
    const password ="abcdefg";

    if(usu == usuario){//la apertura de la llave es como el hacer y el cierre de la llave es el fin si de la sentencia de control
        if(passw == password){
            window.location.replace('home.html');
        }
        else{
            alert("contraseña incorrecta, Intente de Nuevo");
        }
    } 
    else{
        alert("Usuario incorrecto, Intente de Nuevo");
    }
}