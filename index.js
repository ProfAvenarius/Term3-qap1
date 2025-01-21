//Desciption: QAP1 - Password Generator
//Author: DC Elliott
//Date: Jan 16-


const process = require ("process");
const arguments = process.argv.slice(2);
let pswdLength = '';
const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let pswd = "";
let argCheck = false;

for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === '--length' || !arguments[i]) {
        pswdLength = arguments[i+1];
        if (!pswdLength || isNaN(pswdLength)) {
            pswdLength= 8;
        }
        argCheck = true;
        break;
    }else if (arguments[i] === '--help') {
        console.log("◀︎ _________________________________________________________ ▶︎")
        console.log("| WELCOME TO PASSWORD GENERATOR CLI MEGA SUPREME            |");
        console.log("| Instructions:                                             |");
        console.log("| 1.Open your favorite terminal, or what you have available.|");
        console.log("| 2.Open the relevant directory.                            |");
        console.log("| 3.Enter: node index.js --xxxxx --xxxxx --xxxxx            |");
        console.log("|      'node index.js' without any flag commands will return|");
        console.log("|       default 8 character, lower case letters only.       |");
        console.log("| 4.Flags:                                                  |");
        console.log("| (Basic functions.)                                        |");
        console.log("| '--length xxx': returns a password of a number characters |");
        console.log("|       as specified by a trailing number, for a password   |");
        console.log("|       of 10 characters we would enter '--length 10'. If   |");
        console.log("|       no number is entered length defaults to 8.          |");
        console.log("| '--help': returns instructions.                           |");
        console.log("◀︎ _________________________________________________________ ▶︎")




        argCheck = true;
    }else  {
        console.log("This is not a valid command. Enter '--help' for instructions.")
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



  






