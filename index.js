"use strict";
// Q2. Personal Message: 
Object.defineProperty(exports, "__esModule", { value: true });
let personName1 = "Eric";
console.log(`Hello ${personName1}, would you like to learn some Python today?`);
// -------------------------------------------
// Q3. Name Cases: 
let personName2 = "MuhaMMad zaEEm ALtAf";
console.log("Original: ", personName2);
// lowercase
console.log("lowercase: ", personName2.toLowerCase());
// uppercase
console.log("uppercase: ", personName2.toUpperCase());
// titlecase
let newName = personName2
    .trim()
    .split(" ")
    .map((char) => char[0].toUpperCase() + char.substr(1).toLowerCase())
    .join(" ");
console.log("titlecase: ", newName);
// -------------------------------------------
// Q4. Famous Quote: 
let author = "Donald Ervin Knuth";
let quote = "Programming is the art of telling another human being what one wants the computer to do.";
console.log(`${author} once said, "${quote}"`);
// -------------------------------------------
// Q5. Famous Quote 2: 
let author1 = "Donald Ervin Knuth";
let quote1 = "Programming is the art of telling another human being what one wants the computer to do.";
let message = `${author1} once said, "${quote1}"`;
console.log(message);
// -------------------------------------------
// Q6. Stripping Names: 
let personName = "\t\n Albert Einstein  \t\n";
console.log(`with whitespace: ${personName}`);
let strippedName = personName.trim();
console.log(`Stripped Name: ${strippedName}`);
// -------------------------------------------
// Q7. Number Eight: 
console.log(`Addition : ${5 + 3}`);
console.log(`Subtraction : ${10 - 2}`);
console.log(`Multiplication : ${4 * 2}`);
console.log(`Division : ${16 / 2}`);
// -------------------------------------------
// 8.You should create four lines that look like this:
// console.log(5 + 3)
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// -------------------------------------------
// Q9. Favorite Number: 
let favoriteNumber = 3;
let message1 = `My Favorite Number is ${favoriteNumber}.`;
console.log(message1);
// -------------------------------------------
// Q10. Adding Comments: 
// Program 1 written by Muhammad Zaeem Altaf on 2024-03-06
// This program calculates the sum of a given number.
let num1 = 4;
let num2 = 6;
let result = num1 + num2;
let message2 = `The sum of two numbers is ${result}`;
console.log(message2);
// Program 2 written by Muhammad Zaeem Altaf on 2024-03-06
// This program calculates the sum of a given number.
let myName = "Muhammad Zaeem Altaf";
console.log(`Hello, ${myName}! Welcome to the programming World.`);
// -------------------------------------------
// Q11. Names: 
let names = ["John", "Bob", "Alice"];
for (const name in names) {
    console.log(names[name]);
}
// -------------------------------------------
// Q12. Greetings: 
let names1 = ["John", "Bob", "Alice"];
for (const name in names1) {
    console.log(`Hey ${names1[name]}, How's it going?`);
}
// -------------------------------------------
// Q13. Your Own Array: 
let transportation = [
    "Honda motorcycle",
    "kawasaki ninja h2r",
    "Audi",
    "Supra",
];
for (const key in transportation) {
    console.log(`I would like to own a ${transportation[key]}`);
}
// -------------------------------------------
// Q14. Guest List: 
let guestList = ["Muhammad Ali Jinnah", "Leonardo da Vinci", "Allama Iqbal"];
for (const guest in guestList) {
    console.log(`Hi Dear ${guestList[guest]}, \n \t I'd love for you to join me for dinner at my place.I hope you can make it!\n`);
}
// -------------------------------------------
// Q15. Changing Guest List: 
let guestList1 = ["Muhammad Ali Jinnah", "Leonardo da Vinci", "Allama Iqbal"];
for (const guest in guestList1) {
    console.log(`Hi Dear ${guestList1[guest]}, \n \t I'd love for you to join me for dinner at my place.I hope you can make it!\n`);
}
let randomIndex = Math.floor(Math.random() * guestList1.length);
console.log(`${guestList1[randomIndex]} can't make it to the dinner.\n \t`);
let newGuest = "Liaquat Ali Khan";
guestList1[randomIndex] = newGuest;
for (const guest in guestList1) {
    console.log(`Hi Dear ${guestList1[guest]}, \n \t I'd love for you to join me for dinner at my place.I hope you can make it!\n`);
}
// -------------------------------------------
// Q16. More Guests: 
let guestList2 = [
    "Muhammad Ali Jinnah",
    "Leonardo da Vinci",
    "Allama Iqbal",
];
for (const guest in guestList2) {
    console.log(`Hi Dear ${guestList2[guest]}, \n \t I'd love for you to join me for dinner at my place.I hope you can make it!\n`);
}
let randomIndex1 = Math.floor(Math.random() * guestList2.length);
console.log(`${guestList2[randomIndex1]} can't make it to the dinner.\n \t`);
let newGuest1 = "Alexendar";
guestList2[randomIndex1] = newGuest1;
for (const guest in guestList2) {
    console.log(`Hi Dear ${guestList2[guest]}, \n \t I'd love for you to join me for dinner at my place.I hope you can make it!\n`);
}
console.log("I found a bigger dinner table so I'd like to invite more guests!\n");
// Add New Guest
guestList2.unshift("Liaquat ALi Khan");
let middleIndex = Math.floor(guestList2.length / 2);
guestList2.splice(middleIndex, 0, "Muhammad ALi Johar");
guestList2.push("Albert Einstien");
for (const guest in guestList2) {
    console.log(`Hi Dear ${guestList2[guest]}, \n \t I'd love for you to join me for dinner at my place.I hope you can make it!\n`);
}
// -------------------------------------------
// Q17. Shrinking Guest List: 
let guestList3 = [
    "Muhammad Ali Jinnah",
    "Leonardo da Vinci",
    "Allama Iqbal",
];
for (const guest in guestList3) {
    console.log(`Hi Dear ${guestList3[guest]}, \n \t I'd love for you to join me for dinner at my place.I hope you can make it!\n`);
}
let randomIndex2 = Math.floor(Math.random() * guestList3.length);
console.log(`${guestList3[randomIndex2]} can't make it to the dinner.\n \t`);
let newGuest2 = "Alexendar";
guestList3[randomIndex2] = newGuest2;
for (const guest in guestList3) {
    console.log(`Hi Dear ${guestList3[guest]}, \n \t I'd love for you to join me for dinner at my place.I hope you can make it!\n`);
}
console.log("I found a bigger dinner table so I'd like to invite more guests!\n");
// Add New Guest
guestList3.unshift("Liaquat ALi Khan");
let middleIndex1 = Math.floor(guestList3.length / 2);
guestList3.splice(middleIndex1, 0, "Muhammad ALi Johar");
guestList3.push("Albert Einstien");
for (const guest in guestList3) {
    console.log(`Hi Dear ${guestList3[guest]}, \n \t I'd love for you to join me for dinner at my place.I hope you can make it!\n`);
}
console.log("\n Attention: Due to unforeseen circumstances, I can only invite two people for dinner.");
// Removeing Guest
while (guestList3.length > 2) {
    let removeGuest = guestList3.pop();
    console.log(`\nSorry, ${removeGuest}, I can't be able to invite you to dinner.`);
}
for (const guest in guestList3) {
    console.log(`\nHi Dear ${guestList3[guest]}, \n \t You are still invite to join me for dinner at my place.I hope you can make it!\n`);
}
// -------------------------------------------
// Q18. Seeing the World: 
let places = ["Paris", "Norway", "Tokyo", "Shibuya", "Finland"];
console.log("Original Order\n", places);
console.log("-".repeat(50) + "\n");
console.log("\nAlphabetical Order without modifying the actual list\n", [...places].sort());
console.log("-".repeat(50) + "\n");
console.log("Original Order (unchanged)\n", places);
console.log("-".repeat(50) + "\n");
console.log("\nReverse Alphabetical Order\n", [...places].sort().reverse());
console.log("-".repeat(50) + "\n");
console.log("Original Order (still unchanged)\n", places);
console.log("-".repeat(50) + "\n");
console.log("\nReserse Order\n", places.reverse());
console.log("-".repeat(50) + "\n");
console.log("\nBack TO Original Order\n", places.reverse());
console.log("-".repeat(50) + "\n");
console.log("\nAlphabetical Order (Sorted list)\n", places.sort());
console.log("-".repeat(50) + "\n");
console.log("\nReverse Alphabetical Order\n", places.sort().reverse());
console.log("-".repeat(50) + "\n");
// -------------------------------------------
// Q19. Dinner Guests: 
let guestList4 = ["Muhammad Ali Jinnah", "Leonardo da Vinci", "Allama Iqbal"];
for (const guest in guestList4) {
    console.log(`Hi Dear ${guestList4[guest]}, \n \t I'd love for you to join me for dinner at my place.I hope you can make it!\n`);
}
// -------------------------------------------
// Q20. Think of something you could store in a array. For example, you could make a list of mountains, rivers,
// countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let mountains = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
console.log("List Of Mountains: \n");
for (const mountain of mountains) {
    console.log(mountain);
}
let obj = [
    {
        country: "Pakistan",
        code: 92,
        cities: ["Karachi", "Lahore", "Islamabad"],
    },
    {
        country: "United States",
        code: 1,
        cities: ["New York", "Los Angeles", "Chicago"],
    },
    {
        country: "Japan",
        code: +81,
        cities: ["Tokyo", "Shibuya", "Kyoto"],
    },
];
for (const data of obj) {
    console.log(`\nCountry: ${data.country}`);
    console.log(`Country Code: +${data.code}`);
    console.log(`Cities: `);
    data.cities.forEach((city) => {
        console.log(`- ${city}`);
    });
    console.log("-".repeat(20));
}
// -------------------------------------------
// Q22. Intentional Error: 
let myNames = ["Zaeem", "Bilal", "Hamza"];
console.log(myNames[3]);
if (myNames.length >= 4) {
    console.log(myNames[3]);
}
else {
    console.log(`Index 3 is out of bounds`);
}
// -------------------------------------------
// Q23. Conditional Tests: 
let car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");
console.log("Is car == 'honda'? I predict False.");
console.log(car == "honda");
console.log("Is car != 'subaru'? I predict False.");
console.log(car != "subaru");
console.log("Is car != 'Sabaru'? I predict True.");
console.log(car != "Sabaru");
console.log("Is car === 'honda'? I predict False.");
console.log(car === "honda");
console.log("Is car === 'subaru'? I predict True.");
console.log(car === "subaru");
console.log("Is car !== 'Civic'? I predict True.");
console.log(car !== "Civic");
console.log("Is car !== 'Civic'? I predict True.");
console.log(car !== "Civic");
console.log("Is car < 'volvo'? I predict True.");
console.log(car < 'volvo');
console.log("Is car > 'toyota'? I predict False.");
console.log(car > 'toyota');
// -------------------------------------------
//Q24. More Conditional Tests: 
let number1 = 10;
let number2 = 20;
let array = [1, 2, 3, 4, 5];
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
// console.log("apple" == "Apple"); // False
console.log("-".repeat(20));
console.log("Testing with lower case:");
console.log("APPLE".toLowerCase() == "apple"); // True
console.log("-".repeat(20));
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
console.log("-".repeat(20));
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
console.log("-".repeat(20));
var fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
console.log("-".repeat(20));
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
// -------------------------------------------
// Q25. Alien Colors #1: 
let aleinColor = "green";
if (aleinColor == "green") {
    console.log("player just earned 5 points.");
}
aleinColor = "red";
if (aleinColor == "green") {
    console.log("player just earned 5 points."); // The version that fails will have no output
}
// -------------------------------------------
// Q26. Alien Colors #2: 
let aleinColor1 = "green";
if (aleinColor1 == "green") {
    console.log("player just earned 5 points.");
}
else {
    console.log("player just earned 10 points.");
}
// Program for run else block
if (aleinColor1 == "red") {
    console.log("player just earned 5 points.");
}
else {
    console.log("player just earned 10 points.");
}
// -------------------------------------------
// Q27. Alien Colors #3: 
let aleinColor2 = "green";
if (aleinColor2 == "green") {
    console.log("player just earned 5 points.");
}
else if (aleinColor2 == "yellow") {
    console.log("player just earned 10 points.");
}
else if (aleinColor2 == "red") {
    console.log("player just earned 15 points.");
}
// -------------------------------------------
// Q28. Stages of Life: 
let age = 17;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// -------------------------------------------
// Q29. Favorite Fruit: 
let favoriteFruits = ["Mango", "Banana", "Strawberry"];
if (favoriteFruits.includes("Mango")) {
    console.log("You really like Mangoes!");
}
if (favoriteFruits.includes("Banana")) {
    console.log("You really like Bananas!");
}
if (favoriteFruits.includes("Strawberry")) {
    console.log("You really like Strawberries!");
}
if (favoriteFruits.includes("Apple")) {
    console.log("You really like Apples!");
}
if (favoriteFruits.includes("Orange")) {
    console.log("You really like Oranges!");
}
// -------------------------------------------
// Q30. Hello Admin: 
let userNames = ["Admin", "User", "John", "Bob", "Eric"];
for (const name of userNames) {
    if (name == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
}
// -------------------------------------------
// Q31. No Users:
let userNames1 = [];
if (userNames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (const name of userNames1) {
        if (name == "Admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${name}, thank you for logging in again.`);
        }
    }
}
// -------------------------------------------
// Q32. Checking Usernames:
const currentUsers = ["john", "alice", "bob", "SARAH", "mike"];
const newUsers = ["Mike", "sam", "emma", "Sarah", "John"];
let currentUsersLower = currentUsers.map((user) => user.toLowerCase());
for (const users of newUsers) {
    if (currentUsersLower.includes(users.toLowerCase())) {
        console.log(`The ${users} will need to enter a new username.`);
    }
    else {
        console.log(`${users} is available.`);
    }
}
// -------------------------------------------
// Q33. Ordinal Numbers:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    let ordinal;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}
// -------------------------------------------
// Q34. Pizzas:
const pizzas = ["Pepperoni", "Tikka", "Fagita"];
for (const pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("\nI really love pizza!");
// -------------------------------------------
// Q35. Animals:
const animals = ["Dog", "Cat", "Rabbit"];
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("\nAny of these animals would make a great pet!");
// -------------------------------------------
// Q36. T-Shirt:
function make_shirt(size, message) {
    console.log(`The size of the shirt is ${size} and the message printed on it is "${message}".`);
}
make_shirt("M", "Error 404");
// -------------------------------------------
//Q37.Large Shirts:
function make_shirt1(size = "L", message = "I love TypeScript.") {
    console.log(`The size of the shirt is ${size} and the message printed on it is "${message}".`);
}
make_shirt1();
make_shirt1("M");
make_shirt1("S", "Error 404");
// -------------------------------------------
// Q38. Cities:
function describe_city(city = "Karachi", country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city();
describe_city("Lahore");
describe_city("Tokyo", "Japan");
// -------------------------------------------
// Q39. City Names:
function city_country(city, country) {
    return `${city}, ${country}.`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
// -------------------------------------------
// Q40. Album:
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2"));
console.log(make_album("Artist 3", "Album 3", 4));
// -------------------------------------------
// Q41. Magicians:
let magicianNames = ["Samri", "Hamoon", "Nastoor"];
const show_magicians = (magicians) => {
    for (const magician of magicians) {
        console.log(magician);
    }
};
show_magicians(magicianNames);
// -------------------------------------------
// Q42. Great Magicians:
let magicianNames1 = ["Zatanna", "Doctor Strange", "Voldemort"];
const show_magicians1 = (magicians) => {
    for (const magician of magicians) {
        console.log(magician);
    }
};
const make_great = (magicians) => {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
};
make_great(magicianNames1);
show_magicians1(magicianNames1);
// -------------------------------------------
// Q43. Unchanged Magicians:
let magicianNames2 = ["Zatanna", "Doctor Strange", "Voldemort"];
const show_magicians2 = (magicians) => {
    for (const magician of magicians) {
        console.log(magician);
    }
};
const make_great1 = (magicians) => {
    let modifiedMagicians = [...magicians];
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = `The Great ${modifiedMagicians[i]}`;
    }
    return modifiedMagicians;
};
let modifiedMagicians = make_great1(magicianNames2);
console.log("Original magicians:");
show_magicians2(magicianNames2);
console.log("\nModified magicians:");
show_magicians2(modifiedMagicians);
// -------------------------------------------
// Q44. Sandwiches:
const makeSandwich = (...items) => {
    console.log("Sandwich order summary:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("");
};
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Bacon", "Avocado");
makeSandwich("Peanut Butter", "Jelly");
const makeCar = (manufacturer, model, ...features) => {
    const car = {
        manufacturer,
        model,
    };
    features.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
};
const carInfo = makeCar("Toyota", "Civic", ["color", "black"], ["year", 2022], ["sunroof", true]);
const carInfo1 = makeCar("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]);
console.log(carInfo);
console.log(carInfo1);
// -------------------------------------------
