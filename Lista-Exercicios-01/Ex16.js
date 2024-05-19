function ehPrimo(num) {
    let i = 2;
    while(i < num) {
        if(num % i === 0) return false;
        i++;
    }
    return num > 1;
}

let contador = 0;
let numero = 101;

while(contador < 50) {
    if(ehPrimo(numero)) {
        console.log(numero);
        contador++;
    }
    numero++;
}