

function createCircle(radius){
    return {
       // radius: radius,
        radius,

        // draw: function (){
        //     console.log(draw);
        // }
        draw(){
            console.log("draw "+radius);
        }
    };
}

const circle1 = createCircle(1)
const circle2 = createCircle(2)

circle1.draw()
circle2.draw()