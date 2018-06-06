

// Item 3
var firstname = 'Heather';

// Item 4
const states = 50;

// Item 5
var val = 5 + 4;

console.log(val);


// Item 6 & 7
var letterCode = firstname.charCodeAt(0); //This tells the program to evaluate the first letter in the first name

if (letterCode > 76 && letterCode < 91) {
    console.log('Back of the line!'); //This returns if the first letter is after L
} else if (letterCode > 64 && letterCode < 77) {
    console.log('Next')
} //This returns if the first letter is before L


// Item 8 & 9
// Accomplished the goal, not sure if in the correct way. Can I reuse this function?
greeting = 'Hello World!'
function sayHello(greeting) {
    alert(greeting);
}

sayHello(greeting)

// Item 10 & 11
// checkAge over 21 alert and call for the following people
function checkAge(name, age) {

    if (age < 21) {
        alert('Sorry' + ' ' + name + ' ' + "you aren't old enough to view this page!");
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

// Item 12 & 13 create array of fav veggies and use loop to display list in developer console
let favVeggie = ['squash', 'artichokes', 'brussel sprouts', 'asparagus']

for (var i = 0; i < favVeggie.length; i++) {
    console.log(favVeggie[i]);
}

// Item 14

let users = [
    {
        name: 'Heather',
        age: 47
    }, {

        name: 'Kenneth',
        age: 47
    },
    {
        name: 'Caroline',
        age: 19
    }, {
        name: 'Reid',
        age: 17
    }, {
        name: 'Davis',
        age: 12
    }
];

for (let person of users) {
    checkAge(person.name, person.age);
}


// Item 16 & 17
str = 'hello world';
var number = str.length;
console.log(getLength(str))

function getLength(str) {
    return number;
    
}
let  strLength = getLength();



// Item 16 - 18

str = 'hello world';
var number = str.length;


function getLength(str) {
    return number;

}

function isEven(strLength) {
    return strLength % 2 === 0;
}


let evenOdd = isEven();


if (evenOdd == true) {
    console.log('The world is nice and even!');
} else (evenOdd == false)
console.log('The world is an odd place!');







