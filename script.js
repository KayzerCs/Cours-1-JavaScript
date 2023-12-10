// JavaScript éxécute le code ligne par ligne, donc faire attention a bien tout faire dans l'ordre.
// Ecrir "log +  select log to the console" pour avoir un "console.log ("");"
// Toujours mettre un " ; " a chaque fin de ligne. Même si cela n'est pas obligatoire c'est une bonne pratique.


// Kamel Case = Mettre une Maj à chaque nouveau mot.
let MaVariable = "Hello";
console.log(MaVariable);

// *********************************** LES VARIABLES *********************************** //

// Variable = Une boite, avec des donné dedans.
// Avant on utilisait "var" pour nomé sa variable. var = vieux JavaScript.
var unText = "voici un texte";
console.log(unText);


//"const" = variables Constante, une donné qui ne bouge pas, on ne peut pas la modifier.
const prenom = "Kayzer";
console.log(prenom);


//"let" = variables qui es modifiable.
let unChiffre = 24;
// Si je met "console.log" ici, dans la console je verrais le chiffre "24".
unChiffre = 22;
console.log(unChiffre);

// Variable seul
// Ex : Une variable qui peut etre remplis par l'utilisateur avec un input
let arbre;
arbre = "sapin";

// *********************************** LES GUILLEMETS *********************************** //

// En JavaScript qu'on utilise les guillemet ("") ou ('') sa ne change rien.
let chaine = "Je suis une chaine de caractères";
// Concaténation = Termes Barbar pour dire que tu peut ajouter des variables a ta variable.
let nouvelleChaine = "Chaine précédente : " + chaine + ". Voila c'était le contenu";
// Concaténation avec guillement altgr+7.
let autreConcatenation = `Chaine précédente : ${chaine}. Voila c'était le contenu`;
console.log(nouvelleChaine);
console.log(autreConcatenation);

// *********************************** LES DONNEES *********************************** //
// Types de données.
let string = "Je suis une chaine de carractère";
let number = 24;
let boolean = true/false;

// Tableau il y a des crochets [], et je peut y mettre des "string", des "number", des "boolean".
// Entre les élément on met une (,) et pas un (;)
let array = ["je", "suis", "un", "tableau"]

// Objet il y a des accolades {}, chaque élément de l'objet à une clé et une valeur
// Ex: La clé = "prenom". La valeur = "Kayzer".
// Entre les élément on met une (,) et pas un (;)
let object = {
    prenom: "kayzer",
    age: 33,
    ville: "bordeaux",
}
