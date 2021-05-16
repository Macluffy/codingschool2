// // - # Les conditions - introduction
// //     1. ### Via un console.log() vérifie l'egalité entre 1 et "1"
// console.log(1=="1")

// //     2. ### Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"
// console.log(1==="1");
// //     3. ### Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "
// let prenom = prompt("quel est ton prenom")
// if(prenom.length < 5 ){alert("ton prenom est trop court")}
// //     4. ### Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.
// let calcul = prompt("combien font 4+5=")
// if(calcul == 9){alert("felicitation")}
// else(alert("reponse incorrect"))
// //     5. ### Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"
let calcul1 = prompt("combien font 5*5=")

if(calcul1 == 25){alert("felicitation")}
else(alert(`mauvaise reponse vous etiez a ${Math.abs(calcul1-25)} unité de la bonne reponse` ))

//     6. ### Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau
// let tab = []
// let element = prompt("ajouté un élément")
// tab.push(element);
// let element1 = prompt("ajouté un élément")
// tab.push(element1);
// let element2 = prompt("ajouté un élément")
// tab.push(element2);
// console.log(element)
// alert(tab)

//     7. ### Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs
let bac1 = []
let bac2 = []
let chiffre1 = prompt("ajouté un élément")
let chiffre2 = prompt("ajouté un élément")
if(chiffre1>= 12){bac1.push(chiffre1)}
else if(chiffre1 <= 12){bac2.push(chiffre1,)}
if(chiffre2>= 12){bac1.push(chiffre2)}
else if(chiffre2 <= 12){bac2.push(chiffre2,)}
alert(bac2+" "+bac1)

//     8. ### Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions
