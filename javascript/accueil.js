var data=[{"#":1,"Activité":"Natation","Responsable":"Michel Provencher","Nombre d'inscrits":7},
			  {"#":2,"Activité":"Badminton","Responsable":"Daniel Lefevbre","Nombre d'inscrits":15},
			  {"#":3,"Activité":"Randonnée","Responsable":"Catherine Pelletier","Nombre d'inscrits":10},
			  {"#":4,"Activité":"Kayak","Responsable":"Josée Coté","Nombre d'inscrits":14},
			  {"#":5,"Activité":"Velo","Responsable":"Jean-Yves Surroy","Nombre d'inscrits":22},
        {"#":6,"Activité":"Echecs","Responsable":"Emilie Simard","Nombre d'inscrits":11}];

var table;
var col;

$(document).ready(function() {
  createFillTable();
    $("th").click(function() {
        sortData(data,event.target.x);
        fillTable();
      });
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

        // Créer la table
        table = document.createElement("table");

        // Ajoute les tables headers
        var tr = table.insertRow(-1);                   // Ajoute une row

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // Créé les table headers
            th.innerHTML =  col[i];
            th.x = i;
            tr.appendChild(th);
        }

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
    if(affiche == "accueil"){
        $("article").css({"display" : "none"});
        $("#accueil").css({"display" : "block"});
    }
    if(affiche =="inscrire"){
        $("article").css({"display" : "none"});
        $("#inscription").css({"display" : "block"});
    }
    if(affiche == "carte"){
        $("article").css({"display" : "none"});
        $("#carte").css({"display" : "block"});
    }
}

//Début carte
function initMap() {
    var uluru = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
    var marker = new google.maps.Marker({position: UQTR, map: map});
}
//Fin carte

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