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
       var xd = $("input");
       var prob = "LES CHAMPS OBLIGATOIRES CI-DESSOUS N'ONT PAS ÉTÉ REMPLIS\n";
       var problem;

       for(var i = 0; i < 3;i++)
       {
           if(xd[i].value === '')
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
       if(problem)
       {
           alert(prob);
           event.preventDefault();
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