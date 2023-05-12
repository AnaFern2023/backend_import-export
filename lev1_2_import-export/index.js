import { names, numbers } from './data.js'
import { firstName, allExceptOne, lastName, allExceptFirst, remove, removeDuplikate, sum, stringName, stringName2 } from './function.js'

console.log(firstName([...names]));
console.log(firstName([...numbers]));

console.log(allExceptOne(names));
console.log(allExceptOne(numbers));

console.log(lastName([...names]));
console.log(lastName([...numbers]));

console.log(allExceptFirst(names));
console.log(allExceptFirst(numbers));

console.log(remove(names, "Simon"));
console.log(remove(numbers, 1));

console.log(removeDuplikate([...numbers]));

console.log(sum([...numbers]));
console.log(sum(numbers));

console.log(stringName("hello"));
console.log(stringName2("hello"));