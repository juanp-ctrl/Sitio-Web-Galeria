let frm, pst;

window.onload = ()=>{
    frm = document.getElementById("form-login");
    pst = new Pristine(frm);

    frm.addEventListener("submit", function(e){
        e.preventDefault();
        if(pst.validate()){
            procesarDatos();
        }
        else{
            frm.classList.add("was-validated");  //añade el estilo de validacion 
        }
    });
}

function procesarDatos(){
    let usuario = localStorage.getItem("usuario");  //obtenemos el item guardado en localstorage 
    if(usuario){
        fetch("script.php", {method: "POST", 
        body:new FormData(frm)
        }).then(function(response){
            return response.json();  
        }).then(function(json){
            validarLogin(json);
        }).catch(function(err){

        })
    }
}

function validarLogin(json){

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if(usuario.password == json.password){
        location.href = "home.html";
    }
    else{
        alert("Usuario y/o Contraseña incorrecta");
    }
}