<?php
$obj_mysqli	=	new	mysqli("localhost",	"root",	"",	"site");
if	($obj_mysqli->connect_errno)	{
    echo	"Echec	lors	de	la	connexion	à MySQL	:	(".$obj_mysqli-> connect_errno.")	"	
    .$obj_mysqli->connect_error;
}
$request = "SELECT activity.id, 
                activity.activityname, 
                supervisor.fullname, 
                COUNT(member.id) as nbrOfSub
            FROM supervisor 
            LEFT JOIN activity ON (activity.id = supervisor. activityid)
            LEFT JOIN member ON (member.activityid = activity.id)
            GROUP BY activity.id";

//$request = "SELECT * FROM activity ";

$resultats = $obj_mysqli->query($request);


$array = array();
while ($row = $resultats->fetch_assoc()) {

    $e['order'] = $row['id'];
    $e['activity'] =  $row['activityname'];
    $e['manager'] = $row['fullname'];
    $e['numofsub'] = $row['nbrOfSub'];
    array_push($array, $e); 
}

echo json_encode($array);

?>