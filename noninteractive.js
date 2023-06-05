const fs = require('fs');
const { solveQuadraticEquation } = require('./solver');

function runFileMode(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Помилка читання файлу:", err);
            return;
        }

        const [a, b, c] = data.trim().split(" ").map(parseFloat);
        const result = solveQuadraticEquation(a, b, c);
        console.log(result);
    });
}

module.exports = { runFileMode };