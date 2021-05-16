// ## Exo 1 
// ### Créez un objet avec vos valeurs
// ### 'Nom', 'prenom', 'age', 'taille'
// ### Affichez votre age via un console.log()
let personne = {
    nom: "Ahirga",
    prenom: "Ali",
    age: "26",
    taille: "178cm",


}
console.log(personne.age);

// ## Exo 2 
// ### Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)
let personne2 = {
    nom: "Jeroen",
    prenom: "Gaspar",
    age: "22",
    taille: "183cm",
}
let personne3 = {
    nom:"",
    prenom:"",
    age:"",
    taille:"",
}
personne3.nom = personne.nom;
personne3.age = personne2.age;
personne3.taille = "175cm";
console.log(personne3);
// ## Exo 3
// ### Remplir les propriétées du 3eme personnage
// ### Son nom doit valoir le nom du personnage1
// ### Son age doit valoir celui du personnage2
// ### Et sa taille doit être rempli avec la valeur que vous souhaitez
personne3.nom = personne.nom;
personne3.age = personne2.age;
personne3.taille = "175cm";
console.log(personne3);