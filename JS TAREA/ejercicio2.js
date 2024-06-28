//EJERCICIO 2
// Write a function that: 1)Takes in an array of numbers.
// 2) Doubles the value of each number in the array.
// 3) Prints out the new updated array.
 //Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

 function doubleArray(numbers) {
    // Inicializar un array vacío para almacenar los valores duplicados
    let doubledNumbers = [];
    
    // Iterar a través de cada número en el array de entrada
    for (let i = 0; i < numbers.length; i++) {
        // Duplicar el número actual y añadirlo al array doubledNumbers
        doubledNumbers.push(numbers[i] * 2);
    }
    
    // Imprimir 
    console.log(doubledNumbers);
}

// Ejemplo
let array = [1, 2, 4, 5];
doubleArray(array); // Resultado [2, 4, 8, 10]

}