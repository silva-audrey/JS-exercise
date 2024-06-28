/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// Imprimir todos los nombres en la lista
console.log("Nombres en la lista:");
console.log(people);

// Quitar "Dani" del array
people.splice(people.indexOf("Dani"), 1);

// Quitar "Juan" del array
people.splice(people.indexOf("Juan"), 1);

// Mover "Luis" al inicio del array
people.unshift("Luis");

// Agregar tu nombre al final del array
let miNombre = "Audrey";
people.push(miNombre);

// Usar un bucle para iterar por el array y después de console.log "Maria", salir del bucle
console.log("\nIterar por el array y salir después de 'Maria':");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
        break;
    }
}

// Obtener el índice donde se encuentra "Maria"
let indexOfMaria = people.indexOf("Maria");
console.log("\nÍndice de 'Maria':", indexOfMaria);

// Al final del ejercicio, debería haber 4 personas en el array
console.log("\nPersonas al final del ejercicio:");
console.log(people);
