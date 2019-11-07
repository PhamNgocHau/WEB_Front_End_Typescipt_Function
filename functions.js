function square(num) {
    return num * num;
}
console.log(square(5));
// Output: 25
// Function expression
var squareFE = function (num) {
    return num * num;
};
// Higher-order function
function add(a, c) {
    if (c) {
        return function (b) {
            return a + b + c;
        };
    }
    else {
        return function (b) {
            return a + b;
        };
    }
}
var addWith5 = add(5, 8);
console.log(addWith5(10));
console.log(addWith5(8));
var addWith6 = add(6);
console.log(addWith6(3));
