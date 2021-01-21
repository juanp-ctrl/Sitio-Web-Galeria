<?php

    $salt = "MATRIX";
    $usuario = array();

    if(isset($_POST["usuario"])){   //Verifica si el campo existe
        $usuario["usuario"] = $_POST["usuario"];
        $usuario["password"] = md5($salt.$_POST["password"]);
    }
    

    echo json_encode($usuario);  //exponemos el json

?>


