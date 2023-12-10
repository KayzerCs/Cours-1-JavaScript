// JS éxécute le code ligne par ligne, donc faire attention a bien tout faire dans l'ordre.

// Ecrir "log +  select log to the console" pour avoir un "console.log ("");"

// Toujours mettre un " ; " a chaque fin de ligne. Même si cela n'est pas obligatoire c'est une bonne pratique.

// Kamel Case = Mettre une Maj à chaque nouveau mot.
let MaVariable = "Hello";
console.log(MaVariable);

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
