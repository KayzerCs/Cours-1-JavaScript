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
let nouvelleChaine =
  "Chaine précédente : " + chaine + ". Voila c'était le contenu";
// Concaténation avec guillement altgr+7.
let autreConcatenation = `Chaine précédente : ${chaine}. Voila c'était le contenu`;
console.log(nouvelleChaine);
console.log(autreConcatenation);

// *********************************** LES DONNEES *********************************** //
// Types de données.
let string = "Je suis une chaine de carractère";
let number = 24;
let boolean = true / false;

// Tableau il y a des crochets [], et je peut y mettre des "string", des "number", des "boolean".
// Entre les élément on met une (,) et pas un (;)
let array = ["je", "suis", "un", "tableau"];

// Objet il y a des accolades {}, chaque élément de l'objet à une clé et une valeur
// Ex: La clé = "prenom". La valeur = "Kayzer".
// Entre les élément on met une (,) et pas un (;)
let object = {
  prenom: "kayzer",
  age: 33,
  ville: "bordeaux",
};

// *********************************** LES OPERATEURS *********************************** //
// Aditionné
console.log(4 + 5);
// Soustraire
console.log(4 - 5);
// Divisé
console.log(4 / 5);
// Multiplié
console.log(4 * 5);
// Puissance
console.log(4 ** 5);

// Les Opérateurs d'affectations
let total = 0;
// Possible de faire "total = total + 1;" mais c'est déconseiller.
total++;
total += 5;
total -= 4;
total *= 3;
total /= 2;

console.log(total);

// *********************************** LES STRUCTURES DE CONTROLE *********************************** //
let x = 8;
let y = 2;

// "if" le mot clé a dire pour faire une comparaison.
// On peut le faire comme sa "if (x > y) alert ("Yes x plus gros que y");" mais la plus pard du temps il est fait avec des {}.

// if (x > y) {
//   alert("Yes x plus gros que y");
// } else if (y > x) {
//   alert("Y plus grand !");
// } else {
//   alert("Il sont égaux");
// }

// On test si la variable es "true".
if (x) {
  console.log("X, éxiste");
}

// === teste l'égalité en Type et Valeur.
// let x = 2;
// let y = 2;
if (x === y) {
  // console.log("ils son égaux");
} else {
  // console.log("pas égaux");
}

// == teste l'égalité Valeur, sans prendre en compte le Type.
// let x = "8";
// let y = 2;
if (x == y) {
  // console.log("ils son égaux");
} else {
  // console.log("pas égaux");
}

//  ( || ) = ou
//  ( && ) = et
// Soit l'un soit l'autres.
if (x < y || x > 1) {
  // console.log("UI");
}
// && il faut que toutes les conditions soit réunis.
if (x < y && x > 1) {
  // console.log("UI");
}

// *********************************** LES FONCTIONS *********************************** //

// Fonction classique (à l'ancienne).
function faireQuelqueChose() {
  console.log("je fais un truc");
  console.log(5 + 5);
  alert("Calcule terminé");
}
// Il faut impérativement nomé la fonction pour qu'elle se joue.
faireQuelqueChose();

// Fonction flêchée.

const addition = (a, b) => {
  console.log(a + b);
};

addition(10, 10);
addition(100, 100);
addition(963852741, 123456789);
