//Desciption: QAP1 - Password Generator
//Author: DC Elliott
//Date: Jan 16-

const process = require ("process");
const arguments = process.argv.slice(2);
let pswdLength = '';
const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const signs = ['!','@','#','$','%','&','*','?']
let pswd = "";
let argCheck = false;
let capitals = false;
let symbols = false;

for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === '--length' || !arguments[i]) {
        pswdLength = arguments[i+1];
        if (!pswdLength || isNaN(pswdLength)) {
            console.log("Enter a number after '--length' to indicate a different number of characters, use  --help for full instructions. ")
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
        console.log("|       Maximum number of characters avalable is 3,000,000. |");
        console.log("| '--help': returns instructions.                           |");
        console.log("◀︎ _________________________________________________________ ▶︎")
        argCheck = true;
    }else if(arguments[i] === '--caps') {
        capitals = true;
    }else if(arguments[i] === '--sym' ) {
        symbols = true;
    }   
    
    else  {
        console.log("This is not a valid command. Enter '--help' for instructions.")
    }
}
    
if (argCheck === false) {
    pswdLength= 8;
}

if (pswdLength >= 3000001) {
    console.log("The length specified is outside specifications, maximum value is 3,000,000.")  
}else {
    let pswdLengthNum = parseInt(pswdLength);
    for (let i=1; i<=pswdLengthNum; i++) {
        let randAlpha = alpha[Math.floor(Math.random()*26)]
        if (capitals = true) {
            let fiftyFifty = Math.random()*100
            if (fiftyFifty>50){
                randAlpha = randAlpha.toUpperCase();
            }
        }
        pswd = pswd.concat(randAlpha);
        
        
    }if (!pswd) {
        console.log("")
        }else {
        console.log(`Your ${pswdLength} character Password is: ${pswd}`)};
}



  






