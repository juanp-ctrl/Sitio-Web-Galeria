let frm, pst;

window.onload = ()=>{
    frm = document.getElementById("form-validate");
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


    function procesarDatos(){
        let usuario = localStorage.getItem("usuario");  //obtenemos el item guardado en localstorage 
        if(usuario){
            fetch("script.php", {method: "POST", 
            body:new FormData(frm)
            }).then(function(response){
                return response.json();  
            }).then(function(json){
                validarCorreo(json);
            }).catch(function(err){

            })
        }
    }

    function validarCorreo(json){

        let usuario = JSON.parse(localStorage.getItem("usuario"));

        if(usuario.usuario == json.usuario){
            localStorage.setItem("usuario", JSON.stringify(json));
            location.href = "index.html";
        }
        else{
            alert("El correo ingresado no existe en el sistema");
        }
    }
}