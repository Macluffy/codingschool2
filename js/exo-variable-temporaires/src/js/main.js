// - # exo 0

// - # Variables temporaires
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 1

//     - ## Afficher le changement des variables

    // let a = 1
    // let b = 2
    // let c = 3

    // let temp = a
    // a = b
    // b = c
    // c = temp

    // console.log(a,b,c);

// - # Exo 1

//     - ## Afficher 4, 3, 2, 1
//     - ## let a = 1; -> 4
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 2
//     - ## let d = 4; -> 1

//     - ## Afficher le changement des variables

    // let a = 1
    // let b = 2
    // let c = 3
    // let d = 4
    // let temp = a
    // a = d //4
    // d = temp //1
    // temp = b
    // b = c //3
    // c = temp//2

    // console.log(a,b,c,d);
    

// - #  Exo 2
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 4
//     - ## let d = 4; -> 1

//     - ## Afficher le changement des variables
    // let a = 1
    // let b = 2
    // let c = 3
    // let d = 4
    // let temp = a
    // a = b //2
    // b = c //3
    // c = d //4
    // d = temp //1

    // console.log(a,b,c,d);

// - # Exo 3
//     - ## Afficher 4, 3, 2, 1 avec une variable temporaire
//     - ## let tableau = [1, 2, 3, 4];
// let tableau = [1, 2, 3, 4]
let tab = [1, 2, 3, 4,"temp"]
    tab[4] = tab[1]
    tab[0] = tab[3]
    tab[3] = tab[4]
    tab[4] = tab[1]
    tab[1] = tab [2]
    tab[2] = tab [4]

    console.log(tab)

//     - # Exo 4
//     - ## let a = 1 -> 4
//     - ## let b = 2 -> 5
//     - ## let c = 3 -> 1
//     - ## let d = 4 -> 2
//     - ## let e = 5 -> 6
//     - ## let f = 6 -> 3

//     - ## Afficher le changement des variables

// let a = 1
// let b = 2
// let c = 3
// let d = 4
// let e = 5
// let f = 6
// let temp = a
// a = d
// d = b
// b = e
// e = f
// f = c
// c = temp
// console.log(a,b,c,d,e,f)