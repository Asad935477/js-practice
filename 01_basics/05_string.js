const discount = 5000
const day = "Sundays"


console.log(`get upto ${discount} rupees off on ${day}`);

const gameName = new String('Md-Asad-Khan')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('A'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Asad    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://snaPix.com/vercel%20deployed.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('com'))

console.log(gameName.split('-'));