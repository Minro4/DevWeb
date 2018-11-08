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
    $("th").click( function() {
        sortData(data,event.target.cellIndex);
        $("tr:not(tr:first-child)").remove(); //Enlève toutes les rows sauf la première
        fillTable();
      });
    $("#accueilMenu,#inscrireMenu,#carteMenu").click(function(event) {
        affichage(event.target.id);
      });


function fillTable(){     
        for (var i = 0; i < data.length; i++) {     //loop dans toutes les rows
            tr = table.append("<tr><td>"+ data[i]["order"] +"</td><td>"+ data[i]["activity"] +"</td><td>"+ data[i]["manager"] +"</td><td>"+ data[i]["numofsub"] +"</td></tr>");
        }
}

var lastCol = 0;    //se souvient de la dernière colonne qui à été mis en ordre
function sortData(a, colIndex){
    if (data.length == 0) 
        return;

    var key =  Object.keys(data[0])[colIndex];  //Permet d'avoir le nom de la propriété que l'utilisateur souhaite ordonner
    if (colIndex === lastCol){    //si on a clické 2 fois sur la même colonne, on les met en ordre descendant
      a.sort(sortFunctionDesc);
      lastCol = -1;
    }
    else{
      a.sort(sortFunctionAsc);
      lastCol = colIndex;
    }

  function sortFunctionAsc(a, b) {
      if (a[key] === b[key]) {
          return 0;
      }
      else {
          return (a[key] < b[key]) ? -1 : 1;         
      }
  }
  function sortFunctionDesc(a, b) {
    if (a[key] === b[key]) {
        return 0;
    }
    else {
        return (a[key] < b[key]) ? 1 : -1;
    }
}

  return a;
}

function affichage(affiche){
    if(affiche == "accueilMenu"){
        $("article").css({"display" : "none"});
        $("#accueil").css({"display" : "block"});
    }
    if(affiche =="inscrireMenu"){
        $("article").css({"display" : "none"});
        $("#inscription").css({"display" : "block"});
    }
    if(affiche == "carteMenu"){
        $("article").css({"display" : "none"});
        $("#carte").css({"display" : "block"});
    }
}
});