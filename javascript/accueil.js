var data=[{"#":1,"Activité":"Natation","Responsable":"Michel Provencher","Nombre d'inscrits":7},
			  {"#":2,"Activité":"Badminton","Responsable":"Daniel Lefevbre","Nombre d'inscrits":15},
			  {"#":3,"Activité":"Randonnée","Responsable":"Catherine Pelletier","Nombre d'inscrits":10},
			  {"#":4,"Activité":"Kayak","Responsable":"Josée Coté","Nombre d'inscrits":14},
			  {"#":5,"Activité":"Velo","Responsable":"Jean-Yves Surroy","Nombre d'inscrits":22},
			  {"#":6,"Activité":"Echecs","Responsable":"Emilie Simard","Nombre d'inscrits":11}];


$(document).ready(function() {
    fillTable();
});

function fillTable(){
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
        var table = document.createElement("table");

        // Ajoute les tables headers

        var tr = table.insertRow(-1);                   // Ajoute une row

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // Créé les table headers
            th.innerHTML = col[i];
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