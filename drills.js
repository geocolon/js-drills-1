function yearOfBirth(age) {
    try {
        yearOfBirth(-25);
    }
    catch (e){
     if (age < 0){
        throw new Error ('Age can not be a negative');
        } else {
         return 2018 - age;
        }
    }   
}


function whoAmI(name, age){
    if(name === undefined && age === undefined || typeof age !== "number") {
        console.error("Arguments not valid.");
    }


    let yob = yearOfBirth(age);
    console.log(`Hi my name is ${name} and I'm ${age} years old.`);
    console.log(`I was born in ${yob}`);
}


whoAmI("Alexa", "string");