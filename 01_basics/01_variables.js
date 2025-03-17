// User registration on website

// Invastigation

const accountId = "144553"
// const: can not change value
let accountEmail = "amit@gmail.com"
var accountPassword = "12345"
let accountState;

/* 
    prefer not to use var
    becasue of issue in block scope and functional scope
    {} = scope
    Use const for constanat & let for variable 
*/
accountCity = "Jaipur"

// change values of variables
accountEmail = "immy@gmail.com"
accountPassword = "212121"
accountCity = "Ahmedabad"

// {} = scope

// print all at a time
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

