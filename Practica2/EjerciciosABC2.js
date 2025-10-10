/*c.
Ahora con un arreglo de personas, realiza lo siguiente:
1. Usa .find() para buscar a la persona con nombre "Luis".
2. Usa .forEach() para imprimir el nombre de cada persona con su edad.
3. Usa .reduce() para sumar todas las edades y obtener un total.*/

const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28}
];

let Luis = personas.find(persona => persona.nombre == "Luis");
console.log(Luis);

personas.forEach (function(persona){
    console.log(persona.nombre, persona.edad);
});

let sumar = personas.reduce((Suma, persona) => Suma + persona.edad, 0);
console.log(sumar);

