function square(num: number): number {
  return num * num;
}

console.log(square(5));
// Output: 25

// Function expression
const squareFE = function (num: number): number {
  return num * num;
};

// Higher-order function
function add(a: number,c?:number): Function {
  if(c){
    return function(b: number): number {
      return a + b + c;
  }
  } else {

    return function(b: number): number {
        return a + b ;
      }
  }
}

const addWith5 = add(5,8);
console.log(addWith5(10));
console.log(addWith5(8));

const addWith6 = add(6);
console.log(addWith6(3));


