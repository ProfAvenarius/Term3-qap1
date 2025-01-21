//Desciption: QAP1 - Password Generator
//Author: DC Elliott
//Date: Jan 16-

const process = require ("process");
const arguments = process.argv.slice(2);
let pswdLength = '';
const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const signs = ['!','@','#','$','%','&','*','?']
const digits = ['1','2','3','4','5','6','7','8','9','0']
let pswd = "";
let argCheck = false;
let capitals = false;
let symbols = false;
let numbers = false;

for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === '--length' || !arguments[i]) {
        pswdLength = arguments[i+1];
        if (!pswdLength || isNaN(pswdLength)) {
            console.log("Enter a number after '--length' to indicate a different number of characters, use  --help for full instructions. ")
            pswdLength= 8;
            i--; // Very proud of this, solves the issue of 'no number/not a number' case affecting other flags.
        }
        argCheck = true;
        i++;
        
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
        console.log("| (Advanced functions.)                                     |");
        console.log("| '--caps': Adds capital letters to password, there is a    |");
        console.log("|       50% chance of each character becoming uppercase.    |");   
        console.log("| '--sym': Adds symbols to password, there is a 20% chance  |");
        console.log("|       of any character being a symbol '!,@,#,$,%,&,*,?'.  |"); 
        console.log("| '--num': Adds numbers to password, there is a 20% chance  |");
        console.log("|       of any character being of '1,2,3,4,5,6,7,8,9,0'.    |"); 
        console.log("| Example: node index.js --length 20 --caps --sym --num     |");
        console.log("|       returns:    |");
        console.log("◀︎ _________________________________________________________ ▶︎")
        argCheck = true;
    }else if(arguments[i] === '--caps') {
        capitals = true;
        
    }else if(arguments[i] === '--sym') {
        symbols = true;
    }else if(arguments[i] === '--num') {    
        numbers = true;
    }   
    else {
        console.log(`"${arguments[i]}" is not a valid command. Enter '--help' for instructions.`)
    }
};

if (argCheck === false) {
    pswdLength= 8;
};

if (pswdLength >= 3000001) {
    console.log("Entry for length is too large, maximum number of characteros is 3000000")  
}else {
    let pswdLengthNum = parseInt(pswdLength);
    for (let i=1; i<=pswdLengthNum; i++) {
        let randAlpha = "";
        let quarterChance = Math.random()*100
        if (symbols === true && quarterChance <20) {
            randAlpha = signs[Math.floor(Math.random()*8)]; 
        }else if (numbers === true && quarterChance>80) {
            randAlpha = digits[Math.floor(Math.random()*10)];
        }else {
            randAlpha = alpha[Math.floor(Math.random()*26)];
            if (capitals == true) {
                let fiftyFifty = Math.random()*100
                if (fiftyFifty>50){
                    randAlpha = randAlpha.toUpperCase();
                }
            }}
        pswd = pswd.concat(randAlpha);
        
        
    }if (!pswd) {
        console.log("")
        }else {
        console.log(`Your ${pswdLength} character Password is: ${pswd}`)};
}



  






