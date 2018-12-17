<?php include("functions.php");

$connexion = setConnexion();

$connexion -> query("INSERT INTO member VALUES (0,'$_POST[nom]','$_POST[date]','$_POST[gender]','$_POST[Activite]','$_POST[commentaire]')");

header('location: index.php')

?>