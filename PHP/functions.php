<?php
function setConnexion(){

    $obj_mysqli	=	new	mysqli("localhost",	"root",	"",	"site");

    if	($obj_mysqli->connect_errno) {
        echo "Echec	lors	de	la	connexion	à MySQL	:	(" . $obj_mysqli->connect_errno . ")	"
            . $obj_mysqli->connect_error;
    }

    mysqli_set_charset($obj_mysqli,"utf8");

    return  $obj_mysqli;
}
function setDico($langTrad)
{

    $dico = array();

    $connex = setConnexion();

    $resultats = $connex -> query("SELECT word_key , $langTrad FROM dictionary");

    while ($row = $resultats->fetch_assoc())
    {
        $dico[$row['word_key']] = $row[$langTrad];
    }
    return $dico;
}
?>
