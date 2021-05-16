// // # Exo 1 Switch

// // ## Stockez dans une variable, via un prompt, un jour de la semaine.
// let jour = prompt("quel jour de la semaine somme nous ?")
// // ## À l'aide d'un switch, affichez ce que vous avez planifié de faire ce jour-ci. 
// switch (jour) {
//     case "lundi":
//         alert("nous somme lundi et jai prevue de jouer comme un geek");
//         break;
//     case "mardi":
//         alert("nous somme mardi et jai prevue de jouer comme un geek1");
//         break;
//     case "mercredi":
//         alert("nous somme mercredi et jai prevue de jouer comme un geek2");
//         break;
//     case "jeudi":
//         alert("nous somme jeudi et jai prevue de jouer comme un geek3");
//         break;
//     case "vendredi":
//         alert("nous somme vendredi et jai prevue de rien faire");
//         break;
//     default:
//     alert("nous somme le week end je fais ce que je veux");
//     break;
// }

// # Exo 2 Switch
//     - ## Déclarer une variable qui prendra comme valeur un prompt qui retourne un type de météo (pluie, soleil, neige, nuages, orages)
// let meteo = prompt("quel type de meteo fera t-il")
// //     - ## À l'aide d'un switch, affichez une réaction appropriée au temps
// switch (meteo) {
//     case "pluie":
//         alert("aujourd'hui il y'aura de la pluie,prevoi un parapluie");
//         break;
//     case "enssoleillée":
//         alert("aujourd'hui il fera enssoleillée,rien a prevoir");
//         break;
//     case "sec":
//         alert("aujourd'hui le temp sera plutot sec,rien a prevoir aussi");
//         break;
//     case "nuageux":
//         alert("aujourd'hui il fera nuageux, peut etre prevoir un parapluie");
//         break;
//     default:
//     alert("veuillez entré un type de météo");
//     break;
//  }
//  # Exo 3 Switch
//     - ### Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;
let nbr1 = Math.floor(Math.random()*1000000);
let op = prompt("quel est ton operateur");
let nbr2 = Math.floor(Math.random()*1000000);
switch (op) {
    case "+":
        alert(`${nbr1} + ${nbr2}`);
        break;
    case "-":
        alert(`${nbr1} - ${nbr2}`);
        break;
    case "/":
        alert(`${nbr1} / ${nbr2}`);
        break;
    case "*":
        alert(`${nbr1} * ${nbr2}`);
        break;
}





//     - ###  Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.

//         - ### Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4