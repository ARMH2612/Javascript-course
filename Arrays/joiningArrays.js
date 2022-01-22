const numbers = [1,2,3]
// this function returns the elements of thearray as a string
// const joined = numbers.join()


// we can pass an argument as a separator:
const joined = numbers.join('-')

// theere's a methode that goes hand to hand with join
// which is split, it is a string method it only works on strings.
// it returns an array with all the elements after a specific separator
const mesasge = 'This is my first message'
const parts = mesasge.split(' ')
console.log(parts);

console.log(joined);