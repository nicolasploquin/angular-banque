(function(){ "use strict";
		
//var data = { ... };
//
//var texte = JSON.stringify(data);
//var data = JSON.parse(texte);
//
//window.localStorage.data = {...};
//window.localStorage["data"] = {...};
//window.localStorage.setItem("data", {...});
//
//window.localStorage.getItem("data");
//window.localStorage.removeItem("data");
//window.localStorage.clear();

	console.log("Accès data.js");

	if(!localStorage.getItem("data")){
		console.log("Génération jeu de test clients");

	localStorage.data = JSON.stringify({"clients":[{
		"id": 1, "nom": "Troadec", "prenom": "Nolwenn", "comptes": [{
			"id":1, "numero":"12345678", "intitule":"Compte courant", "operations":[{
				"date":"2015-03-12", "libelle":"Salaire Renault", "montant":1300, "type":"Credit"
			},{
				"date":"2015-03-14", "libelle":"E.Leclerc", "montant":-72.34, "type":"Debit"
			},{
				"date":"2015-03-14", "libelle":"Placement", "montant":-300, "type":"Debit"
			},{
				"date":"2015-03-15", "libelle":"Free Mobile", "montant":-15.99, "type":"Debit"
			},{
				"date":"2015-03-16", "libelle":"CAF", "montant":112.74, "type":"Credit"
			},{
				"date":"2015-04-01", "libelle":"TAN Avril", "montant":-58, "type":"Debit"
			}]
		},{
			"id":2, "numero":"23456789", "intitule":"Livret A", "operations":[{
				"date":"2015-01-03", "libelle":"Intérêts 2014", "montant":125.68, "type":"Credit"
			},{
				"date":"2015-03-14", "libelle":"Placement", "montant":300, "type":"Credit"
			}]
		}]
	},{
		"id": 2, "nom": "Leblanc", "prenom": "Marc"
	},{
		"id": 3, "nom": "Durand", "prenom": "Marie"
	},{
		"id": 4, "nom": "Meyer", "prenom": "Nils"
	},{
		"id": 5, "nom": "Lebreton", "prenom": "Louann"
	}], "clients_id": 6});

}

})();