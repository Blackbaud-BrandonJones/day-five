// OBJECTS
// var washingMachine = {
//   color: "red",
//   doorDirection: "right to left"
// }
//
// var objectKey = "hairColor";
//
// console.log(washingMachine);
//
// console.log(washingMachine.color);
//
var Brandon = {
  name: "Brandon",
  height: 6.2,
  hairColor: "Brown",
  Address: {
    streetName: "Ashley river road",
    streetNumber: 2225,
    city: "Charleston"
  }
};
//
// Brandon.hairColor = "Pink";
// Brandon.job = "Software Developer";
//
// console.log(Brandon);
// console.log(Brandon[objectKey]);
// Brandon["bedTime"] = "9 pm";
// console.log(Brandon.bedTime);
//
// console.log(Brandon.Address.streetName);


//          ARRAYS

// var myArray = [1, 2, "Bob", "Joe", true];
//
// console.log(myArray);
// // print out bob.  arrays are 0 indexed, so we need to print out index 2.
// console.log(myArray[2]);
//
// myArray[2] = "Jill";
//
// console.log(myArray);
//
// myArray[myArray.length] = "Super Man";
// myArray[myArray.length] = "Super Woman";
// myArray[myArray.length] = "Super Kid";

// Brandon.favoriteFoods = ["pizza", "spaghetti", "other things with red sauce", "chinese"];
//
// console.log(Brandon);
// var keyWord = "favoriteFoods";
// console.log(Brandon[keyWord][0]);
//
//
//
// var Billy = {
//   name: "Billy",
//   hairColor: "Green",
//   favoriteFoods: ["vegetables", "oranges"]
// };
//
// Brandon.friends =[
//   Billy,
//   {
//     name: "Sally",
//     hairColor: "Blonde",
//     favoriteFoods: ["Steak"]
//   }
// ];
// console.log(Brandon.friends[0]["favoriteFoods"][0]);

// FUNCTIONS

// //anonymous function
// var anonFunction = function (a) {
//   console.log(a);
// }
// //named function
// function namedFunction(a) {
//   console.log(a);
// }
//
// anonFunction("Hello World");
// anonFunction("Goodnight World");
// anonFunction(8);
// anonFunction(Brandon);
//
// function sum(paramOne, paramTwo) {
//   return paramOne + paramTwo;
// }
//
// var mySum = sum(10010241902410,  801028410);
// console.log(mySum);
//
// var twoPlusTwo = sum(2, 2);
// console.log(twoPlusTwo);

// var addThenMultiply = function (paramOne, paramTwo, ParamThree) {
//   var returnValue;
//   var sum;
//
//   sum = paramOne + paramTwo;
//   returnValue = sum * ParamThree;
//
//   return returnValue;
// }
//
// var myTotal = addThenMultiply(5, 7, 8);
// console.log(myTotal);
//
// myTotal = addThenMultiply(100, 801, 48);
// console.log(myTotal);

// var greeting = function (name) {
//   return "Hello my name is " + name;
// }
//
// console.log(greeting("Lauren"));
// console.log(greeting("Sandy"));

//Built in functions / methods

function makeUpperCase(paramString) {
   console.log(paramString.toUpperCase());
}

makeUpperCase("hello world");

function makeLowerCase(paramString) {
  console.log(paramString.toLowerCase());
}

makeLowerCase("HELLO WORLD");

Brandon.greeting = function(name) {
  console.log("Hello " + name +" my name is " + Brandon.name);
}

console.log(Brandon);
Brandon.greeting("Sally");

// for loop / counter w/function
var myFriends = ["Billy", "Sally", "Joe"];

//i = i + 1  is the same as i++;
// i = i - 1 is the same as i--;

for(var i = 0; i < 10; i++) {
  console.log("Hi");
}

for(var i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
}
