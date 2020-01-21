console.log("functions")

const nuggetizer = (animal) => {
    const output = `processed ${animal}`;

   return output;
    
    
}

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('tire'));

const dogBreed = (dog) => {
   return `my favorite dog is ${dog}`

};
console.log(dogBreed('lab'));
console.log(dogBreed('actually a cat'));
console.log(dogBreed('german shepherd'));
console.log(dogBreed('rotweiller'));

const fortyTwo = (number) => {
    return number + 42
}

console.log(fortyTwo(42));
console.log(fortyTwo(36));

//

const oldAge = (year) => {
    return 2099 - year
}
console.log(oldAge(1954));
console.log(oldAge(1989));

//