// objects & the dot


var person = new Object();

person["firstname"] = "Ali";
person["lastname"] = "Khan";


var fullname = "firstname";


console.log(person);
console.log(person[fullname]);


person.address = new Object();
person.address.street = "25 Thurston Road";
person.address.city = "Slough";
person.address.county = "berkshire";



console.log("After this text, we are using various methods of accessing within object");
console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["county"]);