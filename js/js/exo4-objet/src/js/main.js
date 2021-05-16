// ## Exo  4

// ### Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne 
let vielle_dame ={
    nom:{
        nom:"fanny",
        prenom:"hunin"
    },
    age:70,
    moral:"mal",
    objet:"canne",
    parler() {
        if(this.moral=="mal"){
            alert(`vous me derenger je vais vous frapper avec ma ${this.objet}`)
        }else{
            alert(`bonjour ${viel_home.nom}`)
        }
    }
}
let viel_home={
    nom:"adil",
    moral:"bien",
    adoucir(){
        vielle_dame.moral="bien"
    }

}
vielle_dame.parler();
viel_home.adoucir();
console.log("hello");
console.log(vielle_dame.parler());


// ### une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

// ### Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

// ### Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.