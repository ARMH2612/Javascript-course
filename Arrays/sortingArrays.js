const numbers = [3,5,2,1,4]

numbers.sort()

// reverse elem in the array
numbers.reverse()

// these methodes works perfectly with numbers and strings
// but when we have objects we have to do some extra work
const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'},
]
console.log(courses);

courses.sort((a,b)=>{
    // this function works like this:
    // a<b => -1 | a>b => 1 | a===b => 0
    const nameA = a.name.toLowerCase() // or toUpperCase()
    const nameB = b.name.toLowerCase() // or toUpperCase()
    if(nameA<nameB) return -1
    if(nameA>nameB) return 1
    return 0
})

console.log(courses);