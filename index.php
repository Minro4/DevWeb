<!DOCTYPE html>
<html lang="fr">

<?php include("functions.php");
session_start();
if(!isset($_SESSION['lang']))
{
    $_SESSION['lang'] = "fr";
}
    $dicto = setDico($_SESSION['lang']);
?>

<head>
    <meta charset="UTF-8">
    <title> "Devoir"</title>
    <link rel="stylesheet" href="CSS/Devoir.css" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type ="text/javascript" src=" http://code.jquery.com/jquery.min.js">  </script>
    <script src = "javascript/javascript.js">	</script>
    <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvRPJsEiFbZCDmOHDDTTjQuXeRB1mUEQQ&callback=initMap">
    </script>
</head>

<body>
<Header>
    <!-------L'entête------->
    <h1><?php echo $dicto['Entête'] ?></h1>
    <form id = "langue" action="switch.php">
        <input type="submit" value=<?php

        if($_SESSION['lang'] == "fr"){

            echo "Anglais";
        }
        else{
            echo "French";
        }

        ?>>
    </form>
</Header>
<nav class="listMenu">   <!-------Menu de navigation------->
    <ul>
        <li id = "accueilMenu"><?php echo $dicto['MenuAccueil'] ?>
            <ul>
                <li>item 1 section 1</li>
                <li>item 2 section 1</li>
            </ul>
        </li>
        <li id = "inscrireMenu"><?php echo $dicto['MenuInscrire'] ?>
            <ul>
                <li>item 1 section 2</li>
                <li>item 2 section 2</li>
            </ul>
        </li>
        <li id = "carteMenu"><?php echo $dicto['MenuLocal'] ?>
            <ul>
                <li>item 1 section 3</li>
                <li>item 2 section 3</li>
            </ul>
        </li>
    </ul>
</nav>

<!------- Contenu ------->
<!------- Accueil ------->
<article id = "accueil">
    <!--Description du but et de comment s'inscrire-->
    <section>
        <h1><?php echo $dicto['TitreBut'] ?></h1>
        <p>
            Notre site propose aux étudiants désireux de réaliser une ou plusieurs activités de loisir
            de rejoindre les différentes activités proposées dans la liste suivante en trois étapes:
        </p>
        <ul>
            <li>S'inscrire</li>
            <li>Choisir une ou plusieurs activitées</li>
            <li>Commencer les activités en groupe</li>
        </ul>
        <p>
            Les différentes activités de groupe sont sous la responsabilité de professionnels.
            Il s'agit de passionnés du domaine qui vous feront découvrir des pans inédits de vos loisirs préférés.
            Qu'attendez-vous...? Rejoignez-nous!
        </p>
    </section>

    <!--Tableau des activités, des responsables et du nombre de personnes inscrites.-->
    <section>
        <h1><?php echo $dicto['TitreListeActi'] ?></h1>
        <form id = 'searchForm'>
                    <input type="text" placeholder="Recherche.." name = 'searchText' >
                    <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        <table>
            <tr>
                <!--ligne 1 (titres des colonnes)-->
                <th>#</th>
                <th><?php echo $dicto['tActivite'] ?></th>
                <th><?php echo $dicto['tResponsable'] ?></th>
                <th><?php echo $dicto['tNbrInscrits'] ?></th>
            </tr>
            <?php
            //Connection
            $obj_mysqli	= setConnexion();

            $request = "SELECT activity.id, 
                                activity.activityname, 
                                supervisor.fullname, 
                                COUNT(member.id) as nbrOfSub
                            FROM supervisor 
                            LEFT JOIN activity ON (activity.id = supervisor. activityid)
                            LEFT JOIN member ON (member.activityid = activity.id)
                            GROUP BY activity.id";

            $resultats = $obj_mysqli->query($request);

            $array = array(); //table qui va contenir chaque ligne du résultat
            while ($row = $resultats->fetch_assoc()) {
                //Creer le tableau
                echo "<tr><td>$row[id]</td> 
                    <td>$row[activityname]</td>
                    <td>$row[fullname]</td>
                    <td>$row[nbrOfSub]</td>
                    </tr>";

                //Ajoute chaque ligne du résultat dans la table
                $array[]= array(
                    'order' => $row['id'],
                    'activity' =>  $row['activityname'],
                    'manager' => $row['fullname'],
                    'numofsub' => $row['nbrOfSub']
                );

            }
            //Enregistre le tableau dans une variable js pour pemettre le trie.
            echo"<script type='text/javascript'> setData('".json_encode($array)."'); </script>";
            ?>

        </table>
    </section>
</article>
<!------- Fin Accueil ------->
<!--Début carte-->
<article id = "carte">
    <h1><?php echo $dicto['TitreOuTrouver'] ?></h1>
    <figure id = "map"></figure>
</article>
<!--fin carte-->
<!--Inscription-->
<article id = "inscription">
    <form action="serveur.php" method="POST">
        <h1><?php echo $dicto['TitreInscrire'] ?></h1>
        <div>
            <label><?php echo $dicto['fNom'] ?></label>
            <input type="text" name="nom" size="20"/>
        </div>
        <div>
            <label><?php echo$dicto['fpnom'] ?></label>
            <input type="text" name="prenom" size="20"/>
        </div>
        <div>
            <label><?php echo $dicto['fDate'] ?></label>
            <input type="date" name ="date" size="20"/>
        </div>
        <div>
            <label><?php echo $dicto['fSexe'] ?></label>
            <input type="radio" name = "gender" value = 0 checked/>
            <label><?php echo $dicto['fM'] ?></label>
            <input type="radio" name = "gender" value = 1 />
            <label><?php echo $dicto['fF'] ?></label>
        </div>
        <div>
            <label for = "sel"><?php echo $dicto['fActivite'] ?></label>
            <select name ="Activité" id="sel">
                <script type='text/javascript' src = 'javascript/javascript.js'> setOption() </script>
            </select>
        </div>
        <div>
            <label for = "motiv">Motivation </label>
            <textarea value = "comments" name="commentaire" id="motiv" rows ="4" cols = "50" placeholder="Facultatif"></textarea>
        </div>
        <input type ="submit" value = <?php echo $dicto['fSoumettre'] ?>>
        <input type ="reset" value = <?php echo $dicto['fReinitialiser'] ?>>
    </form>
</article>



</body>

