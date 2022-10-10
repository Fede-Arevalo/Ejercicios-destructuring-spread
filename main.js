// 1.  Ejercicios destructuring

// Objeto empleados

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

// Extrae la empleada Ana con todos sus datos personales:

const [empleado1, empleado2] = empleados;
console.log(empleado2);

// Extrae el email del empleado Luis

const { email } = empleado1;
console.log(email);

// Objeto pokemon

const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

// Cambia el nombre de la propiedad “name” por “nombre"

const { name: nombre } = pokemon;

// Extrae el nombre del Pokemon

console.log(nombre);

// Extra el tipo de Pokemon que es

const { type } = pokemon;
console.log(type);

// Extrae el movimiento “Tackle”

const { moves } = pokemon;
console.log(moves);

const [, move] = moves;
console.log(move);

// 2. Ejercicios spread/rest

// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:

const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};

const mergeObjsPokemons = { ...pokemon, ...pikachu };
console.log(mergeObjsPokemons);

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

// nums = [1, 5, 5, 56, 4, 4, 99];
// const sumEveryOther = nums.reduce((a, b) => a + b);
// console.log(sumEveryOther);

function sumEveryOther(...argumentos) {
  return argumentos.reduce((a, b) => a + b);
}

console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12));

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

function addOnlyNums(...argumentos) {
  let filtrados = argumentos.filter((num) => typeof num === "number");
  return filtrados.reduce((a, b) => a + b);
}

console.log(addOnlyNums(1, "perro", 2, 4));

// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs(...argumentos) {
  return argumentos.length;
}

console.log(countTheArgs("gato", "perro", 1, 56));

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays(arg1, arg2) {
  const arrayCombinado = [...arg1, ...arg2];
  return arrayCombinado;
}

console.log(combineTwoArrays([1, 2, 3, 4], [5, 6, 7, 8, 9]));

// 3. Extras

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana.

const { today } = HIGH_TEMPERATURES;
const maximaHoy = `La temperatura máxima para hoy es: ${today}°`;
console.log(maximaHoy);

const { tomorrow } = HIGH_TEMPERATURES;
const maximaManana = `La temperatura máxima para mañana es: ${tomorrow}°`;
console.log(maximaManana);


