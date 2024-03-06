const numero = 9;

function estaNaSequenciaFibonacci(numero) {
    let a = 0, b = 1;
    while (b < numero) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b === numero;
}

if (estaNaSequenciaFibonacci(numero)) {
    console.log(`O número ${numero} está na sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não está na sequência de Fibonacci.`);
}