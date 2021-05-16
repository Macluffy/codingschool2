// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)
// let number1 = (prompt("entrer"))
// let num = prompt("entrer un numero de minimum 2 chiffre")
// let reverse = (num) => parseInt(String(num).split("").reverse().join(""));
// console.log(reverse(num));






// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"
let nam = parseInt(prompt("entrée un numéro"))
let divPar2 = (nam) => {
    let divv = nam%2 == 0
    switch (divv){
        case true:
            alert("ce chiffre est divisible par 2")
            break;
        default: 
        alert("Ce nombre n'est pas divisible par 2")
        break;
    }
    
}
divPar2(nam);


// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"
let mdp = prompt("veuillez entrez votre mot de passes")
let mdp1 = "ali"
let login = () => {
    while(mdp != mdp1){
        mdp = prompt("veuillez réesseyé")
    }
alert("felicitation")
}
login()