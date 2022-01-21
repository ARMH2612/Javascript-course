
// factory function
function address (street,city,zipCode) {
    return{
        street,
        city,
        zipCode
    }
} 

const adr1 = adresse('a','b','c')

// constructor function
function Adresse1 (street,city,zipCode){
        this.street=street,
        this.city=city,
        this.zipCode=zipCode
}

const adr2 = new Adresse1('a','b','c')

