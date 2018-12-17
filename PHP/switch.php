<?php
session_start();
if($_SESSION['lang'] == "fr"){

    $_SESSION['lang'] = "en";
}
else
{
    $_SESSION['lang'] = "fr";
}

header("Location:index.php");
?>