// new Function() == when we create a function, js uses Fucntion() constructor function to create it.
function Circle(radius){

    this.radius = radius
    this.draw = function (){
        console.log("draw",radius);
    }
}

const Circle1 = new Function('radius',`
this.radius = radius
this.draw = function (){
    console.log("draw",radius);
}
`)

const c1 = new Circle1(2)
console.log(c1);