const first = [1,2,3]
const second = [4,5,6]

const combined = first.concat(second)

//slice an array:
//start at 2 and finish at 4, pos 4 not included 
const slice =combined.slice(2,4)
//get all the elements starting from pos 2
const slice2 =combined.slice(2)
//get a copy from the combined array
const slice3 =combined.slice()

//PS:
/*
if we are using primitives in the array, the values are copied,
wheras the objects are not copied but their refrences; the elements
will refrence the same objects
*/