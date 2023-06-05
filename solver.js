function solveQuadraticEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return "Рівняння не має розв'язків";
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        return `Рівняння має один розв'язок: x = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Рівняння має два розв'язки: x1 = ${x1}, x2 = ${x2}`;
    }
}

module.exports = { solveQuadraticEquation };