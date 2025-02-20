// basic js concept
// ? variable (stores data)

// let name = "ola";

// .let - declares a variable
//  name - the variable name
//     = - assign a Value
// ola - the is the value stored inside a variable

// 2 - Data types(different kinds of value)

// - string : text inside a quotes("Hello").
// ? - numbers : numbers without a qoute (25, 3 4 15)
// ? - boolean : true or false

// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(4)); //true
// console.log(isEven(7)); //false

// 3 - Functions(Reusable blocks of codes)

// function greet() {
//   alert("welcome to frontend development!");
// }
// greet();

// 4- event listners(makes things interactive)
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});

// 5- DOM (DOCUMENT OBJECT MODEL)
// IT ALLOWS JS TO INTERACT AND MANIPULATE HTML AND CSS DYNAMICALLY.ALLOWS
// CHANGE THE TEXT OF AN HTML ELEMENT
// MODIFY STYLE DYNAMICALLY
//  ADD OR REMOVE ELEMENTS FROM THE WEB PAGE

// document.getElementById("myButton").innerText = "clicked!";
// document.getElementById("myButton").style.color = "blue";
