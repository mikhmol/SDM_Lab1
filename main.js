const readline = require('readline');
const fs = require('fs');
const { runInteractiveMode } = require('./interactive');
const { runFileMode } = require('./noninteractive');

if (process.argv.length === 2) {
    runInteractiveMode();
} else if (process.argv.length === 3) {
    const filePath = process.argv[2];
    if (fs.existsSync(filePath)) {
        runFileMode(filePath);
    } else {
        console.error("Файл не існує");
    }
} else {
    console.log("Неправильна кількість аргументів");
}