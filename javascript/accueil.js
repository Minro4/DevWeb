var data=[{"order":1,"activity":"Natation","manager":"Michel Provencher","numofsub":7},
{"order":2,"activity":"Badminton","manager":"Daniel Lefevbre","numofsub":15},
{"order":3,"activity":"Randonnée","manager":"Catherine Pelletier","numofsub":10},
{"order":4,"activity":"Kayak","manager":"Josée Coté","numofsub":14},
{"order":5,"activity":"Velo","manager":"Jean-Yves Surroy","numofsub":22},
{"order":6,"activity":"Echecs","manager":"Emilie Simard","numofsub":11}];
var table;
var col;

$(document).ready(function() {
  createFillTable();
    $("th").on('click', function() {
        sortData(data,event.target.x);
        fillTable();
      });
    $("#accueilMenu,#inscrireMenu,#carteMenu").click(function(event) {
        affichage(event.target.id);
      });


function createFillTable(){
        //ajoute les propriétés de data 
        col = [];
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        table = $("table");
        // Ajoute l'information de data
        for (var i = 0; i < data.length; i++) {     //loop dans toutes les rows

            tr = table.insertRow(-1);
            
            for (var j = 0; j < col.length; j++) {  //loop dans touts les colonnes
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data[i][col[j]];
            }
        }

        // Ajoute la table au document HTML
        var divContainer = document.getElementById("table");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
}

function fillTable(){
  // Ajoute l'information de data
  for (var i = 0; i < data.length; i++) {     //loop dans toutes les rows
     for (var j = 0; j < col.length; j++) {  //loop dans touts les colonnes
         table.rows[i+1].getElementsByTagName("TD")[j].innerHTML = data[i][col[j]];
     }
 }
}

var lastCol = 0;    //se souvient de la dernière colonne qui à été mis en ordre
function sortData(a, colIndex){
  if (colIndex === lastCol){    //si on a clické 2 fois sur la même colonne, on les met en ordre descendant
      a.sort(sortFunctionDesc);
      lastCol = -1;
    }
    else{
      a.sort(sortFunctionAsc);
      lastCol = colIndex;
    }
 
  function sortFunctionAsc(a, b) {
      if (a[col[colIndex]] === b[col[colIndex]]) {
          return 0;
      }
      else {
          return (a[col[colIndex]] < b[col[colIndex]]) ? -1 : 1;         
      }
  }
  function sortFunctionDesc(a, b) {
    if (a[col[colIndex]] === b[col[colIndex]]) {
        return 0;
    }
    else {
        return (a[col[colIndex]] < b[col[colIndex]]) ? 1 : -1;
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

//Début des fonctions inutiles
function removeTable(){
  $("table").remove();
}
function unfillTable(){
  var tableData = $("TD");
  for (var i = 0; i < tableData.length; i++) {
    tableData[i].innerHTML = "";
  }
}
//fin des fonctions inutiles
});