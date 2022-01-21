const circle = {
    radius: 1,
    draw(){
        console.log("draw");
    }
};

const another = {}
// old aproach :
for(let key in circle)
    another[key] = circle[key];

// new approaches:
const anpther1 = Object.assign({},circle)
// or spread operator;
const another3 = {...circle}