# SDM_Lab1
Software development methodology, lab 1
# Quadratic Equation Solver

---

## Description

The Quadratic Equation Solver is a console application that allows users to solve quadratic equations in two different modes: Interactive and Non-interactive (File) mode.

Example of quadratic equation: ax^2 + bx + c = 0, where a ≠ 0

In the Interactive mode, the application is launched without any command-line arguments. It prompts the user to enter the three coefficients (a, b, and c) of the quadratic equation one by one. After receiving the coefficients, it calculates and displays the resulting equation and the roots.

In the Non-interactive mode, the program accepts a single command-line argument, which is the path to a file containing the coefficients of the equation. The file should have three numbers (a, b, and c) separated by a space. The decimal symbol expected is a dot. After the last coefficient (c), there should be a newline character (\n) to signify the end of the file. The program reads the coefficients from the file, solves the quadratic equation, and displays the results.

## How to run

1. Clone the repository to your local machine: 

```
git clone https://github.com/mikhmol/SDM_Lab1
```

2. Install Node.js, if not installed.

3. Open a terminal and navigate to the folder with this program:

```
cd ./SDM_Lab1
```

4. Install the dependencies:

```
npm i
```

5. To run program in interactive mode:

``` 
node main.js
```

6. To run program in non-interactive mode
(you need have a .txt file with three arguments, for example: 1 2 3)

```
node main.js path-to-file
```

[Revert commit](https://github.com/mikhmol/SDM_Lab1/commit/9b4e3e0e62ae3c5510cb75b8de2584fc4a07a454)
