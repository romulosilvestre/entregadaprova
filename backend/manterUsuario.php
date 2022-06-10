
<?php

if ($acao == 'Incluir Usuario') {
	// fazer insert na tabela livro	
	$sql = "INSERT INTO livros (ISBN,titulo,editora,autor,publicacao,quantidade) 
	VALUES ('$chave','$titulo','$editora','$autor','$publicacao','$quantidade')";
	//echo $sql;
	  if(mysqli_query($conexao, $sql)){
	  	echo "<div class='alert alert-success' role='alert'> Livro incluido com sucesso! </div>";
	  	}else{
	 		echo "<div class='alert alert-danger' role='alert'> O livro não pode ser incluido. <br> </div>";
	 		
	  	}
	}

?>