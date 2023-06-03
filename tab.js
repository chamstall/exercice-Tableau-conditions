
let students = [ 
    {nom: "DIALLO" , prenom:"Abou Bakr" , Age:18 , Note: 10},
    {nom: "ABCDB" , prenom:"Omar " , Age:25 , Note: 11},
    {nom: "BA" , prenom:"al-Umarī" , Age:23 , Note: 20},
    {nom: "ABCDF" , prenom:"Othmân" , Age:21 , Note: 12},
    {nom: "ABCDG" , prenom:"Ali" , Age:26 , Note: 14},
    {nom: "ABCDH" , prenom:"Talha" , Age:20 , Note: 16},
    {nom: "ABCDI" , prenom:"Az-Zoubayr" , Age:24 , Note: 19},
    {nom: "ABCDJ" , prenom:"Abd-Ar-Rahman" , Age:19 , Note: 15},
    {nom: "ABCDK" , prenom:"Sa`îd" , Age:22 , Note: 10},
    {nom: "SY" , prenom:"Abou Obayda" , Age:27 , Note: 13},
    {meilleurnote:"al-Umarī BA"},
    {plusâgé:"Abou Obayda SY"},
    {moinsâgé:"Abou Bakr DIALLO"},
]

let TBody = document.getElementById("tableau");

for (let i = 0 ; i< 12 ; i+=1 ){
    // cette variable créée me permet d'accéder à chaque objet du tableau students
    let etudiants = students[i];
    
    // Je crée une ligne pour mon tableau
    let Row = document.createElement("tr");

    // je crée la premiere cellule de ma ligne,
    // je l'ai appelée Nomcell car il s'agit de la cellule qui renferme le nom de l'etudiant
    let NomCell = document.createElement("td");

    // le textContent me permet d'ajouter du contenu à ma cellule nom
    NomCell.textContent = etudiants.nom 

    // la methode appendChild me permet d'ajouter un element enfant (ici td ou stv NomCell) a un element parent(ici tr ou Row)
    Row.appendChild(NomCell);
    
    let prenomCell = document.createElement("td");
    prenomCell.textContent = etudiants.prenom ;
    Row.appendChild(prenomCell);

    let ageCell = document.createElement("td");
    ageCell.textContent = etudiants.Age ;
    Row.appendChild(ageCell);


    let noteCell = document.createElement("td");
    noteCell.textContent = etudiants.Note
    Row.appendChild(noteCell);

    
    TBody.appendChild(Row);
}

let TFoot = document.getElementById("bottom-table");

let etudiant3 = students[10]; //j'ai utilisé le nom etudiant3 car c'est l'etudiant trois qui a la best note
let etudiant10 = students[11];
let etudiant1 = students[12];

let Row2 = document.createElement("tr");

let  MeilleurNote = document.createElement("td");
MeilleurNote.textContent = etudiant3.meilleurnote  ;
Row2.appendChild(MeilleurNote);

let  oldest = document.createElement("td");
oldest.textContent = etudiant10.plusâgé ;
Row2.appendChild(oldest);

let  youngest = document.createElement("td");
youngest.textContent = etudiant1.moinsâgé ;
Row2.appendChild(youngest);

let  cellulevide = document.createElement("td");
Row2.appendChild(cellulevide);

TFoot.appendChild(Row2);