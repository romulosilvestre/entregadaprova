<?php 
    $servidor = 'localhost';
    $usuario = 'root';
    $senha = '';  //duas aspas simples
    $banco = 'cursoseguranca';
    
    if ($conexao = new mysqli($servidor,$usuario,$senha,$banco)) {
        session_start();
    }else{
        die('não foi possivel acessar o banco de dados!' . $conexao->error);
    } 
?>