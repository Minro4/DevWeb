<?php
$obj_mysqli	=	new	mysqli("localhost",	"root",	"",	"site");
if	($obj_mysqli->connect_errno)	{
    echo	"Echec	lors	de	la	connexion	à MySQL	:	(".$obj_mysqli-> connect_errno.")	"	
    .$obj_mysqli->connect_error;
}
mysqli_set_charset($obj_mysqli,"utf8");


$request = "SELECT activity.id, 
                activity.activityname, 
                supervisor.fullname, 
                COUNT(member.id) as nbrOfSub
            FROM supervisor 
            LEFT JOIN activity ON (activity.id = supervisor. activityid)
            LEFT JOIN member ON (member.activityid = activity.id)           
            WHERE activity.activityname LIKE '".$_POST['search']."%'
            GROUP BY activity.id";

$resultats = $obj_mysqli->query($request);

$array = array();
while ($row = $resultats->fetch_assoc()) {
    array_push($array, array(
        'order' => $row['id'],
        'activity' =>  $row['activityname'],
        'manager' => $row['fullname'],
        'numofsub' => $row['nbrOfSub']    
    )); 
}

echo json_encode($array);

?>