const accountId=155443
let accountEmail = "asad@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

//accountId = 2 // not allowed

accountEmail = "ak@gm.com"
accountPassword = "223334444"
accountCity = "Vizag"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/* 
prefer not to use var
because of issue in block scope and functional scope
*/