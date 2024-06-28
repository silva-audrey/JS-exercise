/*Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/


let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

// ========== resolviendo con filter e include SE HIZO EN CLASE
const commonCourse2 = student1Courses.filter( course1 =>  student2Courses.includes(course1) );
console.log( commonCourse2 );
}
