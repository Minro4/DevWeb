<?php
$obj_mysqli	=	new	mysqli("localhost",	"user",	"password",	"database");
if	($obj_mysqli->connect_errno)	{
    echo	"Echec	lors	de	la	connexion	à MySQL	:	(".$obj_mysqli-> connect_errno.")	"	
    .$obj_mysqli->connect_error;
}
$request = "SELECT activity.id, 
                activity.activityname, 
                supervisor.fullname, 
                COUNT(member.id) 
            FROM supervisor 
            LEFT JOIN activity ON (activity.id = supervisor. activityid)
            LEFT JOIN member ON (member.activityid = activity.id)
            GROUP BY member.id";
$resultats =	$obj_mysqli->query($request);

echo JSON.stringify($resultats);
?>