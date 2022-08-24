const input = document.querySelector(".input");
const output = document.querySelector(".output");

function encrypt() {
    let textoEncriptado = encriptar(input.value);
    output.value = textoEncriptado;
    output.style.backgroundImage = "none";
    input.value = "";
}
function encriptarA(texto) {
    var regex = /a/g;
    texto = texto.replace(regex,"01100001 ");
    return texto;
}
function encriptarB(texto) {
    var regex = /b/g;
    texto = texto.replace(regex,"01100010 ");
    return texto;
}
function encriptarC(texto) {
    var regex = /c/g;
    texto = texto.replace(regex,"01100011 ");
    return texto;
}
function encriptarD(texto) {
    var regex = /d/g;
    texto = texto.replace(regex,"01100100 ");
    return texto;
}
function encriptarE(texto) {
    var regex = /e/g;
    texto = texto.replace(regex,"01100101 ");
    return texto;
}
function encriptarF(texto) {
    var regex = /f/g;
    texto = texto.replace(regex,"01100110 ");
    return texto;
}
function encriptarG(texto) {
    var regex = /g/g;
    texto = texto.replace(regex,"01100111 ");
    return texto;
}
function encriptarH(texto) {
    var regex = /h/g;
    texto = texto.replace(regex,"01101000 ");
    return texto;
}
function encriptarI(texto) {
    var regex = /i/g;
    texto = texto.replace(regex,"01101001 ");
    return texto;
}
function encriptarJ(texto) {
    var regex = /j/g;
    texto = texto.replace(regex,"01101010 ");
    return texto;
}
function encriptarK(texto) {
    var regex = /k/g;
    texto = texto.replace(regex,"01101011 ");
    return texto;
}
function encriptarL(texto) {
    var regex = /l/g;
    texto = texto.replace(regex,"01101100 ");
    return texto;
}
function encriptarM(texto) {
    var regex = /m/g;
    texto = texto.replace(regex,"01101101 ");
    return texto;
}function encriptarN(texto) {
    var regex = /n/g;
    texto = texto.replace(regex,"01101110 ");
    return texto;
}
function encriptarENIE(texto) {
    var regex = /ñ/g;
    texto = texto.replace(regex,"11110001 ");
    return texto;
}
function encriptarO(texto) {
    var regex = /o/g;
    texto = texto.replace(regex,"01101111 ");
    return texto;
}
function encriptarP(texto) {
    var regex = /p/g;
    texto = texto.replace(regex,"01110000 ");
    return texto;
}
function encriptarQ(texto) {
    var regex = /q/g;
    texto = texto.replace(regex,"01110001 ");
    return texto;
}
function encriptarR(texto) {
    var regex = /r/g;
    texto = texto.replace(regex,"01110010 ");
    return texto;
}
function encriptarS(texto) {
    var regex = /s/g;
    texto = texto.replace(regex,"01110011 ");
    return texto;
}
function encriptarT(texto) {
    var regex = /t/g;
    texto = texto.replace(regex,"01110100 ");
    return texto;
}
function encriptarU(texto) {
    var regex = /u/g;
    texto = texto.replace(regex,"01110101 ");
    return texto;
}
function encriptarV(texto) {
    var regex = /v/g;
    texto = texto.replace(regex,"01110110 ");
    return texto;
}
function encriptarW(texto) {
    var regex = /w/g;
    texto = texto.replace(regex,"01110111 ");
    return texto;
}function encriptarX(texto) {
    var regex = /x/g;
    texto = texto.replace(regex,"01111000 ");
    return texto;
}
function encriptarY(texto) {
    var regex = /y/g;
    texto = texto.replace(regex,"01111001 ");
    return texto;
}
function encriptarZ(texto) {
    var regex = /z/g;
    texto = texto.replace(regex,"01111010 ");
    return texto;
}
function encriptar(texto) {
    let validar = /[^a-zñ\s]/g;

    if (validar.test(texto)) {
        alert("Solo se admiten letras minusculas sin acentos ni caracteres especiales");
        return ""
    } else {
        texto = encriptarA(texto);
        texto = encriptarB(texto);
        texto = encriptarC(texto);
        texto = encriptarD(texto);
        texto = encriptarE(texto);
        texto = encriptarF(texto);
        texto = encriptarG(texto);
        texto = encriptarH(texto);
        texto = encriptarI(texto);
        texto = encriptarJ(texto);
        texto = encriptarK(texto);
        texto = encriptarL(texto);
        texto = encriptarM(texto);
        texto = encriptarN(texto);
        texto = encriptarENIE(texto);
        texto = encriptarO(texto);
        texto = encriptarP(texto);
        texto = encriptarQ(texto);
        texto = encriptarR(texto);
        texto = encriptarS(texto);
        texto = encriptarT(texto);
        texto = encriptarU(texto);
        texto = encriptarV(texto);
        texto = encriptarW(texto);
        texto = encriptarX(texto);
        texto = encriptarY(texto);
        texto = encriptarZ(texto);
        return texto;
    }
}
function desencrypt(){
    let textoDesencriptado = desencriptar(input.value);
    output.value = textoDesencriptado;
    output.style.backgroundImage = "none";
    input.value = "";
}
function desencriptarA(texto) {
    var regex = /01100001 /g;
    texto = texto.replace(regex,"a");
    return texto;
}
function desencriptarB(texto) {
    var regex = /01100010 /g;
    texto = texto.replace(regex,"b");
    return texto;
}
function desencriptarC(texto) {
    var regex = /01100011 /g;
    texto = texto.replace(regex,"c");
    return texto;
}
function desencriptarD(texto) {
    var regex = /01100100 /g;
    texto = texto.replace(regex,"d");
    return texto;
}
function desencriptarE(texto) {
    var regex = /01100101 /g;
    texto = texto.replace(regex,"e");
    return texto;
}
function desencriptarF(texto) {
    var regex = /01100110 /g;
    texto = texto.replace(regex,"f");
    return texto;
}
function desencriptarG(texto) {
    var regex = /01100111 /g;
    texto = texto.replace(regex,"g");
    return texto;
}
function desencriptarH(texto) {
    var regex = /01101000 /g;
    texto = texto.replace(regex,"h");
    return texto;
}
function desencriptarI(texto) {
    var regex = /01101001 /g;
    texto = texto.replace(regex,"i");
    return texto;
}
function desencriptarJ(texto) {
    var regex = /01101010 /g;
    texto = texto.replace(regex,"j");
    return texto;
}
function desencriptarK(texto) {
    var regex = /01101011 /g;
    texto = texto.replace(regex,"k");
    return texto;
}
function desencriptarL(texto) {
    var regex = /01101100 /g;
    texto = texto.replace(regex,"l");
    return texto;
}
function desencriptarM(texto) {
    var regex = /01101101 /g;
    texto = texto.replace(regex,"m");
    return texto;
}function desencriptarN(texto) {
    var regex = /01101110 /g;
    texto = texto.replace(regex,"n");
    return texto;
}
function desencriptarENIE(texto) {
    var regex = /11110001 /g;
    texto = texto.replace(regex,"ñ");
    return texto;
}
function desencriptarO(texto) {
    var regex = /01101111 /g;
    texto = texto.replace(regex,"o");
    return texto;
}
function desencriptarP(texto) {
    var regex = /01110000 /g;
    texto = texto.replace(regex,"p");
    return texto;
}
function desencriptarQ(texto) {
    var regex = /01110001 /g;
    texto = texto.replace(regex,"q");
    return texto;
}
function desencriptarR(texto) {
    var regex = /01110010 /g;
    texto = texto.replace(regex,"r");
    return texto;
}
function desencriptarS(texto) {
    var regex = /01110011 /g;
    texto = texto.replace(regex,"s");
    return texto;
}
function desencriptarT(texto) {
    var regex = /01110100 /g;
    texto = texto.replace(regex,"t");
    return texto;
}
function desencriptarU(texto) {
    var regex = /01110101 /g;
    texto = texto.replace(regex,"u");
    return texto;
}
function desencriptarV(texto) {
    var regex = /01110110 /g;
    texto = texto.replace(regex,"v");
    return texto;
}
function desencriptarW(texto) {
    var regex = /01110111 /g;
    texto = texto.replace(regex,"w");
    return texto;
}function desencriptarX(texto) {
    var regex = /01111000 /g;
    texto = texto.replace(regex,"x");
    return texto;
}
function desencriptarY(texto) {
    var regex = /01111001 /g;
    texto = texto.replace(regex,"y");
    return texto;
}
function desencriptarZ(texto) {
    var regex = /01111010 /g;
    texto = texto.replace(regex,"z");
    return texto;
}
function desencriptar(texto) {
    texto = desencriptarA(texto);
    texto = desencriptarB(texto);
    texto = desencriptarC(texto);
    texto = desencriptarD(texto);
    texto = desencriptarE(texto);
    texto = desencriptarF(texto);
    texto = desencriptarG(texto);
    texto = desencriptarH(texto);
    texto = desencriptarI(texto);
    texto = desencriptarJ(texto);
    texto = desencriptarK(texto);
    texto = desencriptarL(texto);
    texto = desencriptarM(texto);
    texto = desencriptarN(texto);
    texto = desencriptarENIE(texto);
    texto = desencriptarO(texto);
    texto = desencriptarP(texto);
    texto = desencriptarQ(texto);
    texto = desencriptarR(texto);
    texto = desencriptarS(texto);
    texto = desencriptarT(texto);
    texto = desencriptarU(texto);
    texto = desencriptarV(texto);
    texto = desencriptarW(texto);
    texto = desencriptarX(texto);
    texto = desencriptarY(texto);
    texto = desencriptarZ(texto);
    return texto;
}
function copy() {
    output.select();
    navigator.clipboard.writeText(output.value);
    output.value = "";
}