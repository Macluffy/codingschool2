// EXO1
// // Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)
// let calcul = () =>{
//     return 4 + 5
// }
// console.log(calcul());

// // EXO2
// // Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)
// let calcul1 = () =>{
//     return 7-5
// }
// console.log(calcul1());
// // EXO3
// // Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)
// let calcul2 = () =>{
//     return 2*3
// }
// console.log(calcul2());
// // EXO4 
// // Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)
// let calcul3 = () =>{
//     return 8/2
// }
// console.log(calcul3());
// // EXO5
// // Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)
// let calcul4 = () =>{
//     return 15%2
// }
// console.log(calcul4());
// // EXO6
// // Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)
// let calcul5 = () =>{
//     return Math.sqrt(9)
// }
// console.log(calcul5());
// // EXO7
// // Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)
// let calcul6 = () =>{
//     return Math.pow(3,3)
// }
// console.log(calcul6());
// // EXO8
// // Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;
// let bonj = "bonjour"
// let calcul7 = () =>{
//     return bonj.charAt(0).toUpperCase()+bonj.substr(1).toLowerCase();
// }
// console.log(calcul7());

// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)

let calcul8 = (nb1, operateur, nb2) =>{
    switch(operateur){
        case"+":
            return nb1+nb2;
        case"-":
            return nb1-nb2;
        case"*":
            return nb1*nb2;
        case"/":
            return nb1/nb2;
        default:
            return"veuillez entrez un operateur valide";

    }
    
}
nb1 = parseInt(prompt("veuillez encoder un chiffre"))
operateur = prompt("veuillez encoder un operateur")
nb2 = parseInt(prompt("veuillez encoder un chiffre"))
console.log(calcul8(nb1, operateur, nb2));
// console.log(calcul8(1,+,2));
