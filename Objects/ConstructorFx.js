// the job of this function is to create an object:
// the naming convention is diffrent ==> PascalNotation.

//instead of returning an object we'll use a diffrent aproche to initialise an object
function Circle(radius){
    // this: is a refrene to the object that is executing the code
    //for now imaine that it refrences an empty object
    this.radius = radius
    this.draw = function (){
        console.log("draw",radius);
    }
}

const circle = new Circle(3)
circle.draw()



//in js objects are dynamic, we can add methods and properties to them even afetr creation.
// add property:
circle.color = 'Yellow'

// delete propert:
delete circle.color

// Note:
// const circle = new Circle(3)
// the const here is for preventing the reassinment of 'circle'
// but we can still modify the the properties of the object cz circle is just pointing to it.

// circle.constructor:
// this return Circle(radius)....
// when we create an object, js will transform it to a consctuctor function, eg:
// let x = {} this will be => let x = new Object()
// other predefined constructor functions:
// new String() == '' "" ``
// new Boolean() == true, false
// new Number() == 1, 2, ...
// new Array()
// new Function() == when we create a function, js uses Fucntion() constructor function to create it.
