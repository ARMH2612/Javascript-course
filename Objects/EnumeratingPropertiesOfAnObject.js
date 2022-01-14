const circle = {
    radius: 1,
    draw(){
        console.log("draw");
    }
};

// we can use 'for in' to eterate over properties of an object:
for (let key in circle) {
    console.log(key, circle[key]);
} 

// this will return an error cz circle isn't iterable like arrays and maps:
// for (let key of circle) {
//     console.log(key, circle[key]);
// } 

// however we have this method : Objects.keys(Obj):
// this method returns an array with all the keys of a given object
for (let key of Object.keys(circle)) {
    console.log(key, circle[key]);
} 

// there's a semilar method: Object.entries(Obj)
// that returns pair key value arrays:
for (let key of Object.entries(circle)) {
    console.log(key);
} 

// to check if a property exists in a given object we can use in:
if('radius' in circle) {
    console.log('yes');
}