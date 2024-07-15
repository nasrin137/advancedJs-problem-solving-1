

// function scopeTest() {
//     if (true) {
//       var varVariable = "I am var";
//       let letVariable = "I am let";
//       const constVariable = "I am const";
//     }
//     console.log(varVariable);
//     console.log(letVariable);
//     console.log(constVariable);
//   }
  
//   scopeTest();


// the output will be I am var because var is global scope,but let is block scope and because of error in let variable next variable which is constVariable will not be executed.


// function greet(name,greeting = "Hello"){
//     return greeting + ', ' + name + '!';
// }
// const output = greet("Alice");
// console.log(output)


// function greet(name,greeting){
//     return greeting + ', ' + name + '!';
// }
// const output = greet('Bob','Good morning')
// console.log(output)



// function sum(...numbers){
//     let total = 0;
//     for(let num of numbers){
//         total = total + num;
//     }
//     return total
// }
// console.log(sum(1, 2, 3))
// console.log(sum(10, 20, 30, 40))
// console.log(sum(5))


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];
// const mergedArray = [...array1,...array2,...array3];
// console.log(mergedArray)


// const name = 'John';
// const age = 30;
// const person = {
//     name,
//     age,
//     greet(){
//         return `Hi, I'm ${person.name} and I'm ${person.age} years old`
//     }
// }
// console.log(person.greet()); 


// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits){
//     console.log(fruit)
// }


// const name = "Alice";
// const age = 25;
// const message = `My name is ${name} and I am ${age} years old. `;
// console.log(message);



// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 85 },
//     { name: "Charlie", grade: 92 }
//   ];
// for (const student of students){
//     console.log(student.name + ': ' + student.grade)
// }


// const nestedArrays = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//  for (let array of nestedArrays){
//     let sum = 0;
//     for (let num of array) {
//         sum = sum +  num;
//       }
//       console.log(sum);
    
//  }



// const a = 5;
// const b = 10;
// const result = `The sum of ${a} and ${b} is ${a + b}.`;
// console.log(result); 

