// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Asad",
    "full name": "Md.Asad Khan",
    [mySym]: "mykey1",
    age: 18,
    location: "delhi",
    email: "yousafzaigaming@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "asad@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "asad@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());