const readline = require('readline');
const { solveQuadraticEquation } = require('./solver');

function runInteractiveMode() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Введіть коефіцієнти a, b, c: ", (input) => {
        const [a, b, c] = input.split(" ").map(parseFloat);
        const result = solveQuadraticEquation(a, b, c);
        console.log(result);
        rl.close();
    });
}

module.exports = { runInteractiveMode };