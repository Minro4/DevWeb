var data=[{"order":1,"activity":"Natation","manager":"Michel Provencher","numofsub":7},
{"order":2,"activity":"Badminton","manager":"Daniel Lefevbre","numofsub":15},
{"order":3,"activity":"Randonnée","manager":"Catherine Pelletier","numofsub":10},
{"order":4,"activity":"Kayak","manager":"Josée Coté","numofsub":14},
{"order":5,"activity":"Velo","manager":"Jean-Yves Surroy","numofsub":22},
{"order":6,"activity":"Echecs","manager":"Emilie Simard","numofsub":11}];
var table;

$(document).ready(function() {
    table = $("table");
    fillTable();

    $("th").click( function() { //Quand tu click sur une des colonnes de la table
        sortData(data,event.target.cellIndex);
        $("tr:not(tr:first-child)").remove(); //Enlève toutes les rows sauf la première
        fillTable();
      });

    $("#accueilMenu,#inscrireMenu,#carteMenu").click(function(event) {  //Quand tu click sur un boutton du menu
        affichage(event.target.id);
      });

    $("li").click(function(){   //Quand tu click sur un des éléments du menu ajoute la classe selected et l'enlève aux autres éléments du menu
        $("li").removeClass("selected");
        $(this).addClass("selected");
    });

    //Fait la vérification du form
    $("form").submit(function(event)
   {
       //Tableau des inputs du form
       var tabInput = $("input");
       //String qui avertit l'utilisateur des erreurs commises
       var prob = "LES CHAMPS OBLIGATOIRES CI-DESSOUS N'ONT PAS ÉTÉ REMPLIS\n";
       //Boolean verifiant s'il y a un probleme
       var problem;

       //Boucle qui verifie les champs obligatoire (dans ce contexte les indices de 0 à 3 de tabInput)
       // et qui rajoute les champs fautifs à la chaîne de caractères.
       for(var i = 0; i < 3;i++)
       {
           if(tabInput[i].value === '')
           {
               problem = true;
               if(i==0)
                   prob += "Le nom\n";
               else if(i == 1)
                   prob+= "Le prenom\n";
               else
                   prob+= "La date"
           }
        }
       if(problem) //Vérification de la variable problem (true si l'utilisateur à commis une erreur de saisie)
       {
           alert(prob); //Alerte de la page à l'utilisateur avec les erreurs commises (définies en majeur partie dans la boucle *for* ci-haute)
           event.preventDefault(); //Prévention de l'envoie du form
       }
       else
           alert("Le formualaire a bien été remplis...")
   });

    //Fonction qui remplit la table en fonction de la variable data
    function fillTable(){
            for (var i = 0; i < data.length; i++) {     //loop dans toutes les rows
                tr = table.append("<tr><td>"+ data[i]["order"] +"</td><td>"+ data[i]["activity"] +"</td><td>"+ data[i]["manager"] +"</td><td>"+ data[i]["numofsub"] +"</td></tr>");
            }
    }

    //Fonction qui s'occupe de tri le tableau data en fonction de la colonne
    var lastCol = 0;    //se souvient de la dernière colonne qui à été mis en ordre
    function sortData(a, colIndex){
        if (data.length == 0)
            return;

        var key =  Object.keys(data[0])[colIndex];  //Permet d'avoir le nom de la propriété que l'utilisateur souhaite trier
        if (colIndex === lastCol){    //si on a clické 2 fois sur la même colonne, on les met en ordre descendant
          a.sort(sortFunctionDesc);
          lastCol = -1;
        }
        else{
          a.sort(sortFunctionAsc);
          lastCol = colIndex;
        }

      function sortFunctionAsc(a, b) {  //trie ascendant
          if (a[key] === b[key]) {
              return 0;
          }
          else {
              return (a[key] < b[key]) ? -1 : 1;
          }
      }
      function sortFunctionDesc(a, b) { //trie descendant
        if (a[key] === b[key]) {
            return 0;
        }
        else {
            return (a[key] < b[key]) ? 1 : -1;
        }
    }

      return a;
    }

    //Fonction qui permet de changer quel fenêtre est affiché dans le contenu
    function affichage(affiche){
        if(affiche == "accueilMenu" && $("#accueil").is(":hidden")){    //affiche l'accueil sauf si il est déjà affiché
            $("article:visible").slideUp(function(){    //slideUp l'article qui est affiché et slidedown accueil lorsque que l'article affiché a terminé son slideUp
                $("#accueil").slideDown();
            });

        }
        if(affiche =="inscrireMenu" && $("#inscription").is(":hidden")){
            $("article:visible").slideUp(function(){
                $("#inscription").slideDown();
            });

        }
        if(affiche == "carteMenu" && $("#carte").is(":hidden")){
            $("article:visible").slideUp(function(){
                $("#carte").slideDown();
            });

        }
    }
});
 //Script qui s'occupe d'initialiser la carte
 function initMap() {
    var uluru = {lat: 46.347154, lng: -72.576881};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: uluru});
    var marker = new google.maps.Marker({position: UQTR, map: map});
}