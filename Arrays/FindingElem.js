//Primitves
const numbers = [1,2,3,1,4]

// this methode returns the index of a given elem else -1
console.log(numbers.indexOf("1")) // returns -1 cz we dont have "1" but 1

// this methode returns the lase index of a given elem
console.log(numbers.lastIndexOf(1));

//check if an array contains a given elem: return true or false
console.log(numbers.includes(1));

//////////////////////////////////////////////////
// Objects:
const courses = [
    {id:1,name:'a'},
    {id:2,name:'b'}
]

// includes doesnt work with objects because objects have diffrenct refrences
// so the object passed to the function has diffrent reference than in the array object
// thus we get false as a return.
// inorder to search for objects, we need to use the find method:

const a = courses.find(function(course){
    return course.name === 'a'
})

console.log(a);

// there's a cimilar function findIndex, it returns the index instead of the elemet