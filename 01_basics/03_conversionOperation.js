/*
let score = "200points"
console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof(valueInNumber))
console.log(valueInNumber) // the output NaN stands for "Not a Number"

let serverRank = null
console.log(typeof(serverRank))
console.log(typeof serverRank)

let rankInNumber = Number(serverRank)

console.log(typeof(rankInNumber))
console.log(rankInNumber)

let operatorSkill = undefined
console.log(typeof operatorSkill)
console.log(typeof(operatorSkill))

let skillInNumber = Number(operatorSkill)

console.log(typeof(skillInNumber))
console.log(skillInNumber)

let pro = true
console.log(typeof pro)
console.log(typeof(pro))

let proInNumber = Number(pro)

console.log(typeof(proInNumber))
console.log(proInNumber)
*/


//---Number Conversions---

//"100" => 100
//"100points" => NaN (type still Number)
// true = 1 ; false => 0



//---------------------------------

/*
let loggedIn = 1
let boolLog = Boolean(loggedIn)

console.log(typeof boolLog)

let loggedOut = 0
let boolOut = Boolean(loggedOut)

console.log(typeof boolOut)
console.table ([boolOut, boolLog])
*/


//---Boolean Conversions---

// 0 => false
// 1 => true
// '' => false 
// 'asad' => true



//-----------------------------------

//************ Operations ***********
/*
let value = 3
let negValue = -value

console.log(negValue);


console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log(1+2+"2");
console.log("1"+"2"+2);
*/
let scoreBoard = 99;


//---precidence operators---


// postfix operator
scoreBoard++;
console.log("postfix score ",scoreBoard);

// prefix operator
++scoreBoard;
console.log("prefix score ",scoreBoard);
