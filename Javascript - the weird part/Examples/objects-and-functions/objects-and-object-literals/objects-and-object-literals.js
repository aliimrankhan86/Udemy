// objects & object literals

var person = {
    firstname: 'Ali imran',
    lastname: 'Khan',
    address: {
        door: '25',
        street: 'Thurston Road',
        town: 'slough'
    },
    family: {
        wife: 'Nazish',
        kid: {
            kid1: 'Anaya',
            kid2: 'Aizah'
        }
    }
};



function greet(info) {
    console.log('Hi ' + info.firstname);
}

greet(person);


greet({
    firstname: 'Anaya',
    lastname: 'Khan'
});




