function hurufbesar(hurufkapital){
    if(hurufkapital >= 'A' && hurufkapital <= 'Z'){
        return true;
    } else {
        return false;
    }
}

function hurufkecil(hurufkecil){
    if(hurufkecil >= 'a' && hurufkecil <= 'z'){
        return true;
    } else {
        return false;
    }
}

function nomor(angka){
    if(angka >= '0' && angka <= '9'){
        return true;
    } else {
        return false;
    }
}

function passwordbenar(password){
    let pesanError = []
    if(password.length < 8){
        pesanError.push ('Panjang password kurang dari 8 karakter');
    }

    let hurufbesarcase = false;
    for(let i = 0; i < password.length; i++){
        if(hurufbesar(password[i])){
            hurufbesarcase = true;
            break;
        }
    }

    if(!hurufbesarcase){
        pesanError.push ('Password tidak memiliki setidaknya 1 huruf besar');
    }

    let hurufkecilcase = false;
    for(let i = 0; i < password.length; i++){
        if(hurufkecil(password[i])){
            hurufkecilcase = true;
            break;
        }
    }

    if(!hurufkecilcase){
        pesanError.push ('Password tidak memiliki setidaknya 1 huruf kecil')
    }

    let nomorcase = false;
    for(let i = 0; i < password.length; i++){
        if(nomor(password[i])){
            nomorcase = true;
            break;
        }
    }

    if(!nomorcase){
        pesanError.push ('Password tidak memiliki setidaknya 1 angka')
    }

    let symbol = false;
    for(let i = 0; i < password.length; i++){
        if(!nomor(password[i]) && !hurufkecil(password[i]) && !hurufbesar(password[i])){
            symbol = true;
            break;
        }
    }

    if(!symbol){
        pesanError.push ('Password tidak memiliki setidaknya 1 symbol')
    }

    if(pesanError.length === 0){
        return ['Password Berhasil'];
    } else {
        return pesanError;
    }
}

const prompt = require('prompt-sync')();
const input = prompt('Masukan Password : ');

console.log(passwordbenar(input));

