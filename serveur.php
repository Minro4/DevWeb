<?php include("functions.php");

$connexion = setConnexion();

$connexion -> query("INSERT INTO member VALUES (0,'$_POST[nom]','$_POST[date]','$_POST[gendre]','$_POST[Activité]','$_POST[commentaire]')");

header('location: index.php')

?>