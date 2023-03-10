/*
var var_var = 1;
let var_let = 1;
const var_const = 1;

console.log(var_var,var_let,var_const)

try{
    var_var = 5;
    var_let = 5;
    var_const = 5;

}catch(erreur){
    console.error("Erreur : "+erreur.message);
}

console.log(var_var,var_let,var_const)



//Question 02:

let objet = {
    prop1: 1,
    prop2: 2,
    prop3: 4
};

//console.log(objet);

function f1(objet){
    let newObjet= Object.create(objet);
    for (let key in newObjet) {
        newObjet[key]+= ' est ' + (objet[key]%2==0 ? 'pair' : 'impair')
    }
    console.log(newObjet);  

}
f1(objet)

*/

//Question 03:
let f2 = ( x , nombre)=> x % nombre == 0

//console.log("Test de la fonction f2: "+ f2(10,5));

let tab=[]
let size = 20
for (let i = 0; i < size; i++) {
   tab.push( Math.floor(Math.random()*100));
}
console.log(tab);

let mult = x => x/2

let tabMultiple = tab.map(mult);
let tabSatisfontCondition = tab.filter(n => f2(n,3));

console.log(tabMultiple);
console.log(tabSatisfontCondition);



