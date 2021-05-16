//1
let phrase =  'Bonjour tout le monde    ';
//2
console.log(phrase.length);
//3
phrase = phrase.trimEnd();
console.log(phrase);
//4
console.log(phrase.length);

//5
console.log(phrase.charAt(phrase.length-1));

//6
phrase = phrase.replace("Bonjour ", "");
console.log(phrase);
// phrase = phrase.substr(8);
// console.log(phrase);

//7
phrase = phrase.replace("", "Bonjour ");
console.log(phrase);
// phrase = "bonjour ".concat(phrase);
// console.log(phrase)

//8
phrase = phrase.substr(0, 7);
console.log(phrase)
// phrase = phrase.slice(0,8);
// console.log(phrase);

//9
let nb = "number";
nb = nb.replace("number", "string");
console.log(nb);

//10
// Je génère un nombre à virgule random que je multiplie par 10, et ensuite, j'applique un Math.round() pour l'arrondir à l'entier le plus proche
let random = Math.round(Math.random()*10);
console.log(random);