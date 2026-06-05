// object = It is a datatype

// create an object

const capitals = {
    India : "New Delhi",
    Telangana : "Hyderabad",
    Maharashtra : "Mumbai",
    location : function() {
        return "I live in " +this.telangana
    }
}

console.log(capitals.India)


// modify an object

capitals.Maharashtra = "Bombay"

console.log(capitals.Maharashtra)


// inside the object is called as method
// dynamically can create an object and take the value for that

const fruits = new Object()

fruits.apple = "Red"

console.log(fruits)