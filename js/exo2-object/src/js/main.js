// ## Exo 1
// ### Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.
// let personne = {
//     nom:"bel",
//     prenom:"bil",
//     sepresenter(){
//         console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`)


// }
// }
// personne.sepresenter()

// ## Exo 2
// ### Créer un objet avec un nom et une méthode
// ### La méthode de votre objet lance un prompt permetant de changer son age
// ### Une alert renvoi "[objet] a [age de l'objet] ans"
let objet = {
    nom:"popof",
    age:"",
    lance(){
        this.age=prompt("quel est ton age")
        alert(`${this.nom} a ${this.age} ans`)
    }
}
objet.lance()
