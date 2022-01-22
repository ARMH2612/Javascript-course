const numbers = [1,-2,3]
// to make some tests on array elements
// for eg: check if the elements are positive, it returns true or flase if it encounters the first negative element 
const allPositive = numbers.every((value)=>{
    return value>=0
})
console.log(allPositive);

// to check if at least one element that follows some criteria we use .some instead:

const atLeastonePos = numbers.some((value)=>{
    return value >=0
})

console.log(atLeastonePos);