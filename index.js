const process = require ("process");
const arguments = process.argv.slice(2);
let pswdLength = '';
const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let pswd = "";
let argCheck = false;

for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === '--length') {
        pswdLength = arguments[i+1];
        if (!pswdLength) {
            pswdLength= 8;
        }
        argCheck = true;
    }else if (arguments[i] === '--help') {
        console.log("HELP and Instructions")
        argCheck = true;
    }else if (arguments[i] != '--length' || arguments[i] != '--help') {
        console.log("This is not a valid command. Enter '--help' for instrunctions.")
    }
    }
    
if (argCheck === false) {
    pswdLength= 8;
}

let pswdLengthNum = parseInt(pswdLength);

for (let i=1; i<=pswdLengthNum; i++) {
    let randAlpha = alpha[Math.floor(Math.random()*26)]
    
    pswd = pswd.concat(randAlpha);
    
}

console.log(pswd);



  






