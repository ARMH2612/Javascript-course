function Adresse1 (street,city,zipCode){
    this.street=street,
    this.city=city,
    this.zipCode=zipCode
}

const adr1 = new Adresse1('a','b','c')
const adr2 = new Adresse1('a','b','c')

function areEqual(address1, address2) {
    
    return address1.street===address2.street &&
     address1.city===address2.city &&
      address1.zipCode===address2.zipCode
    // let adr1 = Object.keys(address1)
    // let adr2 = Object.keys(address2)
    // if(adr1.length != adr2.length){
    //     return false
    // }
    // for(let i=0; i<adr1.length; i++){
    //     if(adr1[i] != adr2[i]){
    //         return false
    //     }
    // }
    // return true
}

function areSame(address1, address2) {
    return(address1===address2)
}