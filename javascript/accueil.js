var data=[{"#":1,"Activité":"Natation","Responsable":"Michel Provencher","Nombre d'inscrits":7},
			  {"#":2,"Activité":"Badminton","Responsable":"Daniel Lefevbre","Nombre d'inscrits":15},
			  {"#":3,"Activité":"Randonnée","Responsable":"Catherine Pelletier","Nombre d'inscrits":10},
			  {"#":4,"Activité":"Kayak","Responsable":"Josée Coté","Nombre d'inscrits":14},
			  {"#":5,"Activité":"Velo","Responsable":"Jean-Yves Surroy","Nombre d'inscrits":22},
        {"#":6,"Activité":"Echecs","Responsable":"Emilie Simard","Nombre d'inscrits":11}];

var table;


$(document).ready(function() {
  createFillTable();
    $("th").click(function() {
        sortTable(event.target.x);
      });
});

function createFillTable(){
        //ajoute les propriétés de data 
        var col = [];
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
function fillTable(){

  var rows = table.rows;
  for (var i = 0; i < table.length; i++) {
    for (var j = 0; j < table[i].length; j++) {
      rows[i].getElementsByTagName("TD")[j].innerHTML = data[i][j];     
    }
  }
}
//fin des fonctions inutiles
function sortTable(n) {
    var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }