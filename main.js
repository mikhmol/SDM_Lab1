const readline = require('readline');
const fs = require('fs');
const { runInteractiveMode } = require('./interactive');

if (process.argv.length === 2) {
    runInteractiveMode();
} else {
    console.log("Неправильна кількість аргументів");
}