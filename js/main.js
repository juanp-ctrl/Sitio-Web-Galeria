var numero = 0;
var numerofinal;

document.querySelector("#ArchivoCargado").addEventListener("change", function() {  //Cuando el usuario cambie el valor del input ejecutamos esta funcion
    const lector = new FileReader();

    lector.addEventListener("load", () => {
        localStorage.setItem(numero, lector.result);  //Guardamos la dataURL en el localstorage
        numero++;
        numerofinal = numero;
        loaded();
        localStorage.setItem("Numero", numerofinal);
    });

    lector.readAsDataURL(this.files[0]);   //Convertimos en dataURL la imagen cargada 
});

function loaded(){

    var recentImageDataUrl;
    
    for (var i=0; i<numerofinal; i++){

        recentImageDataUrl = localStorage.getItem(i);

    }
    console.log(recentImageDataUrl);
        
        var divisor = document.createElement("div");
        divisor.setAttribute("class", "col-sm-6 col-md-4 col-lg-3 item");

        var imagen = document.createElement("img");
        imagen.setAttribute("src", recentImageDataUrl);
        imagen.setAttribute("class", "img-fluid");

        divisor.appendChild(imagen);

        var galeria = document.getElementById("insertar");
        galeria.appendChild(divisor);

}

document.addEventListener("DOMContentLoaded", () => {    //Cuando la pagina cargue ejecutamos esta funcion 

    var numeron = localStorage.getItem("Numero");

    for (var i=0; i<numeron; i++){

        const recentImageDataUrl = localStorage.getItem(i);    //Cargamos la imagen guardada en el localstorage

        var divisor = document.createElement("div");
        divisor.setAttribute("class", "col-sm-6 col-md-4 col-lg-3 item");

        var imagen = document.createElement("img");
        imagen.setAttribute("src", recentImageDataUrl);
        imagen.setAttribute("class", "img-fluid");

        divisor.appendChild(imagen);

        var galeria = document.getElementById("insertar");
        galeria.appendChild(divisor);

    }
});