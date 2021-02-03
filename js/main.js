var numero = 0;


document.querySelector("#ArchivoCargado").addEventListener("change", function() {  //Cuando el usuario cambie el valor del input ejecutamos esta funcion
    const lector = new FileReader();

    lector.addEventListener("load", () => {

        if(localStorage.getItem("Numero") == null){

            localStorage.setItem(numero, lector.result);  //Guardamos la dataURL en el localstorage
            numero++;
            localStorage.setItem("Numero", numero);

        }
        else if(localStorage.getItem("Numero") != null){

            numero = localStorage.getItem("Numero");
            localStorage.setItem(numero, lector.result);
            numero ++;
            localStorage.setItem("Numero", numero);
        }
        
        loaded();

    });

    lector.readAsDataURL(this.files[0]);   //Convertimos en dataURL la imagen cargada 
});

function loaded(){

    var recentImageDataUrl;
    var i;
    
    for (i=0; i<numero; i++){

        recentImageDataUrl = localStorage.getItem(i);

    }
        
        var divisor = document.createElement("div");
        divisor.setAttribute("class", "col-sm-6 col-md-4 col-lg-3 item");

        var imagen = document.createElement("img");
        imagen.setAttribute("src", recentImageDataUrl);
        imagen.setAttribute("class", "imagen");

        divisor.appendChild(imagen);

        var divisi = document.createElement("div");
        divisi.setAttribute("class", "centrado")
        divisi.setAttribute("id", "centrado"+i);

        divisor.appendChild(divisi);

        var boton = document.createElement("input");
        boton.setAttribute("type", "button");
        boton.setAttribute("id", i);
        boton.setAttribute("class", "btn btn-primary eli"+i.toString());
        boton.setAttribute("value", "Eliminar");
        boton.setAttribute("style", "margin-top: 5px; background-color: #f44336ad; border-color: #ffffff00;");
        boton.setAttribute("onclick", "eliminar(" + boton.getAttribute("id") + ")");

        divisor.appendChild(boton);

        var galeria = document.getElementById("insertar");
        galeria.appendChild(divisor);

        document.getElementById("centrado"+i).innerHTML='Imagen '+(i);

};

document.addEventListener("DOMContentLoaded", () => {    //Cuando la pagina cargue ejecutamos esta funcion 

    var numeron = localStorage.getItem("Numero");

    for (var i=0; i<numeron; i++){

        const recentImageDataUrl = localStorage.getItem(i);    //Cargamos la imagen guardada en el localstorage

        var divisor = document.createElement("div");
        divisor.setAttribute("class", "col-sm-6 col-md-4 col-lg-3 item");

        var imagen = document.createElement("img");
        imagen.setAttribute("src", recentImageDataUrl);
        imagen.setAttribute("class", "imagen");

        divisor.appendChild(imagen);

        var divisi = document.createElement("div");
        divisi.setAttribute("class", "centrado")
        divisi.setAttribute("id", "centrado"+i);

        divisor.appendChild(divisi);

        var boton = document.createElement("input");
        boton.setAttribute("type", "button");
        boton.setAttribute("id", i);
        boton.setAttribute("class", "btn btn-primary eli"+i.toString());
        boton.setAttribute("value", "Eliminar");
        boton.setAttribute("style", "margin-top: 5px; background-color: #f44336ad; border-color: #ffffff00;");
        boton.setAttribute("onclick", "eliminar(" + boton.getAttribute("id") + ")");

        divisor.appendChild(boton);

        var galeria = document.getElementById("insertar");
        galeria.appendChild(divisor);

        document.getElementById("centrado"+i).innerHTML='Imagen '+(i+1);

    }
});

function eliminar(num){
    var n = localStorage.getItem("Numero");

    if((num+1) == n){
        n--;
        localStorage.setItem("Numero", n);
        localStorage.removeItem(num);
        location.reload();
    }
    else if((num+1) != n){
        n--;
        localStorage.setItem("Numero", n);
        var i = num;
        for(i; i<n; i++){
            localStorage.setItem(i, localStorage.getItem(i+1));
        }
        localStorage.removeItem(n);
        location.reload();

    }
};