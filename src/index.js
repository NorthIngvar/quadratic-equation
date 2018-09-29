module.exports = function solveEquation(equation) {
  var result = [];
var 
a,
b,
c,
bTemporary = [],
cTemporary = [],
Discriminant,
x_1,
x_2,
temporary = equation.split('*');

a = temporary[0];
bTemporary = temporary[1].split('x^2');
cTemporary = temporary[2].split('x');
b = bTemporary[1].split(' ').join('');
c = cTemporary[1].split(' ').join('');

Discriminant = b * b - 4 * a * c;

if (Discriminant < 0) {
return result; }

else if (Discriminant === 0) {
x_1 = -b / 2 * a;
return result.push(x_1); }

else {

x_1 = Math.round((-b + Math.sqrt(Discriminant)) / (2 * a));
x_2 = Math.round((-b - Math.sqrt(Discriminant)) / (2 * a));

if (x_1 < x_2) {
result.unshift(x_1, x_2);
}
else {
result.unshift(x_2, x_1);
}
}
return result;

}

