// -  # Exo 1 Boucles FOREACH
//     ## - Creer une varaible de type array et inserez toutes les personnes de la classe
//     ## - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau
let classe = ["ali","agim","yassin","adil","mouna","haroune","seif"]
classe.forEach(elem => {
    console.log(`bonjour ${elem}`);
});

// - # Exo 2 Boucle FOREACH
//     - ## Créez un un array qui contient 5 éléments
//     - ## Affichez touts les éléments a l'aide d'une boucle foreach
// Quand vous avez fini, faites l'exo qui reste dans le fichier que j'ai donné vendredi avec un forEach
let fruit = ["fraise","bannane","kiwi","orange","poire"]
fruit.forEach(elem=> {
    console.log(elem);
})
// - ## Exo 3
//     ##  Voici un tableau : 
let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
let typeNumber = []
let typeString = []
let typeObject = []
let typeAutre = []
donnees.forEach(elem=>{
console.log(typeof elem)
if(typeof elem == "number"){
    typeNumber.push(elem)
}else if (typeof elem == "string"){
    typeString.push(elem)
}else if (typeof elem == "object"){
    typeObject.push(elem);
}else{
    typeAutre.push(elem);
}
})
donnees.splice(0,donnees.length)
console.log(donnees);
console.log(typeNumber);
console.log(typeString);
console.log(typeObject);
console.log(typeAutre);
//     ## Triez le contenu du tableau donnees en verifiant le type de chaque donnée
//     ## Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
//     ## Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvée sur internet dans les bons tableaux.