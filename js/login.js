let pst, frm;
window.onload = function(){    //onload garantiza que todos los elementos se hayan cargado para ejecutar el codigo de javascript

    frm = document.getElementById("form-validate");  //Obtenemos el formulario por su id
    pst = new Pristine(frm);  //Instanciamos la clase pristine pasandole el formulario a validar

    frm.addEventListener("submit", function (e) {   //Este formulario cuando se haga un submit ejecutara este codigo
        e.preventDefault();  //Evita que se envie por defecto para validar
        if(pst.validate()){
            procesarDatos();
        }
        else{
            frm.classList.add("was-validated");
        }
        //console.log("test"); testeamos que funcione en consola
        //var valid = pst.validate();  el metodo retorna true o false
    });
    frm.addEventListener("reset", function (e) {
        frm.classList.remove("was-validated");
    });

    function procesarDatos(){
        fetch("script.php", {method: "POST",  //fetch hace una peticion al servidor, con formdata usamos los campos del formulario
        body:new FormData(frm)
        }).then(function(response){
            return response.json();  //retornamos el json obtenido
        }).then(function(json){
            guardarLocalmente(json);  //pasamos el json generado por el script 
        }).catch(function(err){

        })
    }
    
    function guardarLocalmente(json){
        localStorage.setItem("usuario", JSON.stringify(json));
        location.href = "index.html";
    }
}