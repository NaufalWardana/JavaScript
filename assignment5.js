function checkIsUpperCase(character){
    if(character >= 'A' && character <= 'Z'){
        return true;
    } else {
        return false;
    }
}

function checkIsLowerCase(character){
    if(character >= 'a' && character <= 'z'){
        return true;
    } else {
        return false;
    }
}

function checkIsNumber(character){
    if(character >= '0' && character <= '9'){
        return true;
    } else {
        return false;
    }
}

function isValidPassword (password){
    let errorMessage = []
    if(password.length < 8){
        errorMessage.push("Panjang password kurang dari 8 elemen");
    }

    let hasUpperCase = false;
    for(let i = 0; i < password.length; i++){
        if(checkIsUpperCase(password[i])){
            hasUpperCase = true;
            break;
        }
    }

    if(!hasUpperCase){
        errorMessage.push("Password tidak memiliki minimal 1 huruf besar");
    }

    let hasLowerCase = false;
    for(let i = 0; i < password.length; i++){
        if(checkIsLowerCase(password[i])){
            hasLowerCase = true;
            break;
        }
    }

    if(!hasLowerCase){
        errorMessage.push("Password tidak memiliki minimal 1 huruf kecil");
    }

    let hasNumber = false;
    for(let i = 0; i < password.length; i++){
        if(checkIsNumber(password[i])){
            hasNumber = true;
            break;
        }
    }

    if(!hasNumber){
        errorMessage.push("Password tidak memiliki minimal 1 angka");
    }

    let hasSymbol = false;
    for(let i = 0; i < password.length; i++){
        if(!checkIsNumber(password[i]) && !checkIsLowerCase(password[i]) && !checkIsUpperCase(password[i])){
            hasSymbol = true;
            break;
        }
    }

    if(!hasSymbol){
        errorMessage.push("Password tidak memiliki minimal 1 simbol");
    }

    if(errorMessage.length === 0){
        return ["Password valid"];
    } else {
        return errorMessage;
    }
}

const prompt = require('prompt-sync')();
const input = prompt('Masukkan kata sandi: ');

console.log(isValidPassword(input));