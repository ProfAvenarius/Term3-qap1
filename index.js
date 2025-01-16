const process = require ("process");

const arguments = process.argv.slice(2);
let pswdLength = '';
const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let pswd = "";

for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === '--length') {
        console.log(arguments)
        pswdLength = arguments[i+1];
        console.log(pswdLength)

        if (pswdLength === '') {
            pswdLength = '8';
        }
    }else if (arguments[i] === '--help') {
        console.log("HELP and Instructions")
        }
    };

let pswdLengthNum = parseInt(pswdLength);
console.log(pswdLengthNum)

for (let i=1; i<=pswdLengthNum; i++) {
    let randAlpha = alpha[Math.floor(Math.random()*26)]
    
    pswd = pswd.concat(randAlpha);
    
}

console.log(pswd);



  






