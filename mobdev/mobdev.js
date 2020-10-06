// Dit is het Javascript document voor Mobile Development
// Tot nu toe nog in 1 document maar doel is om modulair te werken

// W1
// Variables
/*
console.log('Welkom op het Javascript document voor MobDev');

var eerstevariable =  "test";
var eerstevariable = "geen test"
console.log(eerstevariable);

let zanger = "beroep";
zanger = "is een beroep";
//let zanger = "hobby"; Zal een fout geven, bestaat al
console.log(zanger);

const obama = "Michelle";
//obama = "trump" zal ook een fout geven
console.log(obama);


// Obj Destructuring


const me = {
    firstName: "maxime",
    lastName:  "Vandenberge",
    job: "student"
}
/*
console.log(me.firstName);

const { firstName,lastName,job } = me;
console.log(firstName + ' '+lastName + ' is een '+ job);

console.log(`${firstName} ${lastName} is een ${job}`);
*/
/*
var { firstName, ...rest } = me; //spread operator
console.log(rest);

// array destructuring

const gameStats = [330, 110, 220, 550];
const [first, second, third, fourth] = gameStats;

console.log(first);
console.log(second);
console.log(third);


function calc(x=0, y=0){
    return x + y;
}
console.log(calc(0,0))



function calc2(x, ...y){
    return x * y.length;
}
console.log(calc2(2,3, 1, 2, 5))



function calc3(x, y, z){
    return x + y + z;
}
console.log(calc3(...[1,2,3]));


function calc4( {x, y, z} ){
    return x + y + z;
}
console.log(calc4({
x: 1,
y: 2,
z: 5
}));


// oefeningen 

// Destructuring #1
/*
const obj =  { one : 1, two : 2 }
var { one : anotherOne, two } = obj

console.log(anotherOne);


// Destructuring #2

const obj =  { two : 2 }
var { one=1, two } = obj
console.log(one) // outputs undefined



//Destructuring #3

const obj =  { first: "James", last: "Baker", alias: "JB"  }
var { first = "John", last = "Doe", alias: nickname = "maxime"} = obj
console.log(nickname) // outputs nickname is not defined

*/
// Destructuring #4

let names = []

let gebruikers = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]

for({email} of gebruikers) {
      names.push(email)
;
      
}
// {name} door de {} spreek je direct name aan in het oject

console.log(names) // should log ["John", "Jason", "Jeremy", "Jacob"]


// #Destructuring #5

let users = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
  ]
  
  const [,,{email: thirdUser},] = users;
  //let thirdUser = users.filter((e, i) => i === 2 )[0].name
  console.log(thirdUser)  // "Jeremy"


