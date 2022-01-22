let numbers = [1,2,3,4]
another = numbers

// solution 1:
// reassign it
numbers=[]

//PS: another wont get an empty array cz the array [1,2,3,4] wasn't garbedg collected
// because its refrence is still assigned to another
console.log(another);

//solution 2:
// truncate the array:
numbers.length = 0;

// solution 3:
//  use the splice methode:
numbers.splice(0,numbers.length)

// solution 4:
// use the pop methode:
//PS: Not recommended
while (numbers.length>0){
    numbers.pop()
}
console.log(another);
