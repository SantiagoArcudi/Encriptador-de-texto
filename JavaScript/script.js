const input = document.querySelector(".input");
const output = document.querySelector(".output");

function encrypt() {
    let textoEncriptado = encriptar(input.value);
    output.value = textoEncriptado;
    output.style.backgroundImage = "none";
    input.value = "";
}
function desencrypt(){
    let textoDesencriptado = desencriptar(input.value);
    output.value = textoDesencriptado;
    output.style.backgroundImage = "none";
    input.value = "";
}

function encriptarI(texto) {
    var regex = /i/g;
    texto = texto.replace(regex,"imes");
    return texto;
}
function encriptarA(texto) {
    var regex = /a/g;
    texto = texto.replace(regex,"ai");
    return texto;
}
function encriptarE(texto) {
    var regex = /e/g;
    texto = texto.replace(regex,"enter");
    return texto;
}
function encriptarO(texto) {
    var regex = /o/g;
    texto = texto.replace(regex,"ober");
    return texto;
}
function encriptarU(texto) {
    var regex = /u/g;
    texto = texto.replace(regex,"ufat");
    return texto;
}
function encriptar(texto) {
    let validar = /[^(a-z)|(\s)]/g;
    if (validar.test(texto)) {
        alert("Solo se admiten letras minusculas sin acentos ni caracteres especiales");
        return ""
    } else {
    texto = encriptarI(texto);
    texto = encriptarE(texto);
    texto = encriptarA(texto);
    texto = encriptarO(texto);
    texto = encriptarU(texto);
    return texto;
    }
}

function desencriptarA(texto) {
    var regex = /ai/g;
    texto = texto.replace(regex,"a");
    return texto;
}
function desencriptarE(texto) {
    var regex = /enter/g;
    texto = texto.replace(regex,"e");
    return texto;
}
function desencriptarI(texto) {
    var regex = /imes/g;
    texto = texto.replace(regex,"i");
    return texto;
}
function desencriptarO(texto) {
    var regex = /ober/g;
    texto = texto.replace(regex,"o");
    return texto;
}
function desencriptarU(texto) {
    var regex = /ufat/g;
    texto = texto.replace(regex,"u");
    return texto;
}
function desencriptar(texto) {
    let validar = /[^(a-z)|(\s)]/g;
    if (validar.test(texto)) {
        alert("Solo se admiten letras minusculas sin acentos ni caracteres especiales");
        return ""
    } else {
        texto = desencriptarA(texto);
        texto = desencriptarE(texto);           
        texto = desencriptarI(texto);
        texto = desencriptarO(texto);
        texto = desencriptarU(texto);
        return texto;
    }
}
function copy() {
    output.select();
    navigator.clipboard.writeText(output.value);
    output.value = "";
}