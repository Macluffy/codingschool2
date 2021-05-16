// // # Exo 1 Boucles FOR
// //     ## - Creer une varaible de type array et inserez toutes les personnes de la classe
// let classe = ["ali","yassin","agim","adil","kevin","elvis"];
// //     ## - A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau
// for (i in classe){
// console.log(`bonjour ${classe[i]}`)
// }
// // - # Exo 2 Boucles FOR (let)
// //     ## - Dans un prompt inserés un nombre 
// let nombre = parseInt(prompt("inseré un nombre"))
// //     ## - A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi.
// for(let i = 0; i < nombre; i++){
//     console.log(i)
// }


// # Exercice 3 boucle FOR
// - Avec une boucle for affichez le nombre de tours de la boucle entre 0 et 20 
// for(let i = 1; i<=20 ; i++){
//     if(i%2 == 0)
//     {
//         console.log(i + " est pair");
//     }
//     else
//     {
//         console.log(i + " est impair");
//     }
    
// }
// - Affichez les chiffres et dites si c'est un nombre paire ou impaire


// - ## Exo 4
//     ## Déclarer une variable qui se nomme 'multiplicateur' valant 5
// let multiplicateur = 5
// //     ## Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc. (ex: 5x1 = ... 5x2 = ... 5x3 = ... jusqu'à 9)
// for(let i=1;i<=9;i++){
//     console.log(`5x${i}=${multiplicateur * i}`);
// }
// - ## Exo 5
//     ## Faire une boucle décendante pour les nombres pairs de 20 à 0
//         ## Ex: 20-18-16, ect.
// for(i=20;i>=0;i--){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// - ## Exo 6
//     ## Créer un tableau avec les prénoms des gens de la classe
//     ## Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'
// let classe = ["ali","agim","agim","yassin","nasila"]
// let classe2 = []
// for(i in classe){
//     if(classe[i].length>5){
//         classe2.push(classe[i])
//     }
    
// }
// console.log(classe2);

// - ## Exo 7
//     ##  Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61]
//         let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
//     ## créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes
let pro = []
for(i in sommes){
    if(sommes[i]>60){
        pro.push(sommes[i])
    }
}
console.log(pro);















// - ## Exo 8
//     ##  Voici un tableau : 
//     let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

//     ## Triez le contenu du tableau donnees en verifiant le type de chaque donnée
//     ## Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
//     ## Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvée sur internet dans les bons tableaux.