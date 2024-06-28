/*Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/

function calcularSumaProducto(numbers) {
    // Calcular la suma de los números en el array
    let suma = numbers.reduce((acc, num) => acc + num, 0);
    
    // Calcular el producto de los números en el array
    let producto = numbers.reduce((acc, num) => acc * num, 1);
    
    // Imprimir resultados
    console.log(`La suma es ${suma}.`);
    console.log(`El producto es ${producto}.`);
}

// Array de números de ejemplo
let array = [1, 2, 3, 4];

// Llamar a la función de la suma y producto
calcularSumaProducto(array);

