// # Exercice 1 boucle while
// // - A l'aide d'un prompt, choisissez un chiffre et enregistrez la valeur dans une variable
// let chiffre = prompt("choisissez un chiffre")
// let nb1 = 0
// // - Déclarez une variable compteur qui commence par 0
// while (chiffre > nb1) {
//     nb1++;
//     console.log(nb1);
// }

// - A l'aide d'une boucle while, incrémentez de 1 la variable compteur à chaque boucle et affichez touts les chiffres de 0 jusqu'au nombre choisis au debut dans le prompt
// [14:57]
// - # Exo 2 Boucles WHILE
//     - ## Créez une variable classe avec un array
// let tab = [];
// let max = prompt("choisissez le nombre d'étudiant max de votre classe");
// let nomEleve;
// while (tab.length < max) {
//     nomEleve = prompt("entrer le nom de l'eleve");
//     tab.push(nomEleve);
    
// };
// console.log(tab);
// alert("nombre d'eleve suffisant")

//     - ## A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
//     - ## A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
//     - ## Après avoir rempli la classe, affichez tous les etudiants
// [14:58]
// - ##  Ex 03
//     ## Créer un tableau de 9 prénoms 
// let prenom = ["ali","agim","yassin","adil","nassila","chris","elvis","kevin","mouna"]
// let i = 0
// while(i<prenom.length){
//     console.log(`bonjour ${prenom[i]}`)
//     i++
// }

//     ## Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
//     ## Astuce : let i = 0;
//     ## Astuce 2 : (i < 9)

// - ##  Exo 04
//     ## Créer un tableau de 6 fruits
let fruit = ["bannane","fraise","cerise","orange","pomme","poire"];
//     ## Avec l'aide d'une boucle while vider le tableau.
//     ## Utilisez fruits.length-1
let zz = fruit.length-1;
while(zz>=0){
    
    fruit.pop();
    zz--;
};
console.log(fruit);

//- ##  Exo 05
//     ## Créer un tableau de 4 légumes du nom de 'panierLegumes'
let legumes = ["tomate","patate","poivron","salade"];
//     ## Stocker la longueur du tableau dans une variable du nom de 'longeur'
let longeur = legumes.length;
//     # Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'
let legume1 = [];
let pa = longeur-1;
while(pa>=0){
legume1.push(legumes.pop());
pa--;
};
console.log(legumes,legume1);

// // - ##  Exo6
// //##  Préparer une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite
// let un = prompt("quel est votre prenom ?")
// alert(bonjour ${un})
// alert("prepare toi tu doit trouver un chiffre de 0 a 10")
// let deux = parseInt(prompt("introduiser un chiffre de 0 à 10"))
// let trois = 6


// while(deux != trois){
// deux = prompt(veuiller réesseille ${un})
// }
// alert(felicitation ${un})