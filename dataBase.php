<?php include("functions.php");

$obj_mysqli	= setConnexion();

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